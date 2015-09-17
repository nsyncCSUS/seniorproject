
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
    var events = express.Router({mergeParams: true});

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
    var users = express.Router({mergeParams: true});

    
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

        return response.end(); 
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
