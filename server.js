var express = require('express');
var morgan = require('morgan');



var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use('/dishes',require('./dishRouter'));
app.use('/leadership',require('./leadershipRouter'));
app.use('/promotions',require('./promotionsRouter'));



app.listen(port, hostname, function(){
  console.log('sever is running');
});