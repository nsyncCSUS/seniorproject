(function() {
    var app = angular.module('homeFactory', []);

    /**
     * Factory class for Event objects
     */
    app.factory('HomeFactory', [function() {

        var factory = {};
        factory.searchText = {
            text: ""
        };
        factory.category = {
            users: true,
            groups: true,
            events: true
        };
        factory.interestFilters = {
            animals: false,
            education: false,
            environment: false,
            people: false,
            recreation: false,
            technology: false,
            youth: false
        };
        factory.userSearchResults = [];
        factory.groupSearchResults = [];
        factory.eventSearchResults = [];

        factory.setSearchResults = function(results) {
            factory.searchResults = results;
        }

        return factory;

    }]);

})();