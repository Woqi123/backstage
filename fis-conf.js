fis.set('project.ignore', ['node_modules/**', 'fis-conf.js','gulpfile.js','package.json','README.md','bower.json','.gitignore','.bowerrc']);

fis
    .hook('relative')
    .match('**', {
        relative: true
    })

    //map映射表内嵌网页
    .match('::packager', {
        postpackager: fis.plugin('loader', {
            allInOne: false,
            useInlineMap: true
        })
    })
    //.match('/static/(*.html)', {
    //    release: '$1'
    //})
    //.match('/static/includes/*.html', {
    //    release: false
    //});