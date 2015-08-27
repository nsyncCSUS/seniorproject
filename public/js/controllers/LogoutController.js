(function() {
	var app = angular.module('logoutController', [ 'logoutService' ]);

	app.controller('LogoutController', [ '$scope', 'LogoutService','$window','LoginService', function($scope, LogoutService,$window,LoginService) {

		$scope.logout = function(){
			console.log(window.sessionStorage);
			window.sessionStorage.clear();
			console.log(window.sessionStorage);
			LoginService.isLogged= false;
		};

	} ]);

})();
