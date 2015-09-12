(function() {
    var app = angular.module('signupController', ['signupService']);

    app.controller('SignupController', ['$scope', '$http', '$location', function($scope, $http, $location) {

        $scope.register = function() {
            console.log($scope.user.username);
            console.log($scope.user.password);
            $http.post('/users', $scope.user);
            console.log('back to app');
            $location.path('/home');
        };

    }]);

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