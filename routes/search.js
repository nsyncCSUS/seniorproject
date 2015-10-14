
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
          // RegExp(String , Flags) g=global(?resets some internal counter ) i= ignore case
          // need regEXP object to put search vairable in
          // you cant put in variables directly into a regex
          // req.body.searchString is the string from angular
          var searchStringRegExObj = new RegExp(req.body.searchString,"i");

          User.find({'userAuth.userName' : searchStringRegExObj }, function(err, users) {
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
      // Users.index( {"userAuth.userName" : 'text'});  // This line needed inside db file to create index
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


/*////////////////////////////////
GROUPS
///////////////////////////////*/




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


      //Non-indexed soon to be depreciated by keywordsearch indexed version
      router.post('/getagroup', function(req, res) {
          console.log(req.body.searchString);
        //  req.body.searchString= 'test3';
          Group.findOne({ 'groupName':req.body.searchString}, function(err, users) {
              if (err) {
                  console.log(err);
                  throw err;
              }

              console.log(users);

          });
            res.end();
      });


      router.post('/regex', function(req, res) {
        console.log(req.body.searchString);
          // RegExp(String , Flags) g=global(?resets some internal counter ) i= ignore case
          // need regEXP object to put search vairable in
          // you cant put in variables directly into a regex
          // req.body.searchString is the string from angular
          var searchStringRegExObj = new RegExp(req.body.searchString,"i");

          Group.find({'groupName' : searchStringRegExObj }, function(err, users) {
              if (err) {
                  throw err;
              }

              console.log(users);

          });
          res.end();
      });




/*////////////////////////////////
Events
///////////////////////////////*/



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

      //Non-indexed soon to be depreciated by keywordsearch indexed version
      router.post('/getaevent', function(req, res) {
          console.log(req.body.searchString);
        //  req.body.searchString= 'test3';
          Event.findOne({ 'eventName':req.body.searchString}, function(err, users) {
              if (err) {
                  console.log(err);
                  throw err;
              }

              console.log(users);

          });
            res.end();
      });

      router.post('/regex', function(req, res) {
        console.log(req.body.searchString);
          // RegExp(String , Flags) g=global(?resets some internal counter ) i= ignore case
          // need regEXP object to put search vairable in
          // you cant put in variables directly into a regex
          // req.body.searchString is the string from angular
          var searchStringRegExObj = new RegExp(req.body.searchString,"i");

          Event.find({'eventName' : searchStringRegExObj }, function(err, users) {
              if (err) {
                  throw err;
              }

              console.log(users);

          });
          res.end();
      });


/*////////////////////////////////
Users
///////////////////////////////*/


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

    //Non-indexed soon to be depreciated by keywordsearch indexed version
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
