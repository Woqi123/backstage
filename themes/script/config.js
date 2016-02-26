require.config({
    baseUrl: '../themes/script',
    paths: {
        jquery:'../../libs/jquery/dist/jquery.min',
        bootstrap:'../../libs/bootstrap/dist/js/bootstrap.min',
        metisMenu:'../../libs/metismenu/dist/metisMenu.min',
        datatables:'../../libs/datatables/media/js/jquery.dataTables',
        'datatables-bt':'../../libs/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min',
        echarts:'../../libs/echarts/dist/echarts.min',
        'datepicker-base':'../../libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min',
        'datepicker':'../../libs/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min',
        'treeview':'../../libs/bootstrap-treeview/dist/bootstrap-treeview.min'
    },
    map: {
        '*': {
            'css': '../libs/require-css/css.min.js'
        }
    },
    shim:{
        'bootstrap':{
            deps:['jquery','css!../../libs/font-awesome/css/font-awesome.min.css']
        },
        'module/base':{
            deps:['jquery','bootstrap']
        },
        'datatables':{
            deps:['jquery']
        },
        'datatables-bt':{
            deps:['datatables','css!../../libs/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css']
        },
        'datepicker-base':{
            deps:['jquery','css!../../libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css']
        },
        'datepicker':{
            deps:['jquery','datepicker-base']
        },
        'treeview':{
            deps:['jquery','css!../../libs/bootstrap-treeview/dist/bootstrap-treeview.min.css']
        }
    }
});