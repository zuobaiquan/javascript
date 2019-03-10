var PORT = 3005;//

var http = require('http');
var url=require('url');
var fs=require('fs');
var mine=require('./js/mine').types;
var path=require('path');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var realPath = path.join("./", pathname);    //这里设置自己的文件名称;
    var ext = path.extname(realPath);
    ext = ext ? '.'+ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if (!exists) {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.write("This req URL " + pathname + " was not found on this server.");
            res.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    res.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    res.writeHead(200, {
                        'Content-Type': contentType
                    });
                    res.write(file, "binary");
                    res.end();
                }
            });
        }
    });
}).listen(PORT);
console.log("Server runing at port: " + PORT + ".");
