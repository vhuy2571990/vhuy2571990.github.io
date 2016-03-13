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
			.state('index', {
				url:'/',
				template:'<list-template></list-template>',
				templateUrl: 'index.html'
			})
			.state('templatedetail', {
				url : '/templates/{tplId:templateUrl}',
				template: '<template-detail></template-detail>',
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
								"_ref": "index"
							},{
								"name": "Blog",
								"icon": "icon-feed",
								"_ref" : "blog"
							},{
								"name": "About",
								"icon": "icon-emotsmile",
								"_ref": "about"
							}
						]
		}
	}
});
angular.module('app').directive('listTemplate', function(){
	return {
		restrict : 'E',
		templateUrl: 'partials/list-template.html',
		controllerAs: 'listTemplate',
		controller: function($scope, $http){
			$http.get('data-template.json').then(function(response){
				$scope.templates = response.data;
			});
		}
	}
});
angular.module('app').directive('templateDetail', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/template-detail.html',
		controllerAs: 'templateDetail',
		controller: function($scope, $http, $stateParams){
			$http.get('data-template/'+$stateParams.tplId+'/'+$stateParams.tplId+'.json').then(function(response){
				$scope.templatesObj = response.data.name;
			});
		}
	}
});
angular.module('app').controller("mainCtrl", function($scope){}).directive('toggle', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			 if (attrs.toggle=="tooltip"){
		        $(element).tooltip();
		      }
		      if (attrs.toggle=="popover"){
		        $(element).popover();
		      }
		}
	}
});