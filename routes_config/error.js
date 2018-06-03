//创建者：womendi@qq.com
//日期：2017-11-28

module.exports = (req,res)=>{
    var err = new Error('Not Found');
    err.status = 404;
    var site = { title: '404', keywords: 'Not Found', description: 'https://github.com/womendi/express-multipage.git', path: global.path};
	var assignObj = { site: site};
	res.render('common/error', assignObj);
};