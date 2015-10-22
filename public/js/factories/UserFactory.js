(function() {

  var app = angular.module('userFactory', []);

  app.factory('UserFactory', ['$http', function($http) {

    var factory = {
      // Note: parameters in post have to be an object
      // Also name in search.js route uses searchString as name
      getAllUsers: function() {
        return $http.post('/api/search/getallusers');
      },

      getAUserByID: function(searchValue){
        return $http.post('/api/search/getauser',{searchString:searchValue});
      },

      getAUserByName: function(searchValue){
        return $http.post('/api/search/getauserbyname',{searchString:searchValue});
      }

    };



    return factory;
  }]);
})();
