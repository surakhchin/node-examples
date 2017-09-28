var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var leadershipRouter = express.Router();

leadershipRouter.use(bodyParser.json());

leadershipRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the leaders to you!');
})

.post(function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting all leaders');
});

leadershipRouter.route('/:dishId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the leaders: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the leaders: ' + req.params.dishId + '\n');
    res.end('Will update the leaders: ' + req.body.name +
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting leaders: ' + req.params.dishId);
});

module.exports = leadershipRouter;