/**
 * New node file
 */

var app = angular.module('app');

app.filter('FilterHistory', function() {
	var today = new Date();
	return function(item) {
		return new Date(item.endTimeDate) < today;
		
//		return list.filter(function(item) {
//			return item.endTimeDate < today;
//		});
	}
});

