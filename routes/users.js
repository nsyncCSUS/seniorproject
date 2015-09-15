

(function(module) {
    'use strict';
    
    var express = require('express');
    var router = express.Router();
    var mongoose = require('mongoose'); // mongose module
    var User = require('../db/models/user'); // mongoose model
    var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
    
    var User = require("../db/models/user");
    var Group = require("../db/models/group");
    var Event = require("../db/models/event");
    
    
    /**
     * Collection of relevant constants
     */
    var Constants = Object.freeze({
        Http404Message: 'Not Found'
    });
    
    
    /**
     * Function for returning an Http404
     */
    function Http404(response) {
        return response.status(404).send(Constants.Http404Message);
    }
    
    
    router.post('/', function(req , res) {
      console.log(req.body.username);
    
    
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
    
    var testUser = {
        id: 1,
        fname: "Test",
        lname: "User",
        events: [{
            id: 1,
            name: "Test Event 1"
        }, {
            id: 2,
            name: "Test Event 2"
        }],
    
        groups: [{
            id: 1,
            name: "Test Group 1"
        }, {
            id: 2,
            name: "Test Group 2"
        }]
    };
    
    
    //HL the users name then password to see if they match
    // if they match a token is generated and returned in the
    // res object
    router.post('/login', function(req, res) {
        console.log('login');
        User.findOne({
            'userAuth.userName': req.body.username
        }, function(err, user) {
            if (err) {
                console.log('Error in Signup:' + err);
            }
            if (!user) {
                console.log("User not found");
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong Username.'
                });
            } else if (user) {
                if (user.userAuth.password != req.body.password) {
                    console.log(req.body.password);
                    console.log(user.userAuth.password);
                    console.log('Wrong password');
                    res.json({
                        success: false,
                        message: 'Authentication failed. Wrong password.'
                    });
                } else {
                    console.log('token created');
                    var token = jwt.sign(user, 'secret', {
                        expiresInMinutes: 1440 // expires in 24 hours
                    });
    
                    res.json({
                        success: true,
                        message: "Token Created",
                        token: token
                    });
                }
            }
        });
    });
    
    
    
    
    var router = express.Router(); 
    router.get('/', function(request, response, next) {
        return Http404(response); 
    }); 
    router.get('/:id', function(request, response, next) {}); 
    router.put('/:id', function(request, response, next) {}); 
    router.post('/', function(request, response, next) {}); 
    router.delete('/:id', function(request, response, next) {}); 
    
    var events = express.Router({mergeParams: true}); 
    router.get('/', function(request, response, next) {}); 
    router.get('/:id2', function(request, response, next) {}); 
    // router.put('/:id2', function(request, response, next) {}); 
    // router.post('/', function(request, response, next) {}); 
    // router.delete('/:id2', function(request, response, next) {}); 
    
    var groups = express.Router({mergeParams: true}); 
    router.get('/', function(request, response, next) {}); 
    router.get('/:id2', function(request, response, next) {}); 
    // router.put('/:id2', function(request, response, next) {}); 
    // router.post('/', function(request, response, next) {}); 
    // router.delete('/:id2', function(request, response, next) {}); 
    
    
    router.use('/:id1/events', events); 
    router.use('/:id1/groups', groups); 
    
    
    module.exports = router;
    
})(module);

