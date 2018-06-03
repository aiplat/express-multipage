require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

console.log('loading..start');

//全局jquery
window.jQuery = window.$ = require('jquery/dist/jquery.min.js');

require('../components/jqplugin/jquery.lazyload_v1.9.3.js');
require('../components/jqplugin/idangerous.swiper.min.js');

//全局cmapp.js  里面方法不用修改
window.cm = require('../components/common/cmapp_webpack.js')();

//公共js方法
require('../common/common.js');
console.log('loading..end');
