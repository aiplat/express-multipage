//创建者：womendi@qq.com
//日期：2017-11-28
module.exports = (router, url) => {
    var path = require('path');
    var axios = require('axios');

    router.get(url + '/a/:id/:page', (req, res, next) => {
        var id = req.params.id;
        var page = req.params.page;
        res.json({ message: '/a', id: id, page: page });
    });

    router.get(url + '/test', (req, res, next) => {
        res.json({ message: '/test' });
    });

    router.get(url + '/', (req, res, next) => {
        res.json({ res: 0, message: '/mine', list: [{ name: 'express-multipage', git: 'https://github.com/aiplat/express-multipage.git' }] });
    });

    router.get(url + '.html', (req, res, next) => {
        res.json({ res: 0, message: '/mine', list: [{ name: 'express-multipage', git: 'https://github.com/aiplat/express-multipage.git' }] });
    });

    return router;
};