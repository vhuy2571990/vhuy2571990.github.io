'use strict';
angular.module('app', ['ui.router'])
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, $stateProvider){
			$locationProvider.html5Mode(true);

			$routeProvider.state('/templates', {
				templateUrl: 'partials/list-template.html',
				controller: 'TemplateCtrl'
			}).
			state('/templates/:templateId', {
				templateUrl: 'partials/template-detail.html',
				controller: 'TemplateDetailCtrl'
			}).
			$urlRouterProvider('/templates');	 
		}]);
	