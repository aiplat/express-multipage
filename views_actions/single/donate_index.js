require('./commonJS.js');
// 单独的js必须导入commonJS.js
//-----------------------------操作写在以下
cm.cl(cm.app.url+'/donate.html running..');
cm.ck('#dlist>div',function(t){
    var n = t.parent().next();
    var id = t.index();
    t.addClass('cm_c1b cm_cf').removeClass('cm_be').siblings().removeClass('cm_c1b cm_cf').addClass('cm_be');
    n.find('div').eq(id).removeClass('cm_dn').siblings().addClass('cm_dn');
});