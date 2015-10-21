//HL Posts to /user/login and passes scope.user(this will be passed to 'req.body' inside the POST) when user logins
// if login is successful extracts the token that the the POST passes back(POST passes back an object)
// After user is confimed logged in logged service is used to change the isLogged Value
// This will be used for client sided authentication

// Dependency Injection Objects
// $window is the window object inside the browser
// Upload  is a object from injected into angular called ng-file-upload. it is used
// in the image uploading process. You call the function upload from it and it takes the form
// information (ng-file-upload has a specail derective/model that creates the form (inside jade code))
// and calls a post it to the route with an object that is easily usable.
(function() {
  var app = angular.module('loginController', ['loginService', 'userFactory']);
  // Note service/factor names are lower cased on module parameter uppercase on controller parameter

  app.controller('LoginController', ['LoginService', '$scope', '$http', '$location', '$window', 'Upload', 'UserFactory', function(LoginService, $scope, $http, $location, $window, Upload, UserFactory) {


    $scope.userObject = UserFactory.userObject();

    // upload later on form submit or something similar
    $scope.submit = function() {
      console.log('testasdf');
      if (form.file.$valid && $scope.file && !$scope.file.$error) {

        $scope.upload($scope.file);
      }
    };

    // upload on file select or drop
    $scope.upload = function(file) {
      console.log($scope.myForm);
      console.log(file);
      Upload.upload({
        url: '/api/users/upload', // which route to post
        fields: {
          'username': 'test' // any fields you would like specified
        },
        file: file // the actual image file being passed
      }).progress(function(evt) { // Useful debugging lines
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
      }).success(function(data, status, headers, config) {
        console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
      }).error(function(data, status, headers, config) {
        console.log('Http status: ' + status);
      });
      //once the upload has completed these 3 lines clear the form fields
      $scope.picFile = null;
      $scope.myForm.$setPristine();
      $scope.myForm.$setUntouched();
    };
    // same concept from signupcontroller.js useing promises if success .then used if failed errocallback used
    $scope.login = function() {
      $http.post('/api/users/login', $scope.user)
        .then(function(response) {
          console.log(response);
          $window.sessionStorage.token = response.data.token;
          console.log($window.sessionStorage);
          $location.path('/home');
          LoginService.isLogged = 'True';
        }, function errorCallBack(response) {
          console.log('Login failed call back angular');
          console.log(response);
          //TODO: add some kind of ng-show error message to tell user login failed
        });
    };

    // needed to pass params you cannot pass data in a get but angular has work around
    /*
    $http({
        url: user.details_path,
        method: "GET",
        params: {user_id: user.id}
     });
     */
    //Note: put the params into url encoded you have to decode to extract also its a string
    // Note: http.post will only accept objets not strings
    // HL: anything passed into the jade file angular function will appear in req or
    // You can use $scope since all objects created in jade will also be in thier
    $scope.testAuth = function(req) {
      console.log('controller');
      // Have to convert object to string since post require objects
      $scope.objectify = {
        searchString: $scope.test
      };

      $http.post('/api/search/regex', $scope.objectify);

    };

    $scope.testAuth2 = function() {
      console.log('testAuth2');
      $http.post('/api/users/');

    };

    $scope.testAuth3 = function() {
      console.log('testAuth2');
      $scope.hello = {
        name: "Boaz"
      };
      $http.post('/api/users/test', $scope.hello);

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
