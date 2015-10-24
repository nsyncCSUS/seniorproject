(function() {

    var app = angular.module('groupFactory', []);

    app.factory('GroupFactory', ['$http',function($http) {

        var factory = {
            // Note: parameters in post have to be an object
            // Also name in search.js route uses searchString as name
            getAllGroups: function() {
                return $http.get('/api/search/getallgroups');
            },

            getAGroupByID: function(searchValue){
                return $http.get('/api/search/getagroupbyID/'+searchValue);
            },

            getAGroupByName: function(searchValue){
                return $http.get('/api/search/getagroupbyname/'+searchValue);
            }



        };

        return factory;
    }]);
})();
