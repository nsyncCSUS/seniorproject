(function() {

  var app = angular.module('userFactory', []);

  app.factory('UserFactory', ['$http', function($http) {

    var factory = {
      userObject: function(searchWord) {
        return $http.post('/api/search/getallusers');

      }
    };

    return factory;
  }]);
})();
