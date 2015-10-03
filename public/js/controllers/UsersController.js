(function() {
	var app = angular.module('usersController', [ 'userService', 'userFactory' ]);

	app.controller('UsersController', [ '$scope', '$routeParams', 'UserService', 'UserFactory', function($scope, $routeParams, UserService, UserFactory) {
        /******************************************************************
		/ Variables
		******************************************************************/
		$scope.userId = $routeParams.userId;
		
		
	
	
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