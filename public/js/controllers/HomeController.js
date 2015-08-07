(function() {
	var app = angular.module('homeController', []);

	app.controller('HomeController', [ '$scope', function($scope) {
		this.isSearching = false;
		$scope.searchtext;

		$scope.search = function(searchbox) {
			if (searchbox.length > 0){
				this.isSearching = true;
			
				$scope.searchtext = searchbox;
				$scope.searchbox = '';
			}
		}

		$scope.searching = function() {
			if (this.isSearching == true)
				return true;
			else
				return false;
		}
		$scope.stopSearching = function() {
			this.isSearching = false;
		}
		
	} ]);

})();