//创建者：womendi@qq.com
//日期：2017-11-28
module.exports = (router, url) => {
    var menu = require('../api/static/menu');
    router.get(url + '.html', (req, res, next) => {
      var site = { url: req.originalUrl, title: '捐赠我们', keywords: 'express,nodejs,less,html5,css3,webpack,jquery,lazyload', description: 'https://github.com/aiplat/express-multipage.git', path: global.path };
      var indexData = {
        "desc": "非常感谢各位对ai智能空间的无偿捐赠,ai智能空间将会持续开发更多更好的应用。",
        "about": "特别说明:以下收款二维码仅在全球唯一网站aiplat.com有效,对于全球其他地方或网站出现的均是假冒的。",
        "dnid": 0,
        "dnarr": [
          {
            "name": "微信收款",
            "img": "images/aiplat/index/donateWX.png"
          },
          {
            "name": "支付宝收款",
            "img": "images/aiplat/index/donateZFB.png"
          }
        ]
      };
      var renderObj = { site: site, indexData: indexData, menu: menu, url: req.originalUrl };
      res.render('donate/index', renderObj);
    });
    router.get(url + '.htm', (req, res, next) => {
      res.redirect(301, url + '.html');
    });
    router.get(url + '/', (req, res, next) => {
      res.redirect(301, url + '.html');
    });

    return router;
}