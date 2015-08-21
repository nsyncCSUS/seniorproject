(function() {
	var app = angular.module('groupsController', [ 'groupService', 'groupFactory' ]);

	app.controller('GroupsController', [ '$scope', '$routeParams', 'GroupService', 'GroupFactory', function($scope, $routeParams, GroupService, GroupFactory) {
		
		$scope.groupId = $routeParams.groupId;

	} ]);

})();