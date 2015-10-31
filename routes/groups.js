
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
                return response.send({'group': group}); 
            }
        });
    });


    router.put('/:id', function(request, response, next) {
        var id = request.params.id;
        //console.log(request.body.group); 
        var group = request.body.group; 
        Group.findByIdAndUpdate(id, group, {new: true}, function(err, group) {
        	if (err){
                console.log('Error in Group Creation: ' + err);
                response.send({'flag': false, 'msg': "Error updating group. Try again."});
        	}
        	if (group){
        		response.send({'group': group, 'flag': true, 'msg': "Saved Successful"});
        	}
        	
        });
    });


    // Get user by username, create group, add user as
    // creation user, add user to subscribers list,
    // add user to organizers list, add group to user's
    // groups list 
    router.post('/', function(request, response, next) {
        var group = request.body.group; 
        var user = request.body.user;
        
        //return response.send({'msg': true});
        Group.findOne({
            'name': group.name
        }, function(err, g) {
            // error checking
            if (err) {
                console.log('Error in Group Creation: ' + err);
            }
            //if group already exsists
            if (g) {
                console.log('Group name taken try again. ' + g.name);
                response.send({'flag': false, 'msg': "Group name taken, try again."});
            } else {
                // if no group exist create one
                var newGroup = new Group({
                	name: group.name,
                    /*
                    picture: {
                    	type: String,
                    	default: "//placehold.it/500x500/"
                    },
                    */
                	creationDate : 		group.creationDate,
                	city: 				group.city, 
                	state: 				group.state, 
                	zipcode: 			group.zipcode,
                	description : 		group.description,
                	googlePlusURL : 	group.googlePlusURL,
                	facebookURL : 		group.facebookURL,
                	linkedInURL : 		group.linkedInURL,
                	twitterURL: 		group.twitterURL,
                	personalWebsiteURL: group.personalWebsiteURL,
                	interests:			group.interests
                });
                
                // Adds the user to group's organizer list
                //newGroup.organizers.push(user);
                
                //save group
                newGroup.save(function(err) {
                    if (err) {
                        console.log('Error in saving user:' + err);
                        throw err;
                    }
                    console.log('Group registration success');
                    response.send({'group': newGroup, 'flag': true, 'msg': "Group successfully created, redirecting to " + newGroup.name});
                });
                
            }
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

