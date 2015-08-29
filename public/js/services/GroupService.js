(function() {
	var app = angular.module('groupService', []);

	app.service('GroupService', [ '$http', function($http) {
		
		this.getGroup = function(params, callback, error){
			var url = "/groups/data/" + params.groupId;
			var group = {};
			$http.get(url).then(function(res) {
				console.log("recieved " + res + ". For " + url + ". Group Name: " + res.data.name);
				callback(res);
			}, function(res) {
				error(res);
			});
		}
		
	} ]);

})();
