(function() {
	var app = angular.module('signupController', []);

	app.controller('SignupController', [ '$scope','$http','$location', function($scope,$http,$location) {

		$scope.register = function (){
			console.log($scope.user.username);
			console.log($scope.user.password);
			$http.post('/users',$scope.user);
			console.log('back to app');
			 $location.path('/home');
		};




	} ]);

})();
