var express = require('express');
var router = express.Router();
var events= require('../bin/event');
var rooms = require('../bin/rooms');
var chats = require('../bin/chats');
var mongo = require("mongoose");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* get history page*/


/*var db = mongo.connect("mongodb://qian:password1@ds139331.mlab.com:39331/user1");

router.get('/api/history', function(req, res) {
    var collection = db.get('event');
    collection.find({}, function(err, event){
        if (err) throw err;
        res.json(event);
    });
});*/
/*
router.get('/api/history', function(req, res, next) {
  res.json({'etc': 'etc'});
})
*/

router.get('/api/eventlog', function(req, res, next) {

    events.find(function (err,events){
      if(err){
          console.log(err);

      }else{
          res.json(events);

      }
  });
});

/*get roomhistory */
router.get('/api/roomhistory', function(req, res, next){
    rooms.find(function (err,room){
      if(err){
        console.log(err);
      }else{
        res.json(room);
      }
    })
});

/* get chat history*/
router.get('/api/history', function(req, res, next){
  chats.find(function (err,chats){
    if(err){
      console.log(err);
    }else{
      res.json(chats);
    }
  })
});

module.exports = router;
