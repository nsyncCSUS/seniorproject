var express = require('express');
var router = express.Router();
// Expressjwt module checks if the token given is correct
// the token is given though angular every time there is an http request
// check authInterceptor in seniorprojectapp.js
var expressJwt = require('express-jwt');
/*router.use(expressJwt({
    secret: 'secret'
}));*/

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

function GroupsController() {
    // Groups Controller Object
};


/**
 * API Specification for Groups Controller 
 */
GroupsController.prototype = {


    get: function(request, response) {

    },

    put: function(request, response) {

    },

    post: function(request, response) {

    },

    delete: function(request, response) {

    },


    /**
     * Nested controller for handling requests to do
     * with a group's specified events
     */
    events: {
        get: function(request, response) {

        },

        put: function(request, response) {

        },

        post: function(request, response) {

        },

        delete: function(request, response) {

        }
    },


    /**
     * Nested controller handling requests for a group's
     * subscribed user base
     */
    users: {
        get: function(request, response) {

        },

        put: function(request, response) {

        },

        post: function(request, response) {

        },

        delete: function(request, response) {

        },
    },

};


module.exports = GroupsController;
// module.exports = router;