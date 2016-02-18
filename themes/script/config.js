require.config({
    baseUrl: '../themes/script',
    paths: {
        jquery:'/node_modules/jquery/dist/jquery.min',
        bootstrap:'/node_modules/bootstrap/dist/js/bootstrap.min',
        metisMenu:'/node_modules/metismenu/dist/metisMenu.min'
    },
    map: {
        '*': {
            'css': '/node_modules/require-css/css.min.js'
        }
    },
    shim:{
        'bootstrap':{
            deps:['jquery','css!/node_modules/bootstrap/dist/css/bootstrap.min.css','css!/node_modules/font-awesome/css/font-awesome.min.css']
        },
        'module/base':{
            deps:['jquery','bootstrap']
        }
    }
});