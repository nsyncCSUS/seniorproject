var express = require('express');
var router = express.Router();

router.get('/data/:id', function(req, res) {
	// Get group from db
	var json = 
	{
			id : "nsync",
			name : "N.Sync()",
			picture : "//placekitten.com/g/500/500/",
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
				picture : "//placekitten.com/g/501/500/",
				startTimeDate : "2015-08-26T18:50:10.111Z",
				endTimeDate : "2015-08-27T18:50:10.111Z",
				maxVolunteers : 50,
				interests : [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}],
				volunteers: [{id: "v1", firstName: "Kitten 1", lastName: "1"}, 
				             {id: "v2", firstName: "Kitten 2", lastName: "1", picture: "//placekitten.com/g/250/251"}, 
				             {id: "v3", firstName: "Kitten 3", lastName: "1"}, 
				             {id: "v4", firstName: "Kitten 4", lastName: "1", picture: "//placekitten.com/g/250/253"}, 
				             {id: "v5", firstName: "Kitten 5", lastName: "1", picture: "//placekitten.com/g/250/254"}, 
				             {id: "v6", firstName: "Kitten 6", lastName: "1", picture: "//placekitten.com/g/250/255"}, 
				             {id: "v7", firstName: "Kitten 7", lastName: "1", picture: "//placekitten.com/g/250/256"}, 
				             {id: "v8", firstName: "Kitten 8", lastName: "1", picture: "//placekitten.com/g/250/257"}, 
				             {id: "v9", firstName: "Kitten 9", lastName: "1", picture: "//placekitten.com/g/250/258"}, 
				             {id: "v10", firstName: "Kitten 10", lastName: "1", picture: "//placekitten.com/g/250/259"}, 
				             {id: "v11", firstName: "Kitten 11", lastName: "1", picture: "//placekitten.com/g/250/260"}]
			},
			{
				id : "event2",
				name : "event2",
				picture : "//placekitten.com/g/503/500/",
				startTimeDate : "2015-08-28T18:50:10.111Z",
				endTimeDate : "2015-08-29T18:50:10.111Z",
				maxVolunteers : 50,
				interests : [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}],
				volunteers: [{id: "v1", firstName: "Kitten 1", lastName: "1", picture: "//placekitten.com/g/251/250"}, 
				             {id: "v2", firstName: "Kitten 2", lastName: "1", picture: "//placekitten.com/g/251/251"}, 
				             {id: "v3", firstName: "Kitten 3", lastName: "1", picture: "//placekitten.com/g/251/252"}, 
				             {id: "v4", firstName: "Kitten 4", lastName: "1", picture: "//placekitten.com/g/251/253"}, 
				             {id: "v5", firstName: "Kitten 5", lastName: "1"}, 
				             {id: "v6", firstName: "Kitten 6", lastName: "1", picture: "//placekitten.com/g/251/255"}, 
				             {id: "v7", firstName: "Kitten 7", lastName: "1", picture: "//placekitten.com/g/251/256"}, 
				             {id: "v8", firstName: "Kitten 8", lastName: "1", picture: "//placekitten.com/g/251/257"}, 
				             {id: "v9", firstName: "Kitten 9", lastName: "1", picture: "//placekitten.com/g/251/258"}, 
				             {id: "v10", firstName: "Kitten 10", lastName: "1"}, 
				             {id: "v11", firstName: "Kitten 11", lastName: "1", picture: "//placekitten.com/g/251/260"}, 
				             {id: "v12", firstName: "Kitten 12", lastName: "1", picture: "//placekitten.com/g/251/261"}, 
				             {id: "v13", firstName: "Kitten 13", lastName: "1", picture: "//placekitten.com/g/251/262"}, 
				             {id: "v14", firstName: "Kitten 14", lastName: "1", picture: "//placekitten.com/g/251/263"}, 
				             {id: "v15", firstName: "Kitten 15", lastName: "1", picture: "//placekitten.com/g/251/264"}, 
				             {id: "v16", firstName: "Kitten 16", lastName: "1", picture: "//placekitten.com/g/251/265"}]
			}
			],
			organizers : [{id : "org1", firstName : "org1", lastName: "1"},
			              {id : "org2", firstName : "org2", lastName: "1", picture : "//placekitten.com/g/351/350/"},
			              {id : "org3", firstName : "org3", lastName: "1", picture : "//placekitten.com/g/352/350/"},
			              {id : "org4", firstName : "org4", lastName: "1", picture : "//placekitten.com/g/353/350/"},
			              {id : "org5", firstName : "org5", lastName: "1"},
			              {id : "org6", firstName : "org6", lastName: "1", picture : "//placekitten.com/g/355/350/"}],
			subscribers : [{id : "sub1", firstName : "sub1", lastName: "1", picture : "//placekitten.com/g/350/355/"},
			               {id : "sub2", firstName : "sub2", lastName: "1", picture : "//placekitten.com/g/351/355/"},
			               {id : "sub3", firstName : "sub3", lastName: "1", picture : "//placekitten.com/g/352/355/"},
			               {id : "sub4", firstName : "sub4", lastName: "1"},
			               {id : "sub5", firstName : "sub5", lastName: "1", picture : "//placekitten.com/g/354/355/"},
			               {id : "sub6", firstName : "sub6", lastName: "1", picture : "//placekitten.com/g/355/355/"},
			               {id : "sub7", firstName : "sub7", lastName: "1", picture : "//placekitten.com/g/350/355/"},
			               {id : "sub8", firstName : "sub8", lastName: "1", picture : "//placekitten.com/g/356/355/"},
			               {id : "sub9", firstName : "sub9", lastName: "1"},
			               {id : "sub10", firstName : "sub10", lastName: "1", picture : "//placekitten.com/g/358/355/"}],
			interests : [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]
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

router.put('/data/:id', function(req, res) {
	// Post new group to db (data is in req.body)
	console.log("Got a PUT request for a new group");
	console.log("Posted Group '" + req.body.name + "' success.");
	
	res.json({msg: true});
});

router.post('/')
module.exports = router;
