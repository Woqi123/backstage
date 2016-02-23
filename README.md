# 后台模板

> 基于Bootstrap开发的后台模板,
> 用bower进行第三方库的管理,
> 用require对js进行模块化加载.

## 目录

1. 工程结构
2. 静态页面运行
3. 框架与工具
4. 团队开发

## 工程结构

* `/static`存放着后台模板的静态页面--demo
* `/themes`存放着后台模板的样式以及脚本
* `/libs`是bower包管理器的下载目录,`.bowerrc`和`bower.json`是它的配置文档
* `/node_modules`是npm包管理器的下载目录,`package.json`是它的配置文档
* `.gitignore`是整个工程的git过滤文档，屏蔽一些不需要被git版本管理的文件及文件夹
* `fis-config.js`是用来跑项目静态页面的配置文档
* `gulpfile.js`做前端自动化的配置文件

## demo运行

1. 安装node, 安装时会连带安装npm包管理器
2. `npm install bower -g`, 安装bower第三方库管理
3. 项目根目录下依次执行命令, `npm install`和`bower install`安装项目依赖
4. 开启iis服务器, `npm run server`
5. 运行demo, `npm run demo`

## 框架与工具

### Bootstrap3
前端开发框架[http://v3.bootcss.com/](http://v3.bootcss.com/)

### requirejs

前端模块化开发框架[http://www.requirejs.cn/](http://www.requirejs.cn/)

### bower

用来下载github最新的前端工具or框架[http://segmentfault.com/a/1190000000349555](http://segmentfault.com/a/1190000000349555)

### npm

跑fis会有一些node模块依赖,请在工程根目录下运行`npm install`下载依赖的node模块

### fis

百度开发的[前端自动化工具](http://fis.baidu.com/),安装方式:[http://fis.baidu.com/fis3/docs/beginning/install.html](http://fis.baidu.com/fis3/docs/beginning/install.html)

### gulp

做一些项目中的自动化操作[gulpjs.com.cn/docs/getting-started/](gulpjs.com.cn/docs/getting-started/)

### js规范

#### module

1. `/module`下的模块是功能模块
2. 功能模块修改之后需要在文件的最顶部修改版本号,版本号分为三位数`1.0.3`,小问题修改改第三位,api修改改第二位,整个模块重写改第一位.
3. 模块顶部尽量写上使用注释,便于其它开发人员的使用

#### page

`/page`下的模块是页面模块,尽量保证与页面的html名字对应,方便快速查找到这个文件.

#### demo
`/demo`里放的是静态页面用到的js脚本


## 团队开发

1. 工程里的demo文件不要删除,后续增加新的demo页面还用得着.
2. 需要添加新插件找前端协助添加