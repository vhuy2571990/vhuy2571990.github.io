(function(){
	var myMod = angular.module('myMod', ['ngRoute']);
	myMod.component('home', {
	  template: '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
	  bindings: {
	    user: '<'
	  }
	});
	myMod.config(function($routeProvider) {
	  $routeProvider.when('/', {
	    template: '<home user="$resolve.user.nam"></home>',
	    resolve: {
	      user: function($http) { return $http.get('/data.json'); }
	    }
	  });
	});
})();
