(function() {
    var app = angular.module('groupsController', ['groupService', 'groupFactory']);

    app.controller('GroupsController', ['$scope', '$routeParams', '$window', 'GroupService', 'GroupFactory', function($scope, $routeParams, $window, GroupService, GroupFactory) {

        /***************************************************************************
         * Variables (includes ones from scope too)
         **************************************************************************/
        $scope.groupId = $routeParams.groupId;

        $scope.isEditing = false;
        $scope.currentDate = new Date();

        $scope.group = {};
        $scope.savedSuccessMsg = {};

        // Gets the group data from server
        GroupService.getGroup({
            groupId: $routeParams.groupId
        }, function(res) {
            $scope.group = res.data;

            // Get Organizers by ID

            // Build an array for displaying organizers in a carousel
            buildOrganizers();
            // Build one for mobile view also
            buildOrganizersXS();

            // Get Subscribers by ID

        });

        /* Builds the organizers list to be compatible with row based bootstrap carousel (SM-MD-LG version)
         * group = {
         * 			organizers: [{1}, {2}, {3}, ...]
         * 			organizersBuilt: [
         * 							{ organizers: [ {1},{2},{3},{4} ] }, // $first
         * 							{ organizers: [ {5},{6},{7},{8} ] },
         * 							{ organizers: [ {9},{10},{11},{12} ] },
         * 							{ organizers: [ {13},{14},{15},{16} ] }
         * 							]
         * 			}
         */
        function buildOrganizers() {
            // Split into 4 x Y arrays
            var currentRow = 0;
            var currentIndex = 0;
            $scope.group.organizersBuilt = [{
                organizers: []
            }];
            angular.forEach($scope.group.organizers, function(organizer) {
                // Add new row if the row is filled
                if (currentIndex === 4) {
                    this.push({
                        organizers: []
                    });
                    currentRow++;
                    currentIndex = 0;
                    this[currentRow].organizers.push(organizer);
                    currentIndex++;
                } else {
                    this[currentRow].organizers.push(organizer);
                    currentIndex++;
                }
            }, $scope.group.organizersBuilt); // Used as "this" above
            //console.log($scope.group.organizersBuilt);
        };

        /* Builds the organizers list to be compatible with row based bootstrap carousel (XS version)
         * group = {
         * 			organizers: [{1}, {2}, {3}, ...]
         * 			organizersBuiltXS: [
         * 							{ organizers: [ {1},{2} ] }, // $first
         * 							{ organizers: [ {3},{4} ] },
         * 							{ organizers: [ {5},{6} ] },
         * 							{ organizers: [ {7},{8} ] }
         * 							]
         * 			}
         */
        function buildOrganizersXS() {
            // Split into 2 x Y arrays
            var currentRow = 0;
            var currentIndex = 0;
            $scope.group.organizersBuiltXS = [{
                organizers: []
            }];
            angular.forEach($scope.group.organizers, function(organizer) {
                // Add new row if the row is filled
                if (currentIndex === 2) {
                    this.push({
                        organizers: []
                    });
                    currentRow++;
                    currentIndex = 0;
                    this[currentRow].organizers.push(organizer);
                    currentIndex++;
                }
                // Push an organizer to current working row
                else {
                    this[currentRow].organizers.push(organizer);
                    currentIndex++;
                }
            }, $scope.group.organizersBuiltXS); // Used as "this" above
            //console.log($scope.group.organizersBuiltXS);
        };

        /*
         * Opens an external link
         */
        $scope.goTo = function(url) {
            if (url.indexOf("//") > -1)
                $window.open(url, '_blank');
            else {
                var validURL = "//" + url;
                $window.open(validURL, '_blank');
            }

        }

        /*
         * Used to check if a social media object exists
         */
        $scope.checkIfHas = function(type) {
            switch (type) {
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
         * Has Functions (for checks)
         **********************************************************************/
        /*
         * Checks if the gorup has a picture, the view will display a default
         * picture if no picture is found.
         */
        $scope.hasPicture = function(type, index) {
            switch (type) {
                case "group":
                    if ($scope.group.picture != null) {
                        if ($scope.group.picture.length > 0)
                            return true;
                        else
                            return false;
                    } else
                        return true;
                case "user":
                    if ($scope.subscribers != null) {
                        if ($scope.subscribers[index].picture != null) {
                            alert($scope.subscribers[index])
                            if ($scope.subscribers[index].picture.length > 0)
                                return true;
                            else
                                return false;
                        } else
                            return true;
                    }
                case "event":
                    if ($scope.events != null) {
                        if ($scope.events[index].picture != null) {
                            if ($scope.events[index].picture.length > 0)
                                return true;
                            else
                                return false;
                        } else
                            return true;
                    }
            }
        }

        /*
         * Checks if there are more than 1 upcoming events, the view will display
         * arrows to move across events if that is the case.
         */
        $scope.hasMultipleEvents = function() {
            if ($scope.group.events != null) {
                if ($scope.group.events.length >= 2)
                    return true;
                else
                    return false;
            } else
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
            GroupService.saveGroup({
                groupId: $routeParams.groupId,
                groupData: $scope.group
            }, function(res) {
                $scope.savedSuccessMsg = res.data.msg;
            });
            // Keep changes made
        }

        /***************************************************************************
         * Admin Testing
         **************************************************************************/
        $scope.isAdmin = false;
        $scope.toggleAdmin = function() {
            $scope.isAdmin = !$scope.isAdmin;
        }

    }]);

})();

/*
	info: {
		id : 				String,
		groupName : 		String,
		picture : 			String,
		creationDate : 		String,
			//city : 			String,
			//state : 			String,
			//zipCode : 		Number,
		description : 		String,
		googlePlusURL : 	String,
		facebookURL : 		String,
		linkInURL : 		String,
		twitterURL: 		String,
		personalWebsiteURL: String,
		events:			[{id: String}, {id: String}, ...],
		organizers:		[{id: String}, {id: String}, ...],
		subscribers:		[{id: String}, {id: String}, ...],
		interests: 	[{type: String}, {type: String}, ...]

	}
*/