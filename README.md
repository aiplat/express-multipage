# express-multipage 多页面应用
 - express+nodejs+less+html5+css3+cmui+ejs+jquery+lazyload+pm2守护进程+兼容ie8
 - 适合开发各种后台管理平台、资讯网站、企业网站等等，也可以用作nodejs接口服务器。
 - 代码实例为单页面应用 http://www.aiplat.com 的多页面版本

---

## 如果要开发webapp或跨平台应用
 - 想用vue的，请用 https://github.com/womendi/vueapp
 - 想用react的，请用 https://github.com/womendi/react-app-ie8
 
---

## 1.0.0版本--2017.11.28
## 重建仓库--2018.06.03
## 1.0.1版本--2018.06.08

---

## 代码目录结构

### 习惯vue后，改为与vueapp类似(https://github.com/womendi/vueapp)
 - build           ------webpack配置目录
 - config          ------网站配置目录
 - src             ------代码主体目录
 - --- actions     ------views中html对应的单独页面js文件目录
 - --- assets      ------静态css、images文件和打包的js目录
 - --- components  ------公共组件对应js文件目录
 - --- plugins     ------路由的公共函数或插件目录
 - --- routes      ------路由配置目录
 - --- views       ------路由对应页面视图目录
 - --- app.js      ------应用入口文件

---

## clone
 - $ git clone https://github.com/womendi/express-multipage.git

## 安装依赖
 - $ cd express-multipage
 - $ npm install

## 开发环境

### 启动应用1：不使用pm2 (热更新代码，手动刷新页面，支持IE8调试)
 - 一个cmd窗口：$ npm run dev  或  npm start
 - 另一个cmd窗口：$ npm run watch

### 启动应用2：使用pm2 (热更新代码，手动刷新页面，支持IE8调试)
 - $ npm run pm2
 - 其间首先会打包js文件，然后启动pm2，最后webpack --watch js文件变化

### 查看应用
 - 其中看到这句时：Webpack is watching the files…cmd窗口代码不再变动
 - 打开 http://本地ip:1329，方便手机在局域网访问

### 关闭应用
 - 不使用pm2:在各窗口按Ctrl+C
 - 使用pm2:按Ctrl+C再执行$ pm2 stop build/dev.js(或者$ pm2 kill)

## 生产环境
 - 启动应用：$ pm2 start build/dev.js
 - 关闭应用: $ pm2 stop build/dev.js(或者$ pm2 kill)
 - 修改端口：./config/index.js中port参数

---

## 兼容性:

### 兼容pc浏览器
 - 兼容ie8:测试了win10中的ie11浏览器选用文档模式为IE8正常、win7中IE8浏览器正常;IETester0.5.4(按钮新建IE各版本)测试只有ie10与默认版本正常
 - 兼容百度浏览器:测试了win10中的百度浏览器版本8.7正常
 - 兼容QQ浏览器:测试了win10中的QQ浏览器版本9.7正常
 - 兼容firefox:测试了win10中的firefox浏览器版本号57.0正常
 - 兼容chrome:测试了win10中的chrome浏览器版本号62正常

### 兼容手机端

 - 兼容安卓与ios等等各种系统、微信内置浏览器，不区分机型

### 兼容可联网设备
 - 比如TV等等,不区分尺寸大小