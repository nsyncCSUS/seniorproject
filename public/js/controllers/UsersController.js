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
	

    $scope.users = []; 
    $scope.getUsers = function() {
        UserService.get({}, function(response) {
            $scope.users = response.data; 
        }); 
    };
	
	}]);

})();
