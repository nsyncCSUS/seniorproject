//HL Posts to /user/login and passes scope.user(this will be passed to 'req.body' inside the POST) when user logins
// if login is successful extracts the token that the the POST passes back(POST passes back an object)
// After user is confimed logged in logged service is used to change the isLogged Value
// This will be used for client sided authentication

//$window is the window object inside the browser
(function() {
    var app = angular.module('loginController', ['loginService']);

	app.controller('LoginController', [ 'LoginService','$scope' ,'$http','$location' ,'$window', function(LoginService, $scope, $http, $location, $window ) {

		$scope.login = function(){
			$http.post('/users/login',$scope.user)
			.then(function(response){
				console.log(response);
				$window.sessionStorage.token = response.data.token;
				console.log($window.sessionStorage);
				$location.path('/home');
				LoginService.isLogged = 'True';
			});
		};

		$scope.testAuth = function(){
			$http.get('/groups');
		};
		$scope.testAuth2 = function(){
			$http.get('/events');
		};



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
		city : 			String,
		state : 		String,
		zipCode : 		Number,
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
