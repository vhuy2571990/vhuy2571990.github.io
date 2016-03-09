'use strict';
angular.module('app', ['ngRoute'])
		.controller('TemplateCtrl', ['$scope', '$http', function($scope, $http){
			 $http.get('vhuy2571990.github.io/data-template.json').success(function(data) {
		      $scope.templates = data;
		    });
		}])
		.controller('TemplateDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
			  $http.get('data-template/'+ $routeParams.templateId + '.json').success(function(data){
			  	$scope.template = data;
			  });
		}])
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
			$locationProvider.html5Mode(true);

			$routeProvider.when('/templates', {
				templateUrl: 'vhuy2571990.github.io/partials/list-template.html',
				controller: 'TemplateCtrl'
			}).
			when('/templates/:templateId', {
				templateUrl: 'vhuy2571990.github.io/partials/template-detail.html',
				controller: 'TemplateDetailCtrl'
			}).
			otherwise({
				redirectTo: '/templates'
			});	 
		}]);
	