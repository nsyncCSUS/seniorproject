(function() {
	var app = angular.module('usersController', [ 'userService', 'userFactory' ]);

	app.controller('UsersController', [ '$scope', '$routeParams', 'UserService', 'UserFactory', function($scope, $routeParams, UserService, UserFactory) {

		$scope.userId = $routeParams.userId;
		
		// Problematic code
		/*		
		var refresh = function(){
			UserService.get('/users').success(function(response)
			{
				console.log("I got the data");
			});
		};
		refresh();
		 */
		
		function refresh(){
			// Problematic code
			//UserService.get('/users').success(function test(response)
			//{
				console.log("I got the data");
			//});
		};
		refresh();
	
	
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
		location :	[{city: String, state: String, zipcode: String}, ...],
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