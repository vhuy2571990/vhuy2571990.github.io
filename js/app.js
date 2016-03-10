'use strict';
angular.module('app', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider.when('/templates', {
				templateUrl: '/partials/list-template.html',
				controller: 'TemplateCtrl'
			}).
			when('/templates/:templateId', {
				templateUrl: '/partials/template-detail.html',
				controller: 'TemplateDetailCtrl'
			}).
			otherwise({
				redirectTo: '/templates'
			});	 
		}]);
	