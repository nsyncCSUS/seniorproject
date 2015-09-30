	//HL $Scope is to pass info from view to model
	// $http used to do http protocols GET POST UPATE DELTE
	// $location is to change the path url inside angular
(function() {
    var app = angular.module('signupController', ['signupService']);


	app.controller('SignupController', [ '$scope','$http','$location', function($scope,$http,$location) {

		$scope.register = function (){
			console.log($scope.user.username);
			console.log($scope.user.password);

			// routes/users.js : passes the scope.user object into the http post
			$http.post('/users',$scope.user);
			console.log('back to app');
			// redirects user to home after registration completes
			 $location.path('/login');
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
