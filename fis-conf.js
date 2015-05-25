fis.config.merge({
    project:{
        exclude:[/less\//,'LICENSE','README.md']
    },
    roadmap : {
        domain : {
            //所有css文件添加http://localhost:8080作为域名
            '**.css' : 'http://localhost:8080'
        },
        path : [
            {
                reg : /^\/pages\/(.*\.html)/i,
                release : '/static/$1'
            },
            {
                reg : /^\/dist\/css\/(.*\.css)/i,
                release : '/static/css/$1'
            },
            {
                reg : /^\/dist\/(js|data)\/(.*\.js)/i,
                release : '/static/$1/$2'
            }
        ]
    }
});