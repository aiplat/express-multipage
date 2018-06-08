var p = '.';

var arr = ['api', 'index'];

var routes = [];
var obj = '';
for (i in arr) {
    obj = { 'url': '', 'path': '' };
    obj.path = p + '/' + arr[i] + '/index';
    if (arr[i] != 'index') {
        obj.url = '/' + arr[i];
    } else {
        obj.url = '/';
    }
    routes.push(obj);
}
console.log('----------------------------------');
console.log(routes);

module.exports = routes;