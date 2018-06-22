//连接mysql数据库
//创建者：womendi@qq.com
//日期：2017-11-28
module.exports = (func) => {
	//npm install --save-dev mysql
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'aiplat.com'
	});

	connection.connect();

	if (typeof func == 'function') {
		func(connection);
		//func 执行完成后 要加 关闭连接 connection.end();
	}
	//关闭连接
	//connection.end();
}

//连接redis数据库
//npm install redis
// var redis = require("redis")
//   , client;

// client = redis.createClient(6379, '127.0.0.1', {});

// // 密码
// client.auth('密码');

// // 选择数据库，比如第3个数据库，默认是第0个
// client.select(3, function() { /* ... */ });

// client.on("error", function (err) {
//     console.log("Error " + err);
// });

// // 设置键值
// client.set("aiplat", "string val", redis.print);

// // 取值
// client.get("aiplat", function(err, replies) {
//     
// });

// // 其它API
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// client.hkeys("hash key", function (err, replies) {
//      console.log(replies.length + " replies:");
//      replies.forEach(function (reply, i) {
//          console.log("    " + i + ": " + reply);
//      });
//      client.quit();
// });


// // 枚举趣出数据库中的所有键
// client.keys('*', function (err, keys) {

// });
