(function() {
	var app = angular.module('groupService', []);

	app.service('GroupService', [ '$http', function($http) {
		
		this.getGroup = function(params, callback, error){
			var url = "/groups/data/" + params.groupId;
			$http.get(url).then(function(res) {
				console.log("Recieved " + res + ". For " + url + ". Group Name: " + res.data.name);
				callback(res);
			}, function(res) {
				error(res);
			});
		}
		
		this.saveGroup = function(params, callback, error) {
			var url = "/groups/data/" + params.groupId;
			$http.put(url, params.groupData).then(function(res) {
				console.log("Recieved " + res + ". For " + url + ". Saved: " + res.data.msg);
				callback(res);
			}, function(res) {
				error(res);
			});
		}
		
	} ]);

})();
