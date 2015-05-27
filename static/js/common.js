$(function () {

    //侧栏收缩
    $('#side-menu').metisMenu();
    //$('#side-menu li').on('click',function(){
    //    $(this).addClass('active').siblings('li').removeClass('active');
    //});

    //展示区域iframe高度计算
    $("#frameWrapper").load(function () {
        var mainheight = $(this).contents().find("body").height();
        $(this).height(mainheight);
    });

    //title提示框美化
    $('[data-toggle="tooltip"]').tooltip();

    $(window).bind("load resize", function() {
        var topOffset = 50,
            width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100;
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});
