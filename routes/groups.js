var express = require('express');
var router = express.Router();
// Expressjwt module checks if the token given is correct
// the token is given though angular every time there is an http request
// check authInterceptor in seniorprojectapp.js
var expressJwt = require('express-jwt');
router.use(expressJwt({secret: 'secret'}));

router.get('/data/:id', function(req, res) {
	// Get group from db
	var json = 
	{
			id : "nsync",
			name : "N.Sync()",
			picture : "//placehold.it/500x500",
			creationDate : "2015-08-26T18:50:10.111Z",
			city : "Sacramento",
			state : "CA",
			zipCode : 95828,
			description : "Senior project group ftw!!!!!",
			googlePlusURL : "www.google.com",
			facebookURL : "https://facebook.com",
			linkedInURL : "https://linkedin.com",
			twitterURL : "https://twitter.com",
			events : [ {
				id : "event1",
				name : "event1",
				interests : [{type: "animals"}, {type: "education"}, {type: "environment"}, {type: "people"}, {type: "recreation"}, {type: "technology"}, {type: "youth"}]
			}
			],
			organizers : [ {
				id : "org1",
				name : "org1"
			},{
				id : "org2",
				name : "org2"
			},{
				id : "org3",
				name : "org3"
			},{
				id : "org4",
				name : "org4"
			},{
				id : "org5",
				name : "org5"
			} ],
			subscribers : [ {
				id : "sub1",
				name : "sub1"
			},{
				id : "sub2",
				name : "sub2"
			},{
				id : "sub3",
				name : "sub3"
			},{
				id : "sub4",
				name : "sub4"
			},{
				id : "sub5",
				name : "sub5"
			} ],
			interests : [ {
				type : "technology"
			}, ]
	};
	
	console.log("Got a GET request for /data/groups/" + req.params.id);
	console.log("Sending Group '" + json.name + "'");
	
	// Send group information back as a json
	res.json(json);
});

(function(module) {
  'use strict';
  
  var express = require('express');
  var router = express.Router();
  var User = require("../db/models/user");
  var Group = require("../db/models/group");
  var Event = require("../db/models/event");
  
  
  
  // Expressjwt module checks if the token given is correct
  // the token is given though angular every time there is an http request
  // check authInterceptor in seniorprojectapp.js
  var expressJwt = require('express-jwt');
  
  
  /**
   * Collection of relevant constants for Routing
   */
  var Constants = Object.freeze({
    Http404Message: 'Not Found'
  }); 
  
  
  /**
   * Function for returning a 404 error 
   */
  function Http404(repsonse) {
    return response.status(404).send(Constants.Http404Message); 
  }; 
  
  
  /**
   * Global router for Groups  
   */
  var router = express.Router(); 
  
  router.get('/', function(request, response, next) {
    return Http404(response); 
  }); 
  
  router.get('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  router.put('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  router.post('/', function(request, response, next) {
    return Http404(response); 
  }); 
  
  router.delete('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  
  
  /**
   * Nested Router for Events 
   */
  var events = express.Router(); 
  
  events.get('/', function(request, response, next) {
    return Http404(response); 
  }); 
  
  events.get('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  // events.put('/:id', function(request, response, next) {
  //   return Http404(response); 
  // }); 
  
  // events.post('/', function(request, response, next) {
  //   return Http404(response); 
  // }); 
  
  // events.delete('/:id', function(request, response, next) {
  //   return Http404(response); 
  // }); 
  
  
  
  /**
   * Nested Router for Users 
   */
  var users = express.Router(); 
  
  users.get('/', function(request, response, next) {
    return Http404(response); 
  }); 
  
  users.get('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  // users.put('/:id', function(request, response, next) {
  //   return Http404(response); 
  // }); 
  
  // users.post('/', function(request, response, next) {
  //   return Http404(response); 
  // }); 
  
  // users.delete('/:id', function(request, response, next) {
  //   return Http404(response); 
  // }); 
  
  
  // Attach nested routers to global router 
  router.use('/events', events); 
  router.use('/users', users); 
  
  module.exports = router;
  
})(module);
