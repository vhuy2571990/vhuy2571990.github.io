'use strict';
angular.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $locationProvider, $stateProvider){
			$locationProvider.html5Mode(true);

			$stateProvider.state('/templates', {
				templateUrl: 'partials/list-template.html',
				controller: 'TemplateCtrl'
			}).
			state('/templates/:templateId', {
				templateUrl: 'partials/template-detail.html',
				controller: 'TemplateDetailCtrl'
			}).
			$urlRouterProvider('/templates');	 
		});
	