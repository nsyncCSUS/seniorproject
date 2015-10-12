
var express = require('express');
var mongoose = require('mongoose'); // mongose module
mongoose.set('debug',true);
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var User = require("../db/models/user");
var Group = require("../db/models/group");
var Event = require("../db/models/event");
var util = require("./util");
var router = express.Router();



// req.body.searchString holds the string which will come from home controller/ jade

      // CORE2 REGEX version
      //  -Regex type search
      // CORE1 can only find text seperated by 'spacebar key'
      // This method is slower but you can use REGEX which well allow for more percise search
      router.post('/regex', function(req, res) {
        console.log(req.body.searchString);
        console.log('INSIDE POST1');
          console.log('INSIDE POST1');
      // Users.index( {"userAuth.userName" : 'text'});
          console.log('INSIDE POST2');
          // note: you can only search 'spacebar' seperated words
          User.find({'userAuth.userName' :/5/ }, function(err, users) {
              if (err) {
                  throw err;
              }

              console.log(users);

          });
          res.end();
      });

      // CORE1 CONCEPT OF TEXT search
      //  - Finds specific word
      // INDEX used look in the db/users for indexs
      // Can be used to find specific 'spacebar' seperated words
      // Example organizer name = 'Dog Hospital' will show up if you search dog or hospital
      // ExampleCONT: if the name is Organizer name = 'DogHospital' dog or hospital will not return this entry

      router.post('/keywordsearch', function(req, res) {
        console.log(req.body.searchString);
        console.log('INSIDE POST1');
          console.log('INSIDE POST1');
      // Users.index( {"userAuth.userName" : 'text'});
          console.log('INSIDE POST2');
          // note: you can only search 'spacebar' seperated words
          User.find({$text: {$search:'1'}}, function(err, users) {
              if (err) {
                  throw err;
              }

              console.log(users);

          });
          res.end();
      });


      router.post('/getallgroups', function(req, res) {
        console.log(req.body.searchString);
          Group.find({}, function(err, users) {
              if (err) {
                  throw err;
              }

              console.log(users);

          });
          res.end();
      });

      router.post('/getagroup', function(req, res) {
          console.log(req.body.searchString);
        //  req.body.searchString= 'test3';
          Group.findOne({ 'userAuth.userName':req.body.searchString}, function(err, users) {
              if (err) {
                  console.log(err);
                  throw err;
              }

              console.log(users);

          });
            res.end();
      });


      router.post('/getallevents', function(req, res) {
        console.log(req.body.searchString);
          Event.find({}, function(err, users) {
              if (err) {
                  throw err;
              }

              console.log(users);

          });
          res.end();
      });

      router.post('/getaevent', function(req, res) {
          console.log(req.body.searchString);
        //  req.body.searchString= 'test3';
          Event.findOne({ 'userAuth.userName':req.body.searchString}, function(err, users) {
              if (err) {
                  console.log(err);
                  throw err;
              }

              console.log(users);

          });
            res.end();
      });


    router.post('/getallusers', function(req, res) {
      console.log(req.body.searchString);
        User.find({}, function(err, users) {
            if (err) {
                throw err;
            }

            console.log(users);

        });
        res.end();
    });

    router.post('/getauser', function(req, res) {
        console.log(req.body.searchString);
      //  req.body.searchString= 'test3';
        User.findOne({ 'userAuth.userName':req.body.searchString}, function(err, users) {
            if (err) {
                console.log(err);
                throw err;
            }

            console.log(users);
            
        });
          res.end();
    });

module.exports = router;
