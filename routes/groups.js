var express = require('express');
var router = express.Router();


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
