'use strict';
angular.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $locationProvider, $stateProvider){
			$locationProvider.html5Mode(true);

			$stateProvider.state('templates', {
				url : '/templates',
				templateUrl : 'partials/list-template.html',
				controller : function($scope, $http){
					$http.get('data-template.json').then(function(response){
						$scope.templates = response.data;
					});
				}
			})
			.state('templatedetail', {
				url : '/templates/:tplId',
				templateUrl : 'partials/template-detail.html',
				controller: function($scope, $http, $stateParams){
					var stateParams = $stateParams.tplId.replace(/\s+/g,'-').toLowerCase();
					console.log(stateParams);
					$http.get('data-template/'+stateParams+'.json').then(function(response){
						$scope.templatesdetail = response.data.details;
					});
				}
			});

			$urlRouterProvider.otherwise('/templates');	 
		});
	