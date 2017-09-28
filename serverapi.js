var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest_test', {
  useMongoClient: true
  /* other options */
} );

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('api running on port 3000');