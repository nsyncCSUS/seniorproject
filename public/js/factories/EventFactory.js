(function() {

    var app = angular.module('eventFactory', []);

    /**
     * Factory class for Event objects
     */
    app.factory('EventFactory', ['$http',function($http) {

        var factory = {
            // Note: parameters in post have to be an object
            // Also name in search.js route uses searchString as name
            getAllEvents: function() {
                return $http.get('/api/search/getallevents');
            },

            getAEventByID: function(searchValue){
                return $http.get('/api/search/getaeventbyID/'+searchValue);
            },

            getAEventByName: function(searchValue){
                return $http.get('/api/search/getaeventbyname/'+searchValue);
            }

        };



        return factory;

    }]);
})();
