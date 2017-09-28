var http = require('http');
var fs = require('fs');
var path = require('path');


var hostname = 'localhost';
var port = 3000;


var server = http.createServer(function (req, res) {

    console.log(res.statusCode);
    console.log(req.url);
    res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
    //language=HTML
    res.end('<h1>hey</h1>');

});

server.listen(port, hostname, function(){
    console.log('connected to '+hostname+ ' on port '+ port);
});