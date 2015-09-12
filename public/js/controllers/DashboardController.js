(function() {
    var app = angular.module('dashboardController', ['dashboardService', 'dashboardFactory']);

    app.controller('DashboardController', ['$scope', 'DashboardService', 'DashboardFactory', function($scope, DashboardService, DashboardFactory) {

    }]);

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