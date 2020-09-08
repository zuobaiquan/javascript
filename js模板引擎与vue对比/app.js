var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	var url = req.url;
	var file = url.substring(1);
	fs.readFile(file,function(err,data){
		if (err)
		{
			res.writeHeader(404,{
				'Content-Type': 'text/html'
			});
			res.write(file);
			res.end();
		}else{
			if (file.indexOf("css")!=-1)
			{
				res.writeHeader(200,{
					'Content-Type': 'text/css'
				});
			}else{
				res.writeHeader(200,{
					'Content-Type': 'text/html'
				});
			}
			res.write(data);
			res.end();
		}
	});
}).listen(3000);
console.log("Server runing at port: " + 3000);