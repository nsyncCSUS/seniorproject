var express = require('express');
var router = express.Router();

router.get('/data/:id', function(req, res) {
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
});

router.post('/', function(req, res) {
	// Post new group to db (data is in req.body)
	console.log("Got a POST request for a new group");
	console.log("Posted Group '" + req.body.name + "' success.");
	
	res.json({msg: true});
});

router.post('/')
module.exports = router;
