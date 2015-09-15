

(function(module) {
    'use strict';
    
    var express = require('express');
    var router = express.Router();
    
    // Expressjwt module checks if the token given is correct
    // the token is given though angular every time there is an http request
    // check authInterceptor in seniorprojectapp.js
    var expressJwt = require('express-jwt');
    
    
    var User = require("../db/models/user");
    var Group = require("../db/models/group");
    var Event = require("../db/models/event");
    var util = require("./util"); 
    
    
    
    /**
     * Global API Endpoint for Events 
     */
    var router = express.Router(); 
    router.get('/', function(request, response, next) {
        var event = request.params.event; 
        Event.find(event, function(err, events) {
            if(err) util.err(err, response)
            else response.send(events); 
        });
        
        return response.end();
    }); 
    
    
    router.get('/:id', function(request, response, next) {
        var id = request.params.id; 
        Event.findById(id, function(err, event) {
            if(err) util.err(err, response);
            else response.send(event);
        });
        
        return response.end(); 
    }); 
    
    
    router.put('/:id', function(request, response, next) {
        var event = request.params.event; 
        var id = request.params.id; 
        Event.findByIdAndUpdate(id, util.takeEventProjection(event), function(err, event) {
            if(err) return util.err(err, response); 
        }); 
        
        response.end(); 
    }); 
    
    
    router.post('/', function(request, response, next) {
        var event = new Event(util.takeEventProjection(request.params.event)); 
        event.save(function(err) {
            if(err) {
                util.err(err, response); 
                return response.end(); 
            }
        })
        
        return response.status(200).end(); 
    }); 
    
    
    router.delete('/:id', function(request, response, next) {
        var id = request.params.id; 
        Event.findByIdAndRemove(id, function(err) {
            if(err) {
                util.err(err, response);
                return response.end(); 
            } else {
                return response.status(200);
            }
        });
        
        response.end();
    }); 
    
    
    
    /**
     * Nested Endpoint for Subscribed Users
     */
    var users = express.Router({mergeParams: true}); 
    router.get('/', function(request, response, next) {
        
    }); 
    
    
    router.get('/:id2', function(request, response, next) {
        
    }); 
    
    
    // router.put('/:id2', function(request, response, next) {
        
    // }); 
    
    
    // router.post('/', function(request, response, next) {
        
    // }); 
    
    
    // router.delete('/:id2', function(request, response, next) {
        
    // }); 
    
    
    
    /**
     * Nested Endpoint for Associated Groups 
     */
    var groups = express.Router({mergeParams: true}); 
    router.get('/', function(request, response, next) {
        
    }); 
    
    router.get('/:id2', function(request, response, next) {
        
    }); 
    
    
    // router.put('/:id2', function(request, response, next) {}); 
    // router.post('/', function(request, response, next) {}); 
    // router.delete('/:id2', function(request, response, next) {}); 
    
    
    router.use('/:id1/users', users); 
    router.use('/:id1/groups', groups); 
    
    module.exports = router;
    
})(module);

