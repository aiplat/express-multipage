console.log('loading..start');

//全局jquery
window.jQuery = window.$ = require('jquery/dist/jquery.min.js');

require('../plugins/jqplugin/jquery.lazyload_v1.9.3.js');
//require('../jqplugin/idangerous.swiper.min.js');

//全局cmapp.js  里面方法不用修改
window.cm = require('../plugins/cmapp.js')();

console.log('loading..end');
