(function() {
<<<<<<< HEAD
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
				volunteeredTo : [//yourGroupEvents: [{groupEventTitle: 'Event 1', time: 'Time 1', date: 'Date 1'},
		         				//{groupEventTitle: 'Event 2', time: 'Time 2', date: 'Date 2'}]
		                         
		                         {picture : "//placekitten.com/g/500/500/",	
		                         //volunteered: null,  
		                         startTimeDate: "2015-08-26T18:50:10.111Z", 
								 endTimeDate: "2015-09-26T18:50:10.111Z", 
								 name: 'Event 2', volunteers: [{id: '49', firstName: 'Kris', lastName: 'Tadlok', picture: 'https://pbs.twimg.com/profile_images/2382660015/ducati_dog_profile.gif'}, {id: '50', firstName: 'Vadzim', lastName: 'Savenok', picture: 'https://lh3.googleusercontent.com/-fBggJD3y3Go/UgAEKqWlLkI/AAAAAAAAAAo/tjfjrjykw3Q/s426/BigDog_GooglePlusProfile.jpg'}],
		                         maxVolunteers: '25', interests: [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]},	
								 
								 {picture : "//placekitten.com/g/501/500/",
		                         startTimeDate: "2016-08-26T18:50:10.111Z", 
								 endTimeDate: "2016-09-26T18:50:10.111Z", 
								 name: 'Event 3', volunteers: [{name: 'Anthony'}, {name: 'Huy'}, {name: 'Shane'}, {name: 'John'}, {name: 'Vadzim'}, {name: 'Kris'}],
								 maxVolunteers: '35', interests: [{type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]}],
				creatorOf : 	[{id: ""}, {id: ""}],
				organizerOf : 	[{id: ""}, {id: ""}],
				subscribedTo : 	[//yourGroupEvents: [{groupEventTitle: 'Event 1', time: 'Time 1', date: 'Date 1'},
		         				//{groupEventTitle: 'Event 2', time: 'Time 2', date: 'Date 2'}]
		                         
				               	{picture : "//placekitten.com/g/500/500/",	
			                         startTimeDate: "2015-08-26T18:50:10.111Z", 
									 endTimeDate: "2015-09-26T18:50:10.111Z", 
									 name: 'Event 1', volunteers: [{id: '49', firstName: 'Kris', lastName: 'Tadlok', picture: 'https://pbs.twimg.com/profile_images/2382660015/ducati_dog_profile.gif'}, {id: '50', firstName: 'Vadzim', lastName: 'Savenok', picture: 'https://lh3.googleusercontent.com/-fBggJD3y3Go/UgAEKqWlLkI/AAAAAAAAAAo/tjfjrjykw3Q/s426/BigDog_GooglePlusProfile.jpg'}],
			                         maxVolunteers: '25', interests: [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]},
				               	 
		                         {picture : "//placekitten.com/g/501/500/",	
		                         startTimeDate: "2015-08-26T18:50:10.111Z", 
								 endTimeDate: "2015-09-26T18:50:10.111Z", 
								 name: 'Event 2', volunteers: [{id: '49', firstName: 'Kris', lastName: 'Tadlok', picture: 'https://pbs.twimg.com/profile_images/2382660015/ducati_dog_profile.gif'}, {id: '50', firstName: 'Vadzim', lastName: 'Savenok', picture: 'https://lh3.googleusercontent.com/-fBggJD3y3Go/UgAEKqWlLkI/AAAAAAAAAAo/tjfjrjykw3Q/s426/BigDog_GooglePlusProfile.jpg'}],
		                         maxVolunteers: '25', interests: [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]},	
								 
								 {picture : "//placekitten.com/g/501/500/",
		                         startTimeDate: "2016-08-26T18:50:10.111Z", 
								 endTimeDate: "2016-09-26T18:50:10.111Z", 
								 name: 'Event 3', volunteers: [{name: 'Anthony'}, {name: 'Huy'}, {name: 'Shane'}, {name: 'John'}, {name: 'Vadzim'}, {name: 'Kris'}],
								 maxVolunteers: '35', interests: [{type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]}],
				interests : 	[{type: ""}, {type: ""}]
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
=======
    var app = angular.module('dashboardController', ['dashboardService', 'dashboardFactory']);

    app.controller('DashboardController', ['$scope', 'DashboardService', 'DashboardFactory', function($scope, DashboardService, DashboardFactory) {

    }]);
>>>>>>> refs/remotes/origin/dev

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