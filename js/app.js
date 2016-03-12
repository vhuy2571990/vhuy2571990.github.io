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
			}).
			state('templatedetail', {
				url: '/:id',
				templateUrl: 'partials/template-detail.html',
				controller: function($scope, $stateParams, $http){
					$http.get('data-template/'+$stateParams.id+'.json').then(function(response){
						$scope.templates = response.data.details;
					});
				}
			});

			$urlRouterProvider.otherwise('/templates');	 
		});
	