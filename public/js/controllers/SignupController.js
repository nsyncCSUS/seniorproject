//HL $Scope is to pass info from view to model
// $http used to do http protocols GET POST UPATE DELTE aka AJAX =$http
// $location is to change the path url inside angular
(function() {
  var app = angular.module('signupController', ['signupService']);
  app.controller('SignupController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.register = function() {
      console.log($scope.user.username);
      console.log($scope.user.password);

      // routes/users.js : passes the scope.user(from angular) object into the http post
      // when the post sends back the repsonse .then function(promise) triggers and tests if the response was a success
      // if is was the .then function is called. If the response sent back from the http.post failed or gave error the
      // errorCallBack function will be envoked
      $http.post('/api/users/createuser', $scope.user).then(function(response) {
        console.log(response);
        console.log('promise');
        console.log(response.status);
        if (response.status === 200) {
          $location.path('/login');
        }
      }, function errorCallBack(response) {
        console.log('signup');
        console.log(response);

        $location.path('/signup');


      });
      // redirects user to login after registration completes

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
