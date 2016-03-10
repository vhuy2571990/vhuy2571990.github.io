'use strict';
angular.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $locationProvider, $stateProvider){
			$locationProvider.html5Mode(true);

			$stateProvider.state('templates', {
				url:'/templates',
				templateUrl: 'partials/list-template.html',
				controller: function($scope){

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
	