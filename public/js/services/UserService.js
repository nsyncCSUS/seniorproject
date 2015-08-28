(function() {
	var app = angular.module('userService', []);

	app.service('UserService', [ '$http', function($http) {

      /**
       * Get users
       */
      this.get = function(params, callback, error) {
          var url = '/users'; 
          $http.get(url).then(function(response) {
              console.log(response); 
              callback(response); 
          }, function(response) {
              error(response); 
          }); 
      }; 

	} ]);

})();
