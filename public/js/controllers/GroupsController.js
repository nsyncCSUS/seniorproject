(function() {
	var app = angular.module('groupsController', [ 'groupService', 'groupFactory' ]);

	app.controller('GroupsController', [ '$scope', '$routeParams', '$window', 'GroupService', 'GroupFactory', function($scope, $routeParams, $window, GroupService, GroupFactory) {

		/***************************************************************************
		 * Variables (includes ones from scope too)
		 **************************************************************************/
		$scope.groupId = $routeParams.groupId;
		
		$scope.isEditing = false;
		$scope.currentDate = new Date();
		
		//$scope.group = GroupService.getGroup($routeParams.groupId);
    $scope.group = {};
    $http.get('/groups/data').success(function(response) {
        $scope.group = response.params.group; 
    });

		/*
		 * Opens an external link
		 */
		$scope.goTo = function(url) {
			if (url.indexOf("//") > -1)
				$window.open(url, '_blank');
			else{
				var validURL = "//" + url;
				$window.open(validURL, '_blank');
			}
				
		}
		
		/*
		 * Used to check if a social media object exists
		 */
		$scope.checkIfHas = function(type) {
			switch(type){
			case "googlePlus":
				if ($scope.group.googlePlusURL != null && $scope.group.googlePlusURL.length > 0)
					return true;
				break;
			case "facebook":
				if ($scope.group.facebookURL != null && $scope.group.facebookURL.length > 0)
					return true;
				break;
			case "twitter":
				if ($scope.group.twitterURL != null && $scope.group.twitterURL.length > 0)
					return true;
				break;
			case "linkedIn":
				if ($scope.group.linkedInURL != null && $scope.group.linkedInURL.length > 0)
					return true;
				break;
			case "website":
				if ($scope.group.personalWebsiteURL != null && $scope.group.personalWebsiteURL.length > 0)
					return true;
				break;
			}
			
			return false;
		}

		/***********************************************************************
		 * Editing Functions
		 **********************************************************************/
		$scope.getIsEditing = function() {
			if ($scope.isEditing === true)
				return true;
			else
				return false;
		}
		
		$scope.enableEdit = function() {
			$scope.isEditing = true;
			
			// Backup contents on page
			$scope.backupGroup = {};
			angular.copy($scope.group, $scope.backupGroup);
		}

		$scope.cancelEdit = function() {
			$scope.isEditing = false;
			
			// Restore contents on page
			angular.copy($scope.backupGroup, $scope.group);
			$scope.backupGroup = {};
		}

		$scope.submitEdit = function() {
			$scope.isEditing = false;
			$scope.backupGroup = {};
			// Send changes to server
			
			// Keep changes made
		}
		
		/***************************************************************************
		 * Admin Testing
		 **************************************************************************/
		$scope.isAdmin = false;
		$scope.toggleAdmin = function() {
			$scope.isAdmin = !$scope.isAdmin;
		}
		
	} ]);

})();

/*
	id : String,
	groupName : String,
	picture : String,
	creationDate : String,
	city : String,
	state : String,
	zipCode : Number,
	description : String,
	googlePlusURL : String,
	facebookURL : String,
	linkInURL : String,
	twitterURL: String,
	personalWebsiteURL: String,
	eventList:	{
		id : [String]
	},
	organizerList:	{
		id :  [String]
	},
	subscriptionList:{
		id : [String]
	},
	interest: 	{
		type: [String]
	}
*/
