var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion'; //conFusion is a specific database
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) { //takes url as parameter and a callaback that returns database if everything is ok.
    assert.equal(err,null);
    console.log("Connected correctly to server");
        var collection = db.collection("dishes");
        collection.insertOne({name: "Uthapizza", description: "test"}, function(err,result){
        assert.equal(err,null);
        console.log("Insert added:");
        console.log(result.ops);
                collection.find({}).toArray(function(err,docs){
            assert.equal(err,null);
            console.log("Found:");
            console.log(docs);
                        db.dropCollection("dishes", function(err, result){
               assert.equal(err,null);
               db.close();
            });
        });
            });
});




















//
// var http = require('http');
// var fs = require('fs');
// var path = require('path');
//
//
// var hostname = 'localhost';
// var port = 3000;
//
//
// var server = http.createServer(function (req, res) {
//
//     console.log(res.statusCode);
//     console.log(req.url);
//     res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
//     //language=HTML
//     res.end('<h1>hey</h1>');
//
// });
//
// server.listen(port, hostname, function(){
//     console.log('connected to '+hostname+ ' on port '+ port);
// });