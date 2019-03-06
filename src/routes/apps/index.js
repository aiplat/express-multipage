//创建者：womendi@qq.com
//日期：2017-11-28
module.exports = (router, url) => {
    var menu = require('../api/static/menu');

    router.get(url + '.html', (req, res, next) => {
        var site = { url: req.originalUrl, title: 'APP下载', keywords: 'express,nodejs,less,html5,css3,webpack,jquery,lazyload', description: 'https://github.com/aiplat/express-multipage.git', path: global.path };
        var indexData = [{
            "name": "亲信地铁",
            "arr": [
                { "name": "web app", "url": "http://m.aiplat.com/metro", "market": "" },
                { "name": "安卓app下载", "url": "http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5093BCE5", "market": "腾讯应用宝" },
                { "name": "苹果app下载", "url": "https://itunes.apple.com/cn/app/id1254451008", "market": "appstore" }
            ]
        }];
        var renderObj = { site: site, indexData: indexData, menu: menu, url: req.originalUrl };
        res.render('apps/index', renderObj);
    });

    router.get(url + '.htm', (req, res, next) => {
        res.redirect(301, url + '.html');
    });
    router.get(url + '/', (req, res, next) => {
        res.redirect(301, url + '.html');
    });

    return router;
}