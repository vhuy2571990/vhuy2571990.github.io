'use strict';
angular.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $locationProvider, $stateProvider){
			$locationProvider.html5Mode(true);

			$stateProvider.state('templates', {
				url:'/templates',
				templateUrl: 'partials/list-template.html',
				controller: function($scope, $http){
					$http.get('data-template.json').then(function(response){
						$scope.templates = response.data;
					});
				}
			})
			$urlRouterProvider.otherwise('/templates');	 
		});
	