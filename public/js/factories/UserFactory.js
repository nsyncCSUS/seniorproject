(function() {

  var app = angular.module('userFactory', []);

  app.factory('UserFactory', ['$http','$window', function($http,window) {

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
      },

      getCurrentUserObject: function(){
          var userID = $window.sessionStorage.userInfo._id;
          return $http.get('/api/search/getauserbyID/'+userID);
      }
    };


    return factory;
  }]);
})();
