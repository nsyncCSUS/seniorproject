(function() {

	var app = angular.module('dashboardController', ['dashboardService', 'dashboardFactory']);	//creating new module
	
	/*create new controller; [] is a list of dependencies to fetch, and pass them all into a constructor function*/
	app.controller('DashboardController', [ '$scope', 'DashboardService', 'DashboardFactory', 'EventService', function($scope, DashboardService, DashboardFactory, EventService) {
		//put all logic in controller
		//$scope will stores data
		//$scope.message = "A new message";
		//$scope.event = {startTimeDate:"string"}	//will store startTimeDate inside of event, and it will store event inside of scope
		//$scope.event = {startTimeDate: event.startTimeDate};	//will store startTimeDate inside of event, and it will store event inside of scope
		
		this.selectedTab = "yourEvents";
		$scope.currentDate = new Date();	//returns current date and time
		
		
		// Call service function with a callback. The first argument 
		// is the data you want to pass to the Http request, and the 
		// second argument is a function to be called when the Http
		// request returns with a successful status code. Then reassign
		// $scope.event to the new event object we receive from the Http
		// response. 
		
		/* EventService.getEvent({id: 1}, function(response) {	
			$scope.event = response.event; 
		
		});
		EventService.getEvent({startTimeDate: event.startTimeDate}, function(response){
			$scope.event = response.event;
		}); */
		
//		$scope.user = {
//				firstName : 	"",
//				middleName : 	"",
//				lastName : 		"",
//				description : 	"",
//				picture:		"",
//				email : 		"",
//				birthday : 		"",
//				age : 			"",
//				city : 			"",
//				state : 		"",
//				zipCode : 		"",
//				phoneNum : 		"",
//				googlePlus : 	"",
//				facebook : 		"",
//				linkedIn : 		"",
//				twitter : 		"",
//				volunteeredTo : [{id: ""}, {id: ""}],
//				creatorOf : 	[{id: ""}, {id: ""}],
//				organizerOf : 	[{id: ""}, {id: ""}],
//				subscribedTo : 	[{id: ""}, {id: ""}],
//				interests : 	[{type: ""}, {type: ""}]
//			};
		
		$scope.user = {
				firstName : 	"",
				middleName : 	"",
				lastName : 		"",
				description : 	"",
				picture:		"",
				email : 		"",
				birthday : 		"",
				age : 			"",
				city : 			"",
				state : 		"",
				zipCode : 		"",
				phoneNum : 		"",
				googlePlus : 	"",
				facebook : 		"",
				linkedIn : 		"",
				twitter : 		"",
				volunteeredTo : [ {
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
									
				},
				{
					id : "event2",
					creatorId: "",
					groupId: "",
					name : "Awesome Event Number 2 asdf asdf asdf asdf",
					description: "aaaaaaaaaa bbbbbbbbbbbbbbb cccccccccccccccc dddddddddddddddddd eeeeeeeeeeeeeeeeeee fffffffffffffffffff gggggggggggggggggg hhhhhhhhhhhhhh iiiiiiiiiiiiiiiiiiii jjjjjjjjjjjjjjjjjjjj",
					picture : "//placekitten.com/g/503/500/",
					location: {street: "4321 cool st", city: "Sacramento", state: "CA", zipcode: "95828"},
					startTimeDate : "2015-08-28T18:50:10.111Z",
					endTimeDate : "2015-08-29T18:50:10.111Z",
					maxVolunteers : 50,
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
					             {id: "v16", firstName: "Kitten 16", lastName: "1", picture: "//placekitten.com/g/251/265"}],
					interests : [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}]
				}
				],
				creatorOf : 	[{id: ""}, {id: ""}],
				organizerOf : 	[
				    {
						id : "nsync",
						name: "N.Sync().......... .............. ................ ............. ..........................",
						picture : "//placekitten.com/g/500/500/"},
				    {
						id : "nsync2",
						name: "N.Sync().......... .............. ",
						picture : "//placekitten.com/g/500/500/"},
				    {
						id : "nsync3",
						name: "N.Sync().......... ",
						picture : "//placekitten.com/g/500/500/"},
				    {
						id : "nsync4",
						name: "N.Sync().......... ............",
						picture : "//placekitten.com/g/500/500/"}
					],
				subscribedTo : 	[
								    {
										id : "nsync",
										name: "N.Sync().......... .............. ................ ............. ..........................",
										picture : "//placekitten.com/g/500/500/"},
								    {
										id : "nsync2",
										name: "N.Sync().......... .............. ",
										picture : "//placekitten.com/g/500/500/"},
								    {
										id : "nsync3",
										name: "N.Sync().......... ",
										picture : "//placekitten.com/g/500/500/"},
								    {
										id : "nsync4",
										name: "N.Sync().......... ............",
										picture : "//placekitten.com/g/500/500/"}
									]
			};
		
		$scope.upcomingEvents = [//yourGroupEvents: [{groupEventTitle: 'Event 1', time: 'Time 1', date: 'Date 1'},
		         				//{groupEventTitle: 'Event 2', time: 'Time 2', date: 'Date 2'}]
		                         
		                         {picture : "//placekitten.com/g/500/500/",	
		                         startTimeDate: "2015-08-26T18:50:10.111Z", 
								 endTimeDate: "2015-09-26T18:50:10.111Z", 
								 name: 'Event 1', volunteers: [{id: '49', firstName: 'Kris', lastName: 'Tadlok', picture: 'https://pbs.twimg.com/profile_images/2382660015/ducati_dog_profile.gif'}, {id: '50', firstName: 'Vadzim', lastName: 'Savenok', picture: 'https://lh3.googleusercontent.com/-fBggJD3y3Go/UgAEKqWlLkI/AAAAAAAAAAo/tjfjrjykw3Q/s426/BigDog_GooglePlusProfile.jpg'}],
		                         maxVolunteers: '25', interests: [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]},	
								 
								 {picture : "//placekitten.com/g/501/500/",
		                         startTimeDate: "2016-08-26T18:50:10.111Z", 
								 endTimeDate: "2016-09-26T18:50:10.111Z", 
								 name: 'Event 2', volunteers: [{name: 'Anthony'}, {name: 'Huy'}, {name: 'Shane'}, {name: 'John'}, {name: 'Vadzim'}, {name: 'Kris'}],
								 maxVolunteers: '35', interests: [{type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]}];
		
		/***************************************************************************
		 * Functions that controls tabs for searching
		 **************************************************************************/
		$scope.setCurrentTab = function(category) {
			this.selectedTab = category;
		}
		
		$scope.getCurrentTab = function(category) {
			if (this.selectedTab === category)
				return true;
			else
				return false;
		}
		
		
		/*
		 * Checks if there are more than 1 upcoming events, the view will display
		 * arrows to move across events if that is the case.
		 */
		$scope.hasMultipleEvents = function() {
			if ($scope.upcomingEvents != null){
				if ($scope.upcomingEvents.length >= 2)
					return true;
				else
					return false;
			}
			else
				return false;
		}
		
		/*
		 * Checks if the gorup has a picture, the view will display a default
		 * picture if no picture is found.
		 */
		$scope.hasPicture = function(type1, index1, type2, index2) {
			switch(type1){
			case "group":
				if ($scope.group.picture != null){
					if ($scope.group.picture.length > 0)
						return true;
					else
						return false;
					}
				else{
					if ($scope.loaded == false)
						return true;
					else
						return false;
				}
			case "organizer":
				if ($scope.group.organizersBuilt != null){
					if ($scope.group.organizersBuilt[index1].organizers[index2].picture != null){
						if ($scope.group.organizersBuilt[index1].organizers[index2].picture.length > 0)
							return true;
						else
							return false;
						}
					else
						return false;
				}
			case "organizerXS":
				if ($scope.group.organizersBuiltXS != null){
					if ($scope.group.organizersBuiltXS[index1].organizers[index2].picture != null){
						if ($scope.group.organizersBuiltXS[index1].organizers[index2].picture.length > 0)
							return true;
						else
							return false;
						}
					else
						return false;
				}
			case "subscriber":
				if ($scope.group.subscribers != null){
					if ($scope.group.subscribers[index1].picture != null){
						if ($scope.group.subscribers[index1].picture.length > 0)
							return true;
						else
							return false;
						}
					else
						return false;
				}
			case "event":
				if ($scope.upcomingEvents != null){
					if (type2 != null) {
						switch(type2){
						case "volunteer":
							if ($scope.upcomingEvents[index1].volunteers[index2].picture != null) {
								if ($scope.upcomingEvents[index1].volunteers[index2].picture.length > 0) 
									return true;
								else
									return false;
							}
						}
					}
					else{
						if ($scope.upcomingEvents[index1].picture != null){
							if ($scope.upcomingEvents[index1].picture.length > 0)
								return true;
							else
								return false;
							}
						else
							return false;
					}
				}
			}
		}
		
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
