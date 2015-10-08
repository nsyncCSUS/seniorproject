(function() {
    var app = angular.module('eventsController', ['eventService', 'eventFactory']);

    app.controller('EventsController', ['$scope', '$routeParams', 'EventService', 'EventFactory', function($scope, $routeParams, EventService, EventFactory) {

        /***************************************************************************
         * Variables (includes ones from scope too)
         **************************************************************************/
        $scope.eventId = $routeParams.eventId;


        /***************************************************************************
         * Admin Testing
         **************************************************************************/
        $scope.isAdmin = false;
        $scope.toggleAdmin = function() {
            $scope.isAdmin = !$scope.isAdmin;
        }

        /***************************************************************************
         * Dummy Data Testing
         **************************************************************************/
        $scope.isEditing = false;
		$scope.isSearching = false;
		$scope.currentDate = new Date();
		
		$scope.group =  
		{

				events : [ {
					id : "event1",
					creatorId: "",
					groupId: "",
					name : "Awesome Event Number 1 asdf asdf asdf asdf",
					description: "sodales malesuada accumsan vel, condimentum eget eros. Mauris consectetur nisi in ex pharetra commodo. Nullam aliquam velit sem, nec molestie risus eleifend ac. In fringilla, nisl ac gravida convallis, turpis eros accumsan urna, sed molestie tortor libero sit amet lacus. Nulla porttitor euismod purus, ut hendrerit leo vehicula sed. Aenean a lobortis metus, ut ornare erat. Suspendisse tincidunt molestie lacus, non molestie sem blandit non.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate pellentesque lorem. Donec erat ante, sodales malesuada accumsan vel, condimentum eget eros. Mauris consectetur nisi in ex pharetra commodo. Nullam aliquam velit sem, nec molestie risus eleifend ac. In fringilla, nisl ac gravida convallis, turpis eros accumsan urna, sed molestie tortor libero sit amet lacus. Nulla porttitor euismod purus, ut hendrerit leo vehicula sed. Aenean a lobortis metus, ut ornare erat. Suspendisse tincidunt molestie lacus, non molestie sem bland center",
					picture : "//placekitten.com/g/501/500/",
					startTimeDate : "2015-08-26T18:50:10.111Z",
					endTimeDate : "2015-08-27T18:50:10.111Z",
					location: {street: "1234 cool st", city: "Sacramento", state: "CA", zipcode: "95828"},
					maxVolunteers : 50,
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
					             {id: "v11", firstName: "Kitten 11", lastName: "1", picture: "//placekitten.com/g/250/260"}],
					interests : [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]
									
				}
				],
				organizers : [{id : "org1", firstName : "org1", lastName: "1"},
				              {id : "org2", firstName : "org2", lastName: "1", picture : "//placekitten.com/g/351/350/"},
				              {id : "org3", firstName : "org3", lastName: "1", picture : "//placekitten.com/g/352/350/"},
				              {id : "org4", firstName : "org4", lastName: "1", picture : "//placekitten.com/g/353/350/"},
				              {id : "org5", firstName : "org5", lastName: "1"},
				              {id : "org6", firstName : "org6", lastName: "1", picture : "//placekitten.com/g/355/350/"}],
		};
    }]);

})();


/*
	user: {
		firstName : 	String,
		middleName : 	String,
		lastName : 		String,
		description : 	String,
		picture:		String,
		email : 		String,
		birthday : 		Date,
		age : 			Number,
		location :		{city: String, state: String, zipcode: String},	
		phoneNum : 		Number,
		googlePlus : 	String,
		facebook : 		String,
		linkedIn : 		String,
		twitter : 		String,
		volunteeredTo : [{id: String}, {id: String}, ...],
		creatorOf : 	[{id: String}, {id: String}, ...],
		organizerOf : 	[{id: String}, {id: String}, ...],
		subscribedTo : 	[{id: String}, {id: String}, ...],
		interests : 	[{type: String}, {type: String}, ...]
	}
*/

/*
	group: {
		id : 				String,
		name : 				String,
		picture : 			String,
		creationDate : 		String,
		location :			[{city: String, state: String, zipcode: String}, ...],
		description : 		String,
		googlePlusURL : 	String,
		facebookURL : 		String,
		linkInURL : 		String,
		twitterURL: 		String,
		personalWebsiteURL: String,
		events:				[{id: String}, {id: String}, ...],
		organizers:			[{id: String}, {id: String}, ...],
		subscribers:		[{id: String}, {id: String}, ...],
		interests: 			[{type: String}, {type: String}, ...]

	}
*/

/*
	event: {
		id: 			String,		
		creatorId: 		String,
		groupId: 		String,
		name: 			String,
		description: 	String,
		picture: 		String,
		creationDate: 	DateTime,
		startTimeDate: 	DateTime,
		endTimeDate: 	DateTime,
		location :		{street: String, city: String, state: String, zipcode: String},	
		maxVolunteers: 	Number,
		volunteers:		[{id: String}, {id: String}, ...],
		interests: 		[{type: String}, {type: String}, ...]
	}
*/