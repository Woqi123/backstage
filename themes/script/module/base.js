define(function (require, exports, module) {
    require('jquery');

    //--------------------------------------------------【侧栏收缩】

    require('metisMenu');

    $('#side-menu').metisMenu();

    //--------------------------------------------------【选项卡展示】
    //require('module/tabControl');
    //
    //var tabIndex=1;
    //$('#side-menu a').on('click',function(e){
    //    e.stopPropagation();
    //    e.preventDefault();
    //
    //    var strHref=$(this).attr('href'),
    //        strText=$(this).text();
    //
    //    if(strHref=='javascript:;'||strHref=='#'){
    //        return false;
    //    }
    //    TabControlAppend(tabIndex, strText, strHref);
    //    tabIndex++;
    //
    //    $("iframe").load(function () {
    //        var mainheight = $(this).contents().find("body").height();
    //        $(this).height(mainheight);
    //        $(this).width('100%');
    //    });
    //});
    //
    ////展示区域iframe高度计算
    ////$("iframe").load(function () {
    ////    var mainheight = $(this).contents().find("body").height();
    ////    $(this).height(mainheight);
    ////    $(this).width('100%');
    ////});

    //--------------------------------------------------【title提示框美化】

    $('[data-toggle="tooltip"]').tooltip();

    //--------------------------------------------------【初始化页面的样式】

    $(window).on("resize", function() {
        var topOffset = 50,
            width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;

        // 导航栏的默认显示隐藏
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100;
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        // 内容区域的默认最小高(不设置时与导航的分割线撑不开)
        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    }).trigger('resize');

    //--------------------------------------------------【根据url展开侧栏导航】

    var url = window.location;
    $('#side-menu a').filter(function () {
        return this.href == url || url.href.indexOf(this.href) == 0;
    })
        .last().addClass('active')
        .parents('li').addClass('active');
});