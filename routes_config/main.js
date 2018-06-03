//路由设置
//创建者：womendi@qq.com
//日期：2017-11-28
module.exports = (app) => {

	global.http1 = require('./axios2');//http请求方法
	global.cmfunc = require('./cmfunc');
	global.errLoad = require('./error');
	//全局格式化时间日期
	global.moment = require('moment');

	var pathUrl = [
		{ 'url': '', 'name': '本地环境' },
		{ 'url': '', 'name': '测试环境' },
		{ 'url': '', 'name': '生产环境' }
	];
	var apiUrl = [
		{ 'url': 'http://localhost', 'name': '本地环境' },
		{ 'url': 'http://localhost', 'name': '测试环境' },
		{ 'url': 'http://localhost', 'name': '正式环境' }
	];
	//0为本地环境，1为测试环境，2为正式环境
	var serverId = 1;
	global.apiUrl = apiUrl[serverId].url;
	global.path = pathUrl[serverId].url;

	var routeArr = require('./route');
	
	for (i in routeArr) {
		app.use(routeArr[i].url, require(routeArr[i].path));
	}

	app.use(global.errLoad);
}