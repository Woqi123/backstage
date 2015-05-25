//顶部条的问候
angular.module('ngApp', []).controller('navTopGreet', function ($scope) {
    $scope.hello = '晚上好';
});
$(function () {

    //侧栏收缩
    $('#side-menu').metisMenu();

    //展示区域iframe高度计算
    $("#frameWrapper").load(function () {
        var mainheight = $(this).contents().find("body").height();
        $(this).height(mainheight);
    });

    //title提示框美化
    $('[data-toggle="tooltip"]').tooltip();

});
