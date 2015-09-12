
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
  
  events.put('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  events.post('/', function(request, response, next) {
    return Http404(response); 
  }); 
  
  events.delete('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  
  
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
  
  users.put('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  users.post('/', function(request, response, next) {
    return Http404(response); 
  }); 
  
  users.delete('/:id', function(request, response, next) {
    return Http404(response); 
  }); 
  
  
  // Attach nested routers to global router 
  router.use('/events', events); 
  router.use('/users', users); 
  
  module.exports = router;

  
})(module);

