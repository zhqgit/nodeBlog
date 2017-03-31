$(function() {
    var editor = new wangEditor('inputContent');


    // if($("#commentContent")){
    // 	var editor = new wangEditor('commentContent');
    // }

    editor.config.emotions = {
        // 支持多组表情

        // 第一组，id叫做 'default' 
        // 'default': {
        // 	title: '默认', // 组名称
        // 	data: './emotions.data' // 服务器的一个json文件url，例如官网这里配置的是 http://www.wangeditor.com/wangEditor/test/emotions.data
        // },
        // 第二组，id叫做'weibo'
        'weibo': {
            title: '微博表情', // 组名称
            data: [ // data 还可以直接赋值为一个表情包数组
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',
                    value: '[草泥马]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',
                    value: '[神马]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif',
                    value: '[浮云]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif',
                    value: '[给力]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif',
                    value: '[围观]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif',
                    value: '[威武]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif',
                    value: '[熊猫]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif',
                    value: '[兔子]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif',
                    value: '[奥特曼]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif',
                    value: '[囧]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif',
                    value: '[互粉]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif',
                    value: '[礼物]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ac/smilea_thumb.gif',
                    value: '[呵呵]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0b/tootha_thumb.gif',
                    value: '[哈哈]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/14/tza_thumb.gif',
                    value: '[可爱]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/af/kl_thumb.gif',
                    value: '[可怜]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a0/kbsa_thumb.gif',
                    value: '[挖鼻屎]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f4/cj_thumb.gif',
                    value: '[吃惊]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/shamea_thumb.gif',
                    value: '[害羞]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c3/zy_thumb.gif',
                    value: '[挤眼]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/29/bz_thumb.gif',
                    value: '[闭嘴]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/71/bs2_thumb.gif',
                    value: '[鄙视]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/lovea_thumb.gif',
                    value: '[爱你]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/9d/sada_thumb.gif',
                    value: '[泪]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/19/heia_thumb.gif',
                    value: '[偷笑]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/8f/qq_thumb.gif',
                    value: '[亲亲]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/b6/sb_thumb.gif',
                    value: '[生病]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/58/mb_thumb.gif',
                    value: '[太开心]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/17/ldln_thumb.gif',
                    value: '[懒得理你]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/98/yhh_thumb.gif',
                    value: '[右哼哼]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/zhh_thumb.gif',
                    value: '[左哼哼]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a6/x_thumb.gif',
                    value: '[嘘]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/af/cry.gif',
                    value: '[衰]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/73/wq_thumb.gif',
                    value: '[委屈]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/9e/t_thumb.gif',
                    value: '[吐]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f3/k_thumb.gif',
                    value: '[打哈欠]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/27/bba_thumb.gif',
                    value: '[抱抱]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7c/angrya_thumb.gif',
                    value: '[怒]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/5c/yw_thumb.gif',
                    value: '[疑问]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/a5/cza_thumb.gif',
                    value: '[馋嘴]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/88_thumb.gif',
                    value: '[拜拜]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/e9/sk_thumb.gif',
                    value: '[思考]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/24/sweata_thumb.gif',
                    value: '[汗]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7f/sleepya_thumb.gif',
                    value: '[困]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6b/sleepa_thumb.gif',
                    value: '[睡觉]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/90/money_thumb.gif',
                    value: '[钱]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0c/sw_thumb.gif',
                    value: '[失望]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/cool_thumb.gif',
                    value: '[酷]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/8c/hsa_thumb.gif',
                    value: '[花心]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/49/hatea_thumb.gif',
                    value: '[哼]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/36/gza_thumb.gif',
                    value: '[鼓掌]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d9/dizzya_thumb.gif',
                    value: '[晕]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/1a/bs_thumb.gif',
                    value: '[悲伤]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/62/crazya_thumb.gif',
                    value: '[抓狂]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/91/h_thumb.gif',
                    value: '[黑线]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6d/yx_thumb.gif',
                    value: '[阴险]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/nm_thumb.gif',
                    value: '[怒骂]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/hearta_thumb.gif',
                    value: '[心]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ea/unheart.gif',
                    value: '[伤心]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/58/pig.gif',
                    value: '[猪头]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d6/ok_thumb.gif',
                    value: '[ok]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d9/ye_thumb.gif',
                    value: '[耶]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d8/good_thumb.gif',
                    value: '[good]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c7/no_thumb.gif',
                    value: '[不要]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d0/z2_thumb.gif',
                    value: '[赞]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/40/come_thumb.gif',
                    value: '[来]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d8/sad_thumb.gif',
                    value: '[弱]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/91/lazu_thumb.gif',
                    value: '[蜡烛]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6a/cake.gif',
                    value: '[蛋糕]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/d3/clock_thumb.gif',
                    value: '[钟]'
                }, {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/1b/m_thumb.gif',
                    value: '[话筒]'
                }
            ]
        }
        // 下面还可以继续，第三组、第四组、、、
    };


    // 仅仅想移除某几个菜单，例如想移除『插入代码』和『全屏』菜单：
    // 其中的 wangEditor.config.menus 可获取默认情况下的菜单配置
    editor.config.menus = $.map(wangEditor.config.menus, function(item, key) {
        if (item === 'location') {
            return null;
        }
        // if (item === 'img') {
        // 	return null;
        // }
        if (item === 'video') {
            return null;
        }
        return item;
    });


    // 上传图片
    editor.config.uploadImgUrl = '/upload';

    // // 自定义上传事件
    // editor.config.uploadImgFns.onload = function(resultText, xhr) {
    // 	// resultText 服务器端返回的text
    // 	// xhr 是 xmlHttpRequest 对象，IE8、9中不支持

    // 	// 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
    // 	var originalName = editor.uploadImgOriginalName || '';
    // 	alert(resultText);
    // 	// 如果 resultText 是图片的url地址，可以这样插入图片：
    // 	editor.command(null, 'insertHtml', '<img src="' + resultText + '" alt="' + originalName + '" style="max-width:100%;"/>');
    // 	// 如果不想要 img 的 max-width 样式，也可以这样插入：
    // 	// editor.command(null, 'InsertImage', resultText);
    // };



    editor.create();
});