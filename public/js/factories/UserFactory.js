(function() {

  var app = angular.module('userFactory', []);

  app.factory('UserFactory', ['$http', function($http) {

    var factory = {
      // Note: parameters in post have to be an object
      // Also name in search.js route uses searchString as name
      getAllUsers: function() {
        return $http.get('/api/search/getallusers');
      },

      getAUserByID: function(searchValue){
          return $http.get('/api/search/getauserbyID/'+searchValue);
      },

      getAUserByName: function(searchValue){
        console.log('inside getAUserByName');
        return $http.get('/api/search/getauserbyname/'+searchValue);
      }

    };



    return factory;
  }]);
})();
