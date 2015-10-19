(function(module) {
  'use strict';

  var express = require('express');
  var mongoose = require('mongoose'); // mongose module
  mongoose.set('debug', true);
  var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

  var User = require("../db/models/user");
  var Group = require("../db/models/group");
  var Event = require("../db/models/event");
  var util = require("./util");
  var router = express.Router();
  var bcrypt   = require('bcrypt-nodejs');  // used to encryt the passwords

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

  router.post('/test', function(req, res) {
    console.log('tes123123123123123');
    console.log(req.body);
  });

  // Route for creating a  new user
  router.post('/createuser', function(req, res) {
    console.log(req.body.username);
    // Uses mongoose's findOne function to search for userAuth.userName in the User model
    // if the user does not exist in the mongodb it is created line52
    // If there is an error and StatusCode and errorMessage will be set and returned
    // to angular in the promise (.then) signupcontroller.js
    var statusCode = 200; // initalize the statuscode to ok nothing wrong
    var errorMessage = "None";
    User.findOne({
      'userAuth.userName': req.body.username
    }, function(err, user) {
      // error checking
      if (err) {
        console.log('Error in Signup:' + err);
        statusCode = 500; //http error code
        errorMessage = err;
      }
      //if user already exsists
      if (user) {
        console.log('Username taken try again' + req.body.username);
        statusCode = 500; //http error code
        errorMessage = "Username taken try again";

      } else {
        // if no user exist create one
        var newUser = new User({
          userAuth: {
            userName: req.body.username,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null)
            // encrypts the password before storing note:salt stored inside the passwordhash
          }
        });

        console.log(newUser);
        //save user to mongodb
        newUser.save(function(err) {
          if (err) {
            console.log('Error in saving user:' + err);
            throw err;
          }
          console.log('User registration sucess');
        });

      }
    }).then(function() {
      console.log(statusCode);
      res.status(statusCode).send(errorMessage); // sends back response object to angular promise
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
    var statusCode = 200; // initalize the statuscode to ok nothing wrong
    var errorMessage = "None";
    var token;      // token for when the user signs in
    User.findOne({
      'userAuth.userName': req.body.username
    }, function(err, user) {
      if (err) {
        console.log('Error in Signup:' + err);
      }
      if (!user) {
        console.log("User not found");
        statusCode = 500;
        errorMessage = 'Authentication failed. Wrong Username.';
      } else if (user) {
        if(!bcrypt.compareSync(req.body.password, user.userAuth.password)) {
          // compares the password given with the dbpassword 
          console.log(req.body.password);
          console.log(user.userAuth.password);
          console.log('Wrong password');
          statusCode = 500; //http error code
          errorMessage = "Password incorrect";
        } else {
          console.log('token created');
            token = jwt.sign(user, 'secret', {
            expiresInMinutes: 1440 // expires in 24 hours
          });
        }
      }
    }).then(function() { // sets the statuscode, sends a message about the post and sends token back
      res.status(statusCode).json({
        error: errorMessage,
        token: token
      });
    });
  });




  /**
   * Global User router
   */
  //var router = express.Router();
  router.get('/', function(request, response, next) {
    //var user = util.takeUserProjection(request.params.user);
    var user = request.params.user;
    User.find(user, function(err, users) {
      if (err) {
        return util.err(err, response);
      } else {
        return response.send({
          users: users
        });
      }
    });
  });


  router.get('/:id', function(request, response, next) {
    var id = request.params.id;
    User.findById(id, function(err, user) {
      if (err) return util.err(err, response);
      else return response.send({
        user: user
      });
    });
  });


  router.put('/:id', function(request, response, next) {
    var id = request.params.id;
    //var user = util.takeUserProjection(request.params.user);
    var user = JSON.parse(request.body.user);
    User.findByIdAndUpdate(id, user, {
      new: true
    }, function(err, user) {
      if (err) util.err(err, response);

      return response.send({
        user: user
      });
    });
  });


  // Function handled by Huy's function above
  // router.post('/', function(request, response, next) {});

  router.delete('/:id', function(request, response, next) {
    var id = request.params.id;
    User.findByIdAndRemove(id, function(err) {
      if (err) util.err(err, response);
      return response.end();
    });
  });



  /**
   * Nested router for handling event requests
   */
  var events = express.Router({
    mergeParams: true
  });


  events.get('/', function(request, response, next) {
    var id1 = request.params.id1;
    var event = request.params.event;
    return User.findById(id1, function(err, user) {
      if (err) {
        return util.err(err, response);
      } else {
        var events = user.events || [];
        return response.send({
          events: events
        });
      }
    });
  });


  events.get('/:id2', function(request, response, next) {
    var id1 = request.params.id1;
    var id2 = request.params.id2;
    User.findById(id1, function(err, user) {
      if (err) return util.err(err, response);
      else {
        var event = user.events.filter(function(index, item) {
          return event._id == id2;
        });

        return response.send({
          event: event
        });
      }
    });
  });


  // events.post('/', function(request, response, next) {});
  // events.put('/:id2', function(request, response, next) {});
  // events.delete('/:id2', function(request, response, next) {});



  /**
   * Nested router for handling group requests
   */
  var groups = express.Router({
    mergeParams: true
  });


  groups.get('/', function(request, response, next) {
    var id1 = request.params.id1;
    User.findById(id1, function(err, user) {
      if (err) {
        util.err(err, response);
        return response.end();
      } else {
        var groups = user.groups || [];
        return response.send({
          groups: groups
        });
      }
    });
  });


  groups.get('/:id2', function(request, response, next) {
    var id1 = request.params.id1;
    var id2 = request.params.id2;
    User.findById(id1, function(err, user) {
      if (err) {
        util.err(err, response);
        return response.end();
      } else {
        var group = user.groups.filter(function(index, item) {
          return item._id == id2;
        });

        return response.send({
          group: group
        });
      }
    });
  });


  // groups.post('/', function(request, response, next) {});
  // groups.put('/:id2', function(request, response, next) {});
  // groups.delete('/:id2', function(request, response, next) {});


  router.use('/:id1/events', events);
  router.use('/:id1/groups', groups);


  module.exports = router;

})(module);
