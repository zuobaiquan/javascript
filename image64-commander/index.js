var fs = require('fs')
var path = require('path')

function encode(filename, data) {
  var extname = path.extname(filename).substr(1);
  extname = extname || 'png';

  if (extname === 'svg') {
    extname = "svg+xml"
  }

  return 'data:image/' + extname + ';base64,' + data.toString('base64');
}

module.exports = function (filename, callback) {
  if (!callback) callback = util.noop;

  fs.readFile(filename, function (err, data) {
    console.log('data', data)
    if (err) return callback(err);
    callback(null, encode(filename, data));
  });
}
