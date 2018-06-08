require('./commonJS.js');
// 单独的js必须导入commonJS.js
//-----------------------------操作写在以下
cm.cl(cm.app.url+'/ running..');
cm.ajax(cm.app.url+'/api/mine', {}, function(res){
    if(res.res==0&&res.list.length>0){
      cm.cl('ajax request...');
    }
});