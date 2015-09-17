
(function(module) {
    'use strict';

    var express = require('express');
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
            if (err) {
                util.err(err, response);
                return response.end(); 
            } else {
                return response.send({
                    events: events
                });
            }
        });
    });


    router.get('/:id', function(request, response, next) {
        var id = request.params.id;
        Event.findById(id, function(err, event) {
            if (err) {
                util.err(err, response);
            } else {
                response.send({
                    event: event
                });
            }
        });
    });


    router.put('/:id', function(request, response, next) {
        var event = request.params.event;
        console.log(event); 
        var id = request.params.id;
        Event.findByIdAndUpdate(id, event, function(err, event) {
            if (err) {
                return util.err(err, response);
            } else {
                return response.send({event: event});
            }
        });
    });


    router.post('/', function(request, response, next) {
        var event = new Event(util.takeEventProjection(request.params.event));
        event.save(function(err) {
            if (err) {
                util.err(err, response);
            }
            
            return response.end();
        });
    });


    router.delete('/:id', function(request, response, next) {
        var id = request.params.id;
        Event.findByIdAndRemove(id, function(err) {
            if (err) {
                util.err(err, response);
                return response.end();
            } else {
                return response.status(200);
            }
        });
    });



    /**
     * Nested Endpoint for Subscribed Users
     */
    var users = express.Router({
        mergeParams: true
    });

    
    users.get('/', function(request, response, next) {
        var id = request.params.id1;
        Event.findById(id, function(err, event) {
            if (err) {
                util.err(err, response);
                return response.end();
            } else {
                var users = event.users.map(function(index, item) {
                    return util.takeUserProjection(item);
                });

                return response.send({
                    users: users
                });
            }
        });
    });


    users.get('/:id2', function(request, response, next) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;

        Event.findById(id1, function(err, event) {
            if (err) {
                util.err(err, response);
                return response.end();
            } else {
                var users = event.users.filter(function(index, item) {
                    return item.id == id2;
                });

                var user = users.pop();
                return response.send({
                    user: user
                });
            }
        });
    });


    // users.put('/:id2', function(request, response, next) {}); 
    // users.post('/', function(request, response, next) {}); 
    // users.delete('/:id2', function(request, response, next) {}); 



    /**
     * Nested Endpoint for Associated Groups 
     */
    var groups = express.Router({
        mergeParams: true
    });

    
    groups.get('/', function(request, response, next) {
        var id1 = request.params.id1;
        Event.findById(id1, function(err, event) {
            if (err) {
                util.err(err, response);
                return response.end();
            } else {
                var groups = event.groups.map(function(index, item) {
                    return util.takeGroupProjection(item);
                });

                return response.send({
                    groups: groups
                });
            }
        });
    });

    
    groups.get('/:id2', function(request, response, next) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        Event.findById(id1, function(err, event) {
            if(err) {
                return util.err(err, response);
            } else {
                var group = event.groups.filter(function(index, item) {
                    return item._id == id2; 
                })[0];

                return response.send({group: group}); 
            }
        });
    });


    // groups.put('/:id2', function(request, response, next) {}); 
    // groups.post('/', function(request, response, next) {}); 
    // groups.delete('/:id2', function(request, response, next) {}); 


    router.use('/:id1/users', users);
    router.use('/:id1/groups', groups);

    module.exports = router;

})(module);
