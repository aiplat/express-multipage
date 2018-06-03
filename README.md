<h1>express-multipage 多页面应用</h1>
<h2>express+nodejs+less+html5+css3+jquery+lazyload+pm2守护进程+兼容ie8</h2>
<h3>适合开发各种后台管理平台、资讯网站、企业网站等等，也可以用作nodejs接口服务器。如果要开发webapp，请用 https://github.com/womendi/vueapp.git</h3>
<h3>现实项目版本从来没有requirejs，git仓库上版本有，已经删除。</h3>
<h3>代码中实例为单页面应用 http://www.aiplat.com 的多页面版本</h3>

---

# 近期再更新一个版本--2018.05.30

---

<h2>1、克隆项目代码:</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ git clone https://github.com/womendi/express-multipage.git</h4>
<h2>2、cd到项目根目录:</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ cd express-multipage</h4>
<h2>3、安装依赖:（序号3及以下操作建议使用Xshell）</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ npm install</h4>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;建议使用淘宝npm.taobao.org中cnpm代替默认的 npm:</h3>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;$ npm install -g cnpm --registry=https://registry.npm.taobao.org</h4>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;$ cnpm install</h4>
<h2>4、webpack打包css,js:</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ npm run build</h4>
<h2>5、开发环境：启动应用1(非实时刷新):</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ cnpm start</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;看到 Listening on port 1329 ，打开应用:http://本地ip:1329</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;关闭应用：按Ctrl+C</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;或者：</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ pm2 start build.js</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;关闭应用：pm2 stop build.js</h4>
<h2>6、开发环境：启动应用2(实时刷新):</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;$ cnpm run dev</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;打开应用:http://本地ip:1329</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;关闭应用：按Ctrl+C,然后再执行$ pm2 stop build.js</h4>
<h2>7、生产环境：启动应用:</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;打包js:$ cnpm run build</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;启动:$ pm2 start build.js</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;建议服务器部署时修改端口1329为其他,修改位置build.js</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;关闭应用：$ pm2 stop build.js</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;重启应用：$ pm2 restart build.js</h4>
<h2>8、兼容性:</h2>
<h2>兼容pc浏览器</h2>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容ie8:测试了win10中的ie11浏览器选用文档模式为IE8正常、win7中IE8浏览器正常;IETester0.5.4(按钮新建IE各版本)测试只有ie10与默认版本正常</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容百度浏览器:测试了win10中的百度浏览器版本8.7正常</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容QQ浏览器:测试了win10中的QQ浏览器版本9.7正常</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容firefox:测试了win10中的firefox浏览器版本号57.0正常</h4>
<h4>&nbsp;&nbsp;&nbsp;&nbsp;兼容chrome:测试了win10中的chrome浏览器版本号62正常</h4>
<h2>兼容wap浏览器与微信内置浏览器</h2>