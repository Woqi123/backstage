//--------------------------------------------------------------------【引入依赖】
var gulp = require('gulp'),                         //引入gulp
    $ = require('gulp-load-plugins')(),             //动态载入`gulp-`开头的模块依赖
    args = require('yargs').argv,                   //获取CLI参数
    del = require('del'),                           //删除文件&文件夹
    child_process = require("child_process");       //node进程管理

//--------------------------------------------------------------------【CLI接口变量】
var root = args.d || './',          //服务器运行目录
    port = args.p || 8877,              //端口号
    watch = !!args.w,                   //是否监听文件变化
    clear = !!args.c;                   //是否清除目录

//--------------------------------------------------------------------【任务配置】
gulp.task('default', function () {
    // 将你的默认的任务代码放在这
});

//--------------------------------------------------------------------【启动一个Web服务器】
gulp.task('server', function () {

    //$.connect.serverClose();

    if (clear) {
        del.sync(root + '/', {
            force: true
        });
    }

    var url = "http://127.0.0.1",
        cmd = '';

    switch (process.platform) {
        case 'wind32':
            cmd = 'start';
            break;

        case 'linux':
            cmd = 'xdg-open';
            break;

        case 'darwin':
            cmd = 'open';
            break;
    }

    $.connect.server({
        root: root,
        port: port
    });

    child_process.exec(cmd + ' ' + url + ':' + port+'/app');

});
