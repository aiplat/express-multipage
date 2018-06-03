
//axios请求服务器
module.exports = function (url, data, method, headers, params) {
    var axios = require('axios');
    var m = {
        url: url,
        method: method ? method : 'get',
        data: data ? data : {},
        headers: headers ? headers : {},
        params: {},
        timeout: 10000,
    };
    if (!m.method || m.method == 'GET' || m.method == 'get') {
        if (m.data) {
            if (typeof (m.data) == 'string') {
                m.url += '?' + m.data;
            } else {
                m.params = m.data;
            }
        }
    } else {
        m.params = m.data;
    }
    return axios(m);
}