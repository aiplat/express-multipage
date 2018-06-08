var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
var ejs = require('ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /assets
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());


//静态资源根目录设置
global.staticDir = path.join(__dirname, 'assets');
app.use(express.static(global.staticDir));
//定义view中html对应的actions，目录为actions
//global.actionsDir = path.join(__dirname, 'actions');
//app.use(express.static(global.actionsDir));

//路由
require('./routes/main')(app);

module.exports = app;
