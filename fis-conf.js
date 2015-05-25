fis.config.merge({
    project:{
        exclude:['README.md']
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
                reg : /^\/dist\/css\/(.*\.css|.*\.styl)/i,
                release : '/themes/css/$1'
            },
            {
                reg : /^\/dist\/js\/(.*\.js)/i,
                release : '/themes/js/$1'
            },
            {
                reg : /^\/dist\/data\/(.*\.js)/i,
                release : '/static/data/$1'
            }
        ]
    }
});