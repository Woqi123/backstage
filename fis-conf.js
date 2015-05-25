fis.config.merge({
    project:{
        exclude:['README.md']
    },
    roadmap : {
        domain : {
            //所有css文件添加http://localhost:8080作为域名
            '**.css' : 'http://localhost:8080'
        }
    }
});