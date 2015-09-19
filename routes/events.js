
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
        var id = request.params.id;
        //console.log(event); 
        var event = JSON.parse(request.body.event); 
        Event.findByIdAndUpdate(id, event, {new: true}, function(err, event) {
            if (err) {
                return util.err(err, response);
            } else {
                return response.send({event: event});
            }
        });
    });


    // Create a new event, add the creation user to the event
    // and to the event's volunteer list, add event to user's
    // subscribed events list 
    router.post('/', function(request, response, next) {
        var username = request.body.username; 
        var event = new Event(request.params.event); 
        User.find({'userAuth.userName': username}, function(err, user) {
            if(err) return util.err(err, response);
            return event.save(function(err) {
                if (err) {
                    return util.err(err, response);
                }
                
                event.CreationUser = user;
                user.update({$push: {Events: event}}, function(err) {
                    if(err) util.err(err, response); 
                }); 

                event.update({$push: {SubscribedUsers: user}}, function(err) {
                    if(err) util.err(err, response); 
                });
                
                return response.send(event); 
            });
        });
    });


    // Delete event
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
    var volunteers = express.Router({
        mergeParams: true
    });

    
    volunteers.get('/', function(request, response, next) {
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


    volunteers.get('/:id2', function(request, response, next) {
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


    /**
     * Add a user to an event Subscription List 
     * 
     * Note: You can't add a non-existant user to an 
     * event, so we require a second id. 
     */
    volunteers.post('/:id2', function(request, response, next) {
        var id1 = request.params.id1; 
        var id2 = request.params.id2;

        // Get requested event 
        Event.findById(id1, function(err, event) {
            if(err) util.err(err, response);

            // Get Requested user 
            User.findById(id2, function(err, user) {
                if(err) util.err(err, response);

                // Update event by adding foreign reference
                Event.update(event, {$push: {VolunteerList: user}}, function(err, event) {
                    if(err) return util.err(err, response);

                    // Return Response as Json 
                    return response.json(event); 
                }); 
            }); 
        }); 
    });

    
    /**
     * Remove a user from an Event's volunteer list
     */
    volunteers.delete('/:id2', function(request, response, next) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        
        Event.findById(id1, function(err, event) {
            if(err) return util.err(err, response);
            
            return User.findById(id2, function(err, user) {
                return Event.update(event, {$remove: {VolunteerList: user}}, function(err, event) {
                    
                    if(err) util.err(err, response); 
                });
            });
        }); 
    });

    


    // Removing Group routes: This route isn't necessary
    // since there is only one group associated with an
    // event.
    
    /*
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
     */

    // groups.put('/:id2', function(request, response, next) {}); 
    // groups.post('/', function(request, response, next) {}); 
    // groups.delete('/:id2', function(request, response, next) {}); 
    //router.use('/:id1/groups', groups);
    
    router.use('/:id1/volunteers', volunteers);

    module.exports = router;

})(module);
