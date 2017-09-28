var express = require('express');
http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();


app.use(express.static(__dirname + '/public'));
app.use(function (req,res,next) {
    if(req.url=='/hey') {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>hey</h1>');

    }
});

app.listen(port, hostname, function () {
    console.log('connected to '+hostname+ ' on port '+ port);
});