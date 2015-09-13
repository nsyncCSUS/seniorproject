var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');  // mongose module
var User = require('../db/models/user'); // mongoose model
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt   = require('bcrypt-nodejs');

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
          console.log(req.body.password);
          console.log(user);
        var newUser = new User({
            userAuth : {
          userName : req.body.username,
          password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null)
        }
      });
        console.log(newUser);
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

//HL the users name then password to see if they match
// if they match a token is generated and returned in the
// res object
router.post('/login', function(req, res){
  console.log('login');
  User.findOne({'userAuth.userName': req.body.username}, function(err,user){
    if(err){
      console.log('Error in Signup:' + err);
    }
    if(!user){
      console.log("User not found");
      res.json({ success: false, message: 'Authentication failed. Wrong Username.' });
    }else if(user){
      if(!bcrypt.compareSync(req.body.password, user.userAuth.password)){
        console.log(req.body.password);
        console.log(user.userAuth.password);
        console.log('Wrong password');
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      }else {
        console.log('token created');
        var token = jwt.sign(user,'secret',{
          expiresInMinutes: 1440 // expires in 24 hours
        });
        
        res.json({
          success:true,
          message:"Token Created",
          token:  token
        });
      }
    }
  });
});

module.exports = router;
