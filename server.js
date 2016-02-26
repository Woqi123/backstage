var http = require('http');
var url=require('url');
var path=require('path');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    var pathname = url.parse(request.url).pathname;

    var realPath = "./static" + pathname;
    console.log(realPath);

    path.exists(realPath, function (exists) {

        if (!exists) {

            response.writeHead(404, {'Content-Type': 'text/plain'});

            response.write("This request URL " + pathname + " was not found on this server.");

            response.end();

        } else {

            fs.readFile(realPath, "binary", function(err, file) {

                if (err) {

                    response.writeHead(500, {'Content-Type': 'text/plain'});

                    response.end(err);

                } else {

                    response.writeHead(200, {'Content-Type': 'text/html'});

                    response.write(file, "binary");

                    response.end();

                }

            });

        }

    });
}).listen(6677);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:6677/');