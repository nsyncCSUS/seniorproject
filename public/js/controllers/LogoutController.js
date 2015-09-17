(function() {
    var app = angular.module('logoutController', ['logoutService']);

	app.controller('LogoutController', [ '$scope', 'LogoutService','$window','LoginService', function($scope, LogoutService,$window,LoginService) {

		$scope.logout = function(){
			console.log(window.sessionStorage);
			window.sessionStorage.clear();
			console.log(window.sessionStorage);
			LoginService.isLogged= false;
		};

        $scope.$on('$viewContentLoaded', function() {
            $scope.logout();
            console.log("User logged out");
        });
        
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
