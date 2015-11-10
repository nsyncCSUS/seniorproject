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
  var bcrypt = require('bcrypt-nodejs'); // used to encryt the passwords

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

  //file upload
  var imgur = require('imgur');
  //imgur.setCredentials('imgurSP', '123456','74b836d4d3f31f2');
   // Setting login for imgur gives an error
   // Huy: will fix later with Curl request if the original author does not fix
   // for now the imgur photos will not be linked to the imgurSP account, but will be anonamous
  // 74b836d4d3f31f2 client id imgur

  var fs = require('fs-extra'); //File System-needed for renaming file etc

  router.post('/upload', function(req, res, next) {
    console.log(req.files);
    console.log(req.files.file.path);
    imgur.uploadFile(req.files.file.path)
      .then(function(json) {
        console.log(json.data.link);

        var filename = req.files.file.path;
        filename = filename.split("\\").pop();
        console.log(filename);
        fs.remove('./temp/' + filename, function(err) {
          if (!err) console.log('success!');
        });

      })
      .catch(function(err) {
        console.error(err.message);
      });

    res.end();
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
    var token; // token for when the user signs in
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
        if (!bcrypt.compareSync(req.body.password, user.userAuth.password)) {
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

  //Finds all users in db
  router.get('/', function(request, response, next) {
    //var user = util.takeUserProjection(request.params.user);
    console.log(request.params.user);
  //  var user = request.params.user;
  // not sure why var user was place in User.find
    User.find({},function(err, users) {
      if (err) {
        return util.err(err, response);
      } else {
        return response.send({
          users: users
        });
      }
    });
  });

  // Get user from db using user id
  router.get('/:id', function(request, response, next) {
    var id = request.params.id;
    console.log(request.params.id);
    User.findById(id, function(err, user) {
      if (err) return util.err(err, response);
      else return response.send({
        user: user
      });
    });
  });

  //Takes a User object and updates the values
  // Params request.body must contain user object
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
  // router.post('/createuser', function(request, response, next) {});
  // Deletes a User from the db using id
  router.delete('/:id', function(request, response, next) {
    var id = request.params.id;
    User.findByIdAndRemove(id, function(err) {
      if (err) util.err(err, response);
      return response.end();
    });
  });



  /**
   * Nested router for handling event requests
   * Example of nested routers
   * http://stackoverflow.com/questions/25260818/rest-with-express-js-nested-router
   */
  // Used to get parameters from the root router * all the stuff above this
  var events = express.Router({
    mergeParams: true
  });

  // For less typing else you would have to write the user+ event routes
  router.use('/:uid/events', events);
  /*
    USER EVENTS(volunteeredTo) ********************************************************************
    -Get all events user has volunteeredTo
    -Put event into users volunteeredTo array
    -Delete event from users volunteeredTo array
  */



  // Get list of events from this user
  events.get('/', function(request, response, next) {
    var uid = request.params.uid;
    //var event = request.params.event;
    User.findById(uid, function(err, user) {
      if (err) {
        return util.err(err, response);
      } else {
        var eventsList = user.volunteeredTo;
        return response.send({
          events: eventsList    // Note : error this returns the list prior to the update
        });
      }
    });
  });


  // Add an event to a users Voulenter list(event list)
  // parameter must be a ObjectId
  events.put('/:eid', function(request, response, next) {
    var uid = request.params.uid;
    var eventToAdd = request.params.eid;
    User.findByIdAndUpdate(uid,{$addToSet: {"volunteeredTo":eventToAdd}}, function(err, user) {
      if (err) {
        return util.err(err, response);
      }
    });
  });

  // Deletes an event from a users volunteeredTo list
    // parameter must be a ObjectId
  events.delete('/:eid', function(request, response, next) {
    var uid = request.params.uid;
    var eventToDelete = request.params.eid;
    User.findByIdAndUpdate(uid,{$pull: {"volunteeredTo":eventToDelete}}, function(err, user) {
      if (err) {
        return util.err(err, response);
      }
    });
  });


  /*
    CREATOROF EVENT ********************************************************************
    -Get all events user is creator of
    - Put a new event to the user creatorof list
    - Delete an event from users creator of list
  */

  // Get all events user is creator of
  events.get('/creatorof', function(request, response, next) {
    var uid = request.params.uid;
    User.findById(uid, function(err, user) {
      if (err) {
        return util.err(err, response);
      } else {
        var creatorOfList = user.creatorOf;
        return response.send({
          eventsCreated: creatorOfList    // Note : error this returns the list prior to the update
        });
      }
    });
  });

  //Put a new event to the user creatorof list
    // parameter must be a ObjectId
  events.put('/creatorof/:eid', function(request, response, next) {
    var uid = request.params.uid;
    var eventToAdd = request.params.eid;
    User.findByIdAndUpdate(uid,{$addToSet: {"creatorOf":eventToAdd}}, function(err, user) {
      if (err) {
        return util.err(err, response);
      }
    });
  });

  //  Delete an event from users creator of list
    // parameter must be a ObjectId
  events.delete('/creatorof/:eid', function(request, response, next) {
    var uid = request.params.uid;
    var eventToDelete = request.params.eid;
    User.findByIdAndUpdate(uid,{$pull: {"creatorOf":eventToDelete}}, function(err, user) {
      if (err) {
        return util.err(err, response);
      }
    });
  });






  // ??? id1 = event id2 = event2
  // user.events.filter function?? * no mongoose function filter
  //    - Function returns true or false?? then sends this back in response
  // Guess is function checks if event 2 is in users event list

  /* Not sure what this does write comments if you know
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
  */






  // events.post('/', function(request, response, next) {});
  // events.put('/:id2', function(request, response, next) {});
  // events.delete('/:id2', function(request, response, next) {});



  /**
   * Nested router for handling group requests
   */
  var groups = express.Router({
    mergeParams: true
  });

  router.use('/:uid/groups', groups);


   /*
     User Groups(subscribedTo)  ********************************************************************
     -Get all Groups users subscribedTo
     -Put event into users subscribedTo array
     -Delete event from users subscribedTo array
   */

  groups.get('/', function(request, response, next) {
    var uid = request.params.uid;
    User.findById(uid, function(err, user) {
      if (err) {
        util.err(err, response);
        return response.end();
      } else {
        var subscribedToList = user.subscribedTo;
        return response.send({
          groups: subscribedToList
        });
      }
    });
  });

  groups.put('/:gid', function(request, response, next) {
    var uid = request.params.uid;
    var groupToAdd = request.params.gid;
    User.findByIdAndUpdate(uid,{$addToSet: {"subscribedTo":groupToAdd}}, function(err, user) {
      if (err) {
        return util.err(err, response);
      }
    });
  });

  // Deletes an event from a users volunteeredTo list
  groups.delete('/:gid', function(request, response, next) {
    var uid = request.params.uid;
    var groupToDelete = request.params.gid;
    User.findByIdAndUpdate(uid,{$pull: {"subscribedTo":groupToDelete}}, function(err, user) {
      if (err) {
        return util.err(err, response);
      }
    });
  });

  /*
    User Groups(organizerof)  ********************************************************************
    -Get all Groups users organizerof
    -Put event into users organizerof array
    -Delete event from users organizerof array
  */


  // Get all events user is creator of
  events.get('/organizerof', function(request, response, next) {
    var uid = request.params.uid;
    User.findById(uid, function(err, user) {
      if (err) {
        return util.err(err, response);
      } else {
        var creatorOfList = user.creatorOf;
        return response.send({
          eventsCreated: creatorOfList    // Note : error this returns the list prior to the update
        });
      }
    });
  });

  //Put a new event to the user creatorof list
    // parameter must be a ObjectId
  events.put('/organizerof/:gid', function(request, response, next) {
    var uid = request.params.uid;
    var groupToAdd = request.params.gid;
    User.findByIdAndUpdate(uid,{$addToSet: {"organizerof":groupToAdd}}, function(err, user) {
      if (err) {
        return util.err(err, response);
      }
    });
  });

  //  Delete an event from users creator of list
    // parameter must be a ObjectId
  events.delete('/organizerof/:gid', function(request, response, next) {
    var uid = request.params.uid;
    var groupToDelete = request.params.gid;
    User.findByIdAndUpdate(uid,{$pull: {"organizerof":groupToDelete}}, function(err, user) {
      if (err) {
        return util.err(err, response);
      }
    });
  });

















  /* Not sure what this does write comments if you know
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
*/


  // groups.post('/', function(request, response, next) {});
  // groups.put('/:id2', function(request, response, next) {});
  // groups.delete('/:id2', function(request, response, next) {});




  module.exports = router;

})(module);
