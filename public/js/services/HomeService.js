(function() {
    var app = angular.module('homeService', []);

    app.service('HomeService', [ function() {
    	//interests: [{type: "animals"}, {type: "education"}, {type: "environment"}, {type: "people"}, {type: "recreation"}, {type: "technology"}, {type: "youth"}]
        this.getUserSearchResults = function() {
            var results = [];
            results.push({
                fname: "Anthony",
                lname: "Nguyen",
                age : 24,
                picture: "//placehold.it/300x300",
                interests: [{type: "technology"}]
            });
            return results;
        };
        this.getGroupSearchResults = function() {
            var results = [];
            results.push({
                gname : "NSync()",
                description: "Awesome senior project group!",
                picture: "//placehold.it/300x300",
                interests: [{type: "people"}, {type: "technology"}]
            });
            return results;
        };
        this.getEventSearchResults = function() {
            var results = [];
            results.push({
                ename : "Sponsor Meeting",
                gname: "NSync()",
                description: "Meeting with sponsor!",
                picture: "//placehold.it/300x300",
                startTimeDate: "7:00pm Jan 1, 2015",
                volunteerList: [{
                    fname: "Anthony",
                    lname: "Nguyen",
                    age : 24,
                    picture: "//placehold.it/300x300",
                    interests: [{type: "technology"}]
                }],
                maxVolunteers: 10,
                interests: [{type: "people"}, {type: "technology"}]
            });
            return results;
        };
        
        
    } ]);

})();
