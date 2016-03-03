fis.set('project.ignore', ['node_modules/**', 'fis-conf.js','gulpfile.js','package.json','README.md','bower.json','.gitignore','.bowerrc']);

fis
    .match('/static/(*.html)', {
        release: '$1'
    })
    .match('/static/includes/*.html', {
        release: false
    });