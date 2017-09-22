var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the promotions to you!');
})

.post(function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting all promotions');
});

promotionsRouter.route('/:dishId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the promotions: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the promotions: ' + req.params.dishId + '\n');
    res.end('Will update the promotions: ' + req.body.name +
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting promotions: ' + req.params.dishId);
});

module.exports = promotionsRouter;