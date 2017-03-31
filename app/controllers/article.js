var mongoose = require('mongoose')
var Article = mongoose.model('Article')
var Catetory = mongoose.model('Catetory')
var Comment = mongoose.model('Comment')
var _ = require('underscore')
var fs = require('fs')
var path = require('path')

// detail page
exports.pagedetail = function(req, res) {
  var id = req.params.id

  Article.update({_id: id}, {$inc: {pv: 1}}, function(err) {
    if (err) {
      console.log(err)
    }
  })

  Article.findById(id, function(err, article) {
    Comment
      .find({article: id})
      .populate('from', 'name')
      .populate('reply.from reply.to', 'name')
      .exec(function(err, comments) {
        if(err){
            console.log(err)
          }
        res.render('pagedetail', {
          title: 'imooc 详情页',
          article: article,
          comments: comments
        })
      })
  })
}

// admin new page
exports.new = function(req, res) {
  Catetory.find({}, function(err, catetories) {
    res.render('article', {
      title: '文章录入页',
      catetories: catetories,
      article: {}
    })
  })
}

// admin update page
exports.update = function(req, res) {
  var id = req.params.id

  if (id) {
    Article.findById(id, function(err, article) {
      Catetory.find({}, function(err, catetories) {
        res.render('admin', {
          title: '文章更新页',
          article: article,
          catetories: catetories
        })
      })
    })
  }
}

// // admin poster
// exports.savePoster = function(req, res, next) {
//   var posterData = req.files.uploadPoster
//   var filePath = posterData.path
//   var originalFilename = posterData.originalFilename

//   if (originalFilename) {
//     fs.readFile(filePath, function(err, data) {
//       var timestamp = Date.now()
//       var type = posterData.type.split('/')[1]
//       var poster = timestamp + '.' + type
//       var newPath = path.join(__dirname, '../../', '/public/upload/' + poster)

//       fs.writeFile(newPath, data, function(err) {
//         req.poster = poster
//         next()
//       })
//     })
//   }
//   else {
//     next()
//   }
// }

// admin post movie
exports.save = function(req, res) {
  var id = req.body.article._id
  var articleObj = req.body.article
  var _article

  if (req.poster) {
    articleObj.poster = req.poster
  }

  if (id) {
    Article.findById(id, function(err, article) {
      if (err) {
        console.log(err)
      }

      _article = _.extend(article, articleObj)
      _article.save(function(err, article) {
        if (err) {
          console.log(err)
        }

        res.redirect('/article/' + article._id)
      })
    })
  }
  else {
    _article = new Article(articleObj)

    var catetoryId = articleObj.catetory
    var catetoryName = articleObj.catetoryName

    _article.save(function(err, article) {
      if (err) {
        console.log(err)
      }
      if (catetoryId) {
        Catetory.findById(catetoryId, function(err, catetory) {
          catetory.articles.push(article._id)

          catetory.save(function(err, catetory) {
            res.redirect('/article/' + article._id)
          })
        })
      }
      else if (catetoryName) {
        var catetory = new Catetory({
          name: catetoryName,
          articles: [article._id]
        })

        catetory.save(function(err, catetory) {
          article.catetory = catetory._id
          article.save(function(err, article) {
            res.redirect('/article/' + article._id)
          })
        })
      }
    })
  }
}

// list page
exports.list = function(req, res) {
  Article.find({})
    .populate('catetory', 'name')
    .exec(function(err, articles) {
      if (err) {
        console.log(err)
      }

      res.render('articleslist', {
        title: 'imooc 列表页',
        articles: articles
      })
    })
}


//list web-articles page
exports.weblist = function(req, res) {
  Catetory
        .findOne({'name':'前端'})
        .populate({
          path:'articles',
          select:'title content summary img'
          // options:{limit:5}
        })
        .exec(function(err,catetory){
          if(err){
            console.log(err)
          }
          res.render('weblist',{
            catetory:catetory
          })
        })
}


// // admin update page
// exports.update = function(req, res) {
//   var id = req.params.id

//   if (id) {
//     Article.findById(id, function(err, article) {
//       Catetory.find({}, function(err, catetories) {
//         res.render('admin', {
//           title: '文章更新页',
//           article: article,
//           catetories: catetories
//         })
//       })
//     })
//   }
// }



//list life-articles page
exports.lifelist = function(req, res) {
  Catetory
        .findOne({'name':'杂记'})
        .populate({
          path:'articles',
          select:'title content summary img'
          // options:{limit:5}
        })
        .exec(function(err,catetory){
          if(err){
            console.log(err)
          }
          res.render('lifelist',{
            catetory:catetory
          })
        })
}


// list page
exports.del = function(req, res) {
  var id = req.query.id

  if (id) {
    Article.remove({_id: id}, function(err, article) {
      if (err) {
        console.log(err)
        res.json({success: 0})
      }
      else {
        res.json({success: 1})
      }
    })
  }
}