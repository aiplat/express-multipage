//公共js方法
module.exports = {
      getIP: () => {
            var interfaces = require('os').networkInterfaces();
            for (var devName in interfaces) {
                  var iface = interfaces[devName];
                  for (var i in iface) {
                        var alias = iface[i];
                        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                              return alias.address;
                        }
                  }
            }
      },
      getEntry: (globPath) => {
            var path = require('path');
            var glob = require('glob');
            var entries = {}, basename, pathname;

            glob.sync(globPath).forEach(function (entry) {
                  basename = path.basename(entry, path.extname(entry));
                  pathname = basename;
                  entries[pathname] = entry;
            });

            return entries;
      }
}