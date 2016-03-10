'use strict';
angular.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $locationProvider, $stateProvider){
			$locationProvider.html5Mode(true);

			$stateProvider.state('templates', {
				url:'/templates',
				templateUrl: 'partials/list-template.html',
				controller: function($scope, $http){
					$http.get('data-template.json').then(function(data){
						console.log(data);
						$scope.templates = data;
					});
				}
			}).
			state('templates.detail', {
				url: '/templates/:id',
				templateUrl: 'partials/template-detail.html',
				controller: function($scope, $stateParams){
				}
			});

			$urlRouterProvider.otherwise('templates');	 
		});
	