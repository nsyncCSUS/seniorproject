var express = require('express');
var router = express.Router();

router.get('/data/:id', function(req, res) {
	// Get group from db
	var json = 
	{
			id : "id123",
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
			eventList : [ {
				name : "event1",
				interests : [{type: "animals"}, {type: "education"}, {type: "environment"}, {type: "people"}, {type: "recreation"}, {type: "technology"}, {type: "youth"}]
			},{
				name : "event2"
			},{
				name : "event3"
			}
			],
			organizerList : [ {
				name : "org1"
			} ],
			subscriptionList : [ {
				name : "sub1"
			} ],
			interests : [ {
				type : "technology"
			}, ]
	};
	
	console.log("Got a GET request for /data/groups/" + req.params.id);
	console.log("Sending Group '" + json.name + "'");
	
	// Send group information back as a json
	res.json(json);
});

router.post('/', function(req, res) {
	// Post new group to db (data is in req.body)
	console.log("Got a POST request for a new group");
	console.log("Posted Group '" + req.body.name + "' success.");
	
	res.json({msg: true});
});

router.post('/')
module.exports = router;
