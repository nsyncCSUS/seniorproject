(function() {
    var app = angular.module('createGroupService', []);

    app.service('CreateGroupService', ['$http', function($http) {

        this.createGroup = function(params, callback, error) {
            var url = "/groups";
            $http.post(url, params.groupData).then(function(res) {
                console.log("Recieved " + res + ". For " + url + ". Posted: " + res.data.msg);
                callback(res);
            }, function(res) {
                error(res);
            });
        }

    }]);

})();