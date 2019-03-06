//创建者：womendi@qq.com
//日期：2017-11-28
var express = require('express');
var router = express.Router();
var path = require('path');
var axios = require('axios');

var menu = require('../api/static/menu');



//apps模块接口
var apps = require('../apps/index');
router = apps(router, '/apps');

//apps模块接口
var donate = require('../donate/index');
router = donate(router, '/donate');


//首页
router.get('/index.html', (req, res, next) => {
    res.redirect(301, '/');
});
router.get('/index.htm', (req, res, next) => {
    res.redirect(301, '/');
});

router.get('/', (req, res, next) => {
    var site = { url: req.originalUrl, title: 'express-multipage多页面应用', keywords: '#express,nodejs,less,html5,css3,webpack,jquery,lazyload', description: 'https://github.com/aiplat/express-multipage.git', path: global.path };
    var indexData = {
        "description": "ai智能空间,拥抱人工智能,明天会更好。目前潜心使用vue.js开发h5app:同时兼容wap、web、微信浏览器、微信小程序、android和ios,六个平台界面统一,功能一致,只有app有独立功能。",
        "gitName": "我的git",
        "gitUrl": "https://github.com/aiplat",
        "cooperation": "商业合作",
        "email": "womendi@qq.com",
    }
    var renderObj = { site: site, indexData: indexData, menu: menu, url: req.originalUrl };
    res.render('index/index', renderObj);
});

module.exports = router;