
/*router.get('/data/:id', function(req, res) {
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
});*/

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
    } 


    /**
     * Global router for Groups  
     */
    //var router = express.Router();

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
    });


    router.put('/:id', function(request, response, next) {
        var id = request.params.id;
        //console.log(request.body.group); 
        var group = JSON.parse(request.body.group); 
        Group.findByIdAndUpdate(id, group, {new: true}, function(err, group) {
            return response.send({group: group}); 
        });
    });


    // Get user by username, create group, add user as
    // creation user, add user to subscribers list,
    // add user to organizers list, add group to user's
    // groups list 
    router.post('/', function(request, response, next) {
        var username = request.body.username; 
        var params = request.params.group; 
        var group = new Group(group);

        User.findOne({'userAuth.userName': username}, function(err, user) {
            if(err) return util.err(err, response); 
            group.CreationUser = user;
            return group.save(function(err, group) {
                if(err) util.err(err, response); 
                return group.update({$push:{}}, function(err, group) {
                    if(err) return util.err(err, response); 
                    return response.send({group: group}); 
                }); 
            }); 
        }); 
    });

    
    router.delete('/:id', function(request, response, next) {
        var id = request.params.id;
        Group.findByIdAndRemove(id, function(err) {
            if(err) {
                util.err(err, response);
            }

            return response.end(); 
        });
    });



    /**
     * Nested Router for Events 
     */
    var events = express.Router({mergeParams: true});

    events.get('/', function(request, response, next) {
        var id1 = request.params.id1;
        Group.findById(id1, function(err, group) {
            if(err) {
                return util.err(err, response);
            } else {
                var events = group.events || []; 
                return response.send({events: events}); 
            }
        });
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
                }).pop() || {};

                return response.send({event: event}); 
            }
        });
    });
    

    // Must have a group specified to create an event? 
    // events.post('/', function(request, response, next) {
    //   return Http404(response); 
    // }); 

    // Cannot delete an event from a group without deleting the
    // whole event. 
    // events.delete('/:id2', function(request, response, next) {
    //   return Http404(response); 
    // }); 


    /**
     * Router for Requesting volunteers 
     */
    var volunteers = express.Router({mergeParams: true}); 

    // Get the full list of volunteers from a group 
    volunteers.get('/', function(request, response) {
        var id1 = request.params.id1;
        return Group.findById(id1, function(err, group) {
            if(err) {
                return util.err(err, response);
            } else {
                var subscribers = group.SubscriptionList || []; 
                return response.send({'volunteers': subscribers});
            }
        }); 
    }); 

    
    // Get a particular volunteer's information 
    volunteers.get('/:id2', function(request, response) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        return Group.findById(id2, function(err, group) {
            var user = group.VolunteerList.filter(function(item) {
                return item._id == id2; 
            }).pop();

            return response.send({Volunteer: user}); 
        }); 
    });
    

    // Add a user to the list of volunteers 
    volunteers.post('/:id2', function(request, response) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        return Group.findById(id1, function(err, group) {
            if(err) return util.err(err, response); 
            return User.findById(id2, function(err, user) {
                if(err) return util.err(err, response);
                return group.update({$push:{VolunteerList:user}}, function(err, group) {
                    if(err) return util.err(err, response);
                    return response.send({group: group}); 
                }); 
            }); 
        }); 
    }); 

    
    // Delete a user from the list of volunteers
    volunteers.delete('/:id2', function(request, response) { 
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        return Group.findById(id1, function(err, group) {
            if(err) return util.err(err, response);
            return User.findById(id2, function(err, user) {
                if(err) return util.err(err, response); 
                return group.update({$remove:{VolunteerList: user}}, function(err, group) {
                    if(err) return util.err(err, response);
                    return response.send({group: group}); 
                }); 
            }); 
        }); 
    }); 
    

    /**
     * Nested Router for handling Organizer requests 
     */
    var organizers = express.Router({mergeParams: true}); 


    // Get the full organizer list
    organizers.get('/', function(request, response) {
        var id1 = request.params.id1;
        return Group.findById(id1, function(err, group) {
            if(err) {
                return util.err(err, response);
            } else {
                var organizers = group.OrganizerList || []; 
                return response.send({OrganizerList: organizers});
            }
        }); 
    });

    
    // Get a particular organizer 
    organizers.get('/:id2', function(request, response) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        return Group.findById(id1, function(err, group) {
            if(err) return util.err(err, response);
            var user = group.OrganizerList.filter(function(item) {
                return item._id == id2; 
            }) || {};

            return response.send({Organizer: user}); 
        }); 
    }); 

    
    // Add user to organizers list
    organizers.post('/:id2', function(request, response) {
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        return Group.findById(id1, function(err, group) {
            if(err) return util.err(err, response);
            return User.findById(id2, function(err, user) {
                if(err) return util.err(err, response);
                return group.update({$push:{OrganizerList:user}}, function(err, group) {
                    if(err) return util.err(err, response);
                    return response.send({group: group}); 
                }); 
            }); 
        }); 
    });
    
    
    // Remove an organizer from the organizer list 
    organizers.delete('/:id2', function(request, response) { 
        var id1 = request.params.id1;
        var id2 = request.params.id2;
        Group.findById(id1, function(err, group) {
            if(err) return util.err(err, response);
            return User.findById(id2, function(err, user) {
                if(err) return util.err(err, response);
                return group.update({$remove:{OrganizerList:user}}, function(err, group) {
                    if(err) return util.err(err, response);
                    return response.send({group: group}); 
                }); 
            }); 
        }); 
    }); 

    
    // Attach nested routers to global router
    //router.use('/users', users);
    router.use('/:id1/events', events);
    router.use('/:id1/volunteers', volunteers);
    router.use('/:id1/organizers', organizers); 

    module.exports = router;


})(module); 

