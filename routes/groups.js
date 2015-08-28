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
				name : "event1"
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
			interest : [ {
				type : "technology"
			}, ]
	};
	
	console.log("Got a request from /data/groups/" + req.params.id);
	console.log("Sending Group '" + json.name + "'");
	
	// Send group information back as a json
	res.json(json);
});

module.exports = router;
