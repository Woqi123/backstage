require.config({
    baseUrl: '../themes/script',
    paths: {
        jquery:'/libs/jquery/dist/jquery.min',
        bootstrap:'/libs/bootstrap/dist/js/bootstrap.min',
        metisMenu:'/libs/metismenu/dist/metisMenu.min',
        datatables:'/libs/datatables/media/js/jquery.dataTables',
        'datatables-beautify':'/libs/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min'
    },
    map: {
        '*': {
            'css': '/libs/require-css/css.min.js'
        }
    },
    shim:{
        'bootstrap':{
            deps:['jquery','css!/libs/bootstrap/dist/css/bootstrap.min.css','css!/libs/font-awesome/css/font-awesome.min.css']
        },
        'module/base':{
            deps:['jquery','bootstrap']
        },
        'datatables':{
            deps:['jquery']
        },
        'datatables-beautify':{
            deps:['datatables','css!/libs/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css']
        }
    }
});