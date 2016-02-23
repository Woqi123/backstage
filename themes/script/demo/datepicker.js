define(function (require, exports, module) {

    require('datepicker');
    //--------------------------------------------------【日历控件】

    $('#datepicker1').datepicker({
        format: 'yyyy/mm/dd',   // input上显示的日期格式
        autoclose: true,        // 日历选择后是否自动关闭,默认false
        todayHighlight: true,   // 是否对今天进行高亮显示,默认false
        clearBtn:true           // 是否显示清除按钮,默认false
    });

    $('.input-daterange input').datepicker({
        format: 'yyyy/mm/dd',
        autoclose: true,
        todayHighlight: true
    });

    $('#datepicker').datepicker();
});