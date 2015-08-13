/**
 * Created by Roman on 11.08.2015.
 */
var http = require('http');//load apropriate module, in our case we have standard node module, please read https://nodejs.org/api/
var server;

//in first time please initiate packedge.json --> npm init

/*npm - node package manager, �������������� ����� � NodeJS,
 �� �����, ������� ����� ������ npm-������� - https://www.npmjs.com/
 */

//��� ���� ��� ���������� ������, ��������� - npm install --save, save - ��� ���������, ���� ���� �������� ����� � package.json


//��� ���������� �� �����, ������ � package.json, ��������� - npm i ��� npm install
//process.env.NODE_ENV = 'production';
//console.log(process.env); env - ��������, ��� ������ ��� ������������� ���������, ��� ����


server = http.createServer(function(req, res){
    var url = req.url.split('/');
    var masterUrl = url[1];

    var enumForUrl = {
        hello: hello
    };

    if(enumForUrl[masterUrl]){
        enumForUrl[masterUrl](res)
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end('Page not found');
    }


    function hello(res){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end('Hello world');
    }

});

server.listen(3030, function(){
    console.log('Server is listening on 3030 port');
});