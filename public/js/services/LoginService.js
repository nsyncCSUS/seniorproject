// variables for client side authentication 
(function() {
	var app = angular.module('loginService', []);

	app.service('LoginService', [ function() {
		var userInfo = {
    isLogged: false,
  };
  return userInfo;
	} ]);

})();
