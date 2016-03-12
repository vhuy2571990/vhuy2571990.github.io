'use strict';
angular.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $locationProvider, $stateProvider){
			$locationProvider.html5Mode(true);

			$stateProvider.state('templates', {
				url:'/templates',
				template: '<template></template>'
			}).
			state('templateDetails', {
				url: '/templates/:templateId',
				template: '<template-details></template-details>'
			});

			$urlRouterProvider.otherwise('templates');	 
		});

angular.module('app').directive('template', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/list-template.html',
		controllerAs: 'listTemplate',
		controller: function($scope, $reactive){
			$reactive(this).attach($scope);

			this.newParty = {};
		}
	}
});
	