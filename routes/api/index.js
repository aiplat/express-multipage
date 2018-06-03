//中转后台接口列表
//创建者：womendi@qq.com
//日期：2017-11-28
var express = require('express');
var router = express.Router();
var path = require('path');
var axios = require('axios');

//mine模块接口
var mine = require('./routes/mine');
router = mine(router, '/mine');

//单独接口
router.get('/', (req, res, next) => {
    res.json({ message: '/api' });
});

module.exports = router;