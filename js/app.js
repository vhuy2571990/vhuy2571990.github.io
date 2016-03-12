'use strict';
angular.module('app', ['ui.router'])
		.config(function($urlRouterProvider, $locationProvider, $stateProvider, $urlMatcherFactoryProvider){
			$locationProvider.html5Mode(true);
			var templateUrlType = {
				encode: function(str) { return str && str.replace(/ /g, "-");},
				decode: function(str) { return str && str.replace(/-/g, " ");},
				is: angular.isString,
				pattern: /[^/]+/
			}
			$urlMatcherFactoryProvider.type('templateUrl', templateUrlType);
			$stateProvider
			.state('templates', {
				url : '/templates',
				templateUrl : 'partials/list-template.html',
				controller : function($scope, $http){
					$http.get('data-template.json').then(function(response){
						$scope.templates = response.data;
					});
				}
			})
			.state('templatedetail', {
				url : '/templates/{tplId:templateUrl}',
				templateUrl : 'partials/template-detail.html',
				controller: function($scope, $http, $stateParams){
					var stateParams = $stateParams.tplId.replace(/\s+/g,'-').toLowerCase();
					console.log(stateParams);
					$http.get('data-template/'+stateParams+'.json').then(function(response){
						$scope.templatesdetail = response.data.details;
					});
				}
			});

			$urlRouterProvider.otherwise('/');	 
		});
angular.module('app').directive('leftNavbar', function(){
	return {
		restrict : 'E',
		templateUrl: 'partials/navbar.html',
		controllerAs: 'leftNavBar',
		controller: function($scope){
				$scope.navbar = [
							{
								"name": "Home",
								"icon": "icon-home",
								"ui-sref": "templates"
							},{
								"name": "Blog",
								"icon": "icon-blog",
								"ui-sref" : "blog"
							},{
								"name": "About",
								"icon": "icon-about",
								"ui-sref": "about"
							}
						]
		}
	}
});