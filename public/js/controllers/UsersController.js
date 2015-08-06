(function() {
	var app = angular.module('usersController', [ 'userService', 'userFactory' ]);

	app.controller('UsersController', [ '$scope', 'UserService', 'UserFactory', function($scope, UserService, UserFactory) {
		var refresh = function(){
			UserService.get('/users').success(function(response)
			{
				console.log("I got the data");
			});
		};
		refresh();
	
	
	
	}]);

})();