(function() {
	var app = angular.module('signupController', ['signupService']);

	app.controller('SignupController', [ '$scope', 'SignupService', function($scope, SignupService) {

	} ]);

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