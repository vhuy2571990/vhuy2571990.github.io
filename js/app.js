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
			.state('templatedetail', function(){
				url:'/templates/:tplId',
				templateUrl: 'partials/tempalate-detail.html',
				controller: function($scope, $http, $stateParams){
					$http.get('data-template/'+$stateParams.tplId+'.json').then(function(response){
						$scope.templatesdetail = response.data.details;
					});
				}
			});
			
			$urlRouterProvider.otherwise('/templates');	 
		});
	