'use strict';
angular.module('app', ['ngRoute'])
		// .controller('TemplateCtrl', ['$scope', '$http', function($scope, $http){
		// 	 $http.get('data-template.json').success(function(data) {
		//       $scope.templates = data;
		//     });
		// }])
		// .controller('TemplateDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		// 	  $http.get('data-template/'+ $routeParams.templateId + '.json').success(function(data){
		// 	  	$scope.template = data;
		// 	  });
		// }])
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
	