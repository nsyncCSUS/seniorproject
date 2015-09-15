(function() {
	var app = angular.module('dashboardController', ['dashboardService', 'dashboardFactory']);	//creating new module
	
	/*create new controller; [] is a list of dependencies to fetch, and pass them all into a constructor function*/
	app.controller('DashboardController', [ '$scope', 'DashboardService', 'DashboardFactory', 'EventService', function($scope, DashboardService, DashboardFactory, EventService) {
		//put all logic in controller
		//$scope will stores data
		//$scope.message = "A new message";
		//$scope.event = {startTimeDate:"string"}	//will store startTimeDate inside of event, and it will store event inside of scope
		$scope.event = {startTimeDate: event.startTimeDate}	//will store startTimeDate inside of event, and it will store event inside of scope
		
		
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
		
		$scope.event = {
			startTimeDate: '09/12/2015', 
			endTimeDate: '09/24/2015',
			yourEventsDate: '09/14/2015',
			yourEventsTime: '12:00PM',
			yourGroupEventsDate: '09/15/2015',
			yourGroupEventsTime: '3:00PM',
			volunteerList: [{name: 'John'}],
			yourGroupEvents: [{groupEventTitle: 'Event 1', time: 'Time 1', date: 'Date 1'},
				{groupEventTitle: 'Event 2', time: 'Time 2', date: 'Date 2'}]
		}
	} ]);

})();

/*
info: {
	firstName : 	String,
	middleName : 	String,
	lastName : 		String,
	description : 	String,
	email : 		String,
	birthday : 		Date,
	age : 			Number,
	city : 			String,
	state : 		String,
	zipCode : 		Number,
	phoneNum : 		Number,
	picture : 		String,
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
	info: {
		id : 				String,
		groupName : 		String,
		picture : 			String,
		creationDate : 		String,
			//city : 			String,
			//state : 			String,
			//zipCode : 		Number,
		description : 		String,
		googlePlusURL : 	String,
		facebookURL : 		String,
		linkInURL : 		String,
		twitterURL: 		String,
		personalWebsiteURL: String,
		events:			[{id: String}, {id: String}, ...],
		organizers:		[{id: String}, {id: String}, ...],
		subscribers:		[{id: String}, {id: String}, ...],
		interests: 	[{type: String}, {type: String}, ...]

	}
*/

/*
info: {
	id: 			String,		
	creatorId: 		String,
	groupId: 		String,
	eventName: 		String,
	description: 	String,
	picture: 		String,
	creationDate: 	DateTime,
	startTimeDate: 	DateTime,
	endTimeDate: 	DateTime,
	address: 		String,
	city: 			String,
	state: 			String,
	zipcode: 		Number,		
	maxVolunteers: String,
	volunteers:	[{id: String}, {id: String}, ...],
	interests: [{type: String}, {type: String}, ...]
	
}
*/