(function() {
    var app = angular.module('createEventService', []);

    app.service('CreateEventService', [function() {
    	this.createEvent = function(params, callback, error) {
            var url = "/create/event";
            $http.post(url, params.eventData).then(function(res) {
                console.log("Recieved " + res + ". For " + url + ". Posted: " + res.data.msg);
                callback(res);
            }, function(res) {
                error(res);
            });
        }
    }]);

})();