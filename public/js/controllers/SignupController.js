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




	} ]);

})();
