//公共js初始化
//懒加载
cm.Limg();
var loadimg = function (t) {
  var num = Math.random() * 10;
  var hbody = $('html,body');
  var st = t.offset().top + num - 60;
  hbody.animate({ scrollTop: st }, 0);
}
//懒加载