
(function(module) {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var User = require("../db/models/user");
    var Group = require("../db/models/group");
    var Event = require("../db/models/event");
    var util = require("./util.js"); 


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
        var group = util.takeGroupProjection(request.params.group); 
        Group.find(request.params.group, function(err, groups) {
            if(err) {
                util.err(err, response);
                return response.end(); 
            } else {
                return response.send({
                    groups: groups 
                }); 
            }
        });

        return response.end(); 
    });

    
    router.get('/:id', function(request, response, next) {
        var id = request.params.id;
        Group.findById(id, function(err, group) {
            if(err) {
                util.err(err, response);
                return response.end();
            } else {
                return response.send({group: group}); 
            }
        });

        return response.end(); 
    });

    
    router.put('/:id', function(request, response, next) {
        var id = request.params.id;
        var group = util.takeGroupProjection(request.params.group); 
        Group.findByIdAndUpdate(id, group, function(err) {
            if(err) {
                util.err(err, response); 
            }

            return response.end(); 
        });

        return response.end(); 
    });

    
    router.post('/', function(request, response, next) {
        var params = util.takeGroupProjection(request.params.group);
        var group = new Group(group);
        group.save(function(err) {
            if(err) {
                util.err(err, response); 
            }

            return response.end(); 
        });

        return response.status(200).end(); 
    });

    
    router.delete('/:id', function(request, response, next) {
        var id = request.params.id;
        Group.findByIdAndRemove(id, function(err) {
            if(err) {
                util.err(err, response);
            }

            return response.end(); 
        });

        return response.end(); 
    });



    /**
     * Nested Router for Events 
     */
    var events = express.Router();

    events.get('/', function(request, response, next) {
        var id1 = request.params.id1;
        Group.findById(id1, function(err, group) {
            if(err) {
                return util.err(err, response);
            } else {
                return response.send({events: group.events}); 
            }
        });

        return response.end(); 
    });

    
    events.get('/:id2', function(request, response, next) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        Group.findById(id1, function(err, group) {
            if(err) {
                return util.err(err, response);
            } else {
                var event = group.events.filter(function(index, item) {
                    return item._id == id2;
                })[0];

                return response.send({event: event}); 
            }
        });

        return response.end(); 
    });
    

    // events.put('/:id2', function(request, response, next) {
    //   return Http404(response); 
    // }); 

    // events.post('/', function(request, response, next) {
    //   return Http404(response); 
    // }); 

    // events.delete('/:id2', function(request, response, next) {
    //   return Http404(response); 
    // }); 



    /**
     * Nested Router for Users 
     */
    var users = express.Router();

    
    users.get('/', function(request, response, next) {
        var id1 = request.params.id1;
        Group.findById(id1, function(err, group) {
            if(err) {
                return util.err(err, response);
            } else {
                var users = group.users; 
                return response.send({users: users}); 
            }
        });

        return response.end)(); 
    });

    
    users.get('/:id2', function(request, response, next) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        Group.findById(id1, function(err, group) {
            if(err) {
                return util.err(err, response);
            } else {
                var user = group.users.filter(function(index, item) {
                    return item._id == id2; 
                });

                return response.send({user: user}); 
            }
        });

        return response.end(); 
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
