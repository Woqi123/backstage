define(function (require, exports, module) {

    require('datatables');
    require('datatables-beautify');

    //--------------------------------------------------【侧栏收缩】

    $('#dataTables-example').dataTable({
        responsive: true
    });
});