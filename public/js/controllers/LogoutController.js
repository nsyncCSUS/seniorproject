(function() {
	var app = angular.module('logoutController', [ 'logoutService' ]);

	app.controller('LogoutController', [ '$scope', 'LogoutService', function($scope, LogoutService) {

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