var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');  // mongose module
var User = require('../db/models/user'); // mongoose model

// HL checks the database for user if usere does not exist
// put user into the database
router.post('/', function(req , res) {
  //  The req.body contains the user passed in from signupController.js
  console.log(req.body.username);
    // Findone is a built in function in mongoose
    // first argument is passing in the req.body.username and checking it with the databases
    // userAuth.userName(this is the naming convention from the database)
    User.findOne({'userAuth.userName' : req.body.username}, function(err, user) {
      // error checking
      if(err){
        console.log('Error in Signup:' + err);
      }
      //if user already exsists
      if(user){
        console.log('Username taken try again'+ req.body.username);
      }else {
        // if no user exist create one
        var newUser = new User({
            userAuth : {
          userName : req.body.username,
          password : req.body.password
        }
      });

        console.log(newUser);
      //  newUser.userAuth.userName = 5;

        // set the user's local credentails
        //newUser.userName= req.body.username;
      //  newUser.password = req.body.password;

        //save user
        newUser.save(function(err){
          if(err){
            console.log('Error in saving user:' + err);
            throw err;
          }
          console.log('User registration sucess');
        });

      }
    });

});

module.exports = router;
