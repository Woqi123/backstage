# 后台模板

> 基于Bootstrap开发的后台模板,
> 用bower进行第三方库的管理,
> 用require对js进行模块化加载.

## 目录

1. 工程结构
2. 静态页面运行
3. 框架与工具
4. 代码规范
5. 团队开发

## 工程结构

* `/static`存放着后台模板的静态页面--demo
* `/themes`存放着后台模板的样式以及脚本
* `/libs`是bower包管理器的下载目录,`.bowerrc`和`bower.json`是它的配置文档
* `/node_modules`是npm包管理器的下载目录,`package.json`是它的配置文档
* `.gitignore`是整个工程的git过滤文档，屏蔽一些不需要被git版本管理的文件及文件夹
* `fis-config.js`是用来跑项目静态页面的配置文档
* `gulpfile.js`做前端自动化的配置文件

## 运行与发布

在工程根目录下,分别执行下面两段命令,安装项目依赖.

* `npm install`   //项目开发环境用到的模块
* `bower install` //项目生产环境用到的库

常用命令行(在工程根目录下运行):

* 开启iis服务器:`npm run server`
* 运行demo:`npm run publish`

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

## 代码规范

### html规范

### css规范

#### less

本项目的样式是基于`css预编译`工具`less`写的.

#### 注释

1. 开发的注释,一律使用`//`,它是不会被less编译生成出来的
2. 大功能板块用`//--------------------------------------------------------【xxxx】`的方式来做划分
3. 大功能板块下的小划分用`//xxxx`的方式来写

### js规范

#### module

1. `/module`下的模块是功能模块
2. 可能会直接被沿用到其它项目当中去,所以开发\修改此类模块要慎重,前期最好确认好api.
3. 功能模块修改之后需要在文件的最顶部修改版本号,版本号分为三位数`1.0.3`,小问题修改改第三位,api修改改第二位,整个模块重写改第一位.
4. 模块顶部尽量写上使用注释,便于其它开发人员的使用

#### page

`/page`下的模块是页面模块,尽量保证与页面的html名字对应,方便快速查找到这个文件.

#### demo
`/demo`里放的是静态页面用到的js脚本


## 团队开发

1. 工程里的前端文件不要删除,后续增加新的demo页面还用得着.
2. 用git进行团队开发版本管理,修改提交注意详细描述修改内容
3. 页面多写注释,便于他人的开发理解
4. 沿用项目中的代码习惯,保证一致性(比如文件名\样式名的命名方式等)
