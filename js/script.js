(function(){
	'use strict';
	$('[data-toggle="popover"]').popover({
			    container: 'body'
	});

	$(window).load(function(){
		$('body').attr('data-ajax-transitions', false);
		$('#ajax-loading-screen').hide();
		//progress bar
		setTimeout(function(){
			$('.progress').each(function(){
				var _this = $(this);
				var per = _this.attr('value');
				var cur_per = 0;
				var progress = setInterval(function(){
					if (cur_per >= per){
						clearInterval(progress);
					}else{
						cur_per += 1;
						_this.attr('value', cur_per);
					}
				}, 30)
			});
		}, 300);
	});
})();

var app = angular.module('app', []);

app.controller('infoCtrl', function($scope, $document){
	$scope.listOpt = [
		{name: 'Blog'},
		{name: 'Shop / Ecommerce'}
	];
	
	var ele = $('#avatar');
	var tween = TweenLite.to(ele, 1, {scaleX: 1.5, scaleY:1.5, ease:Power1.easeInOut, y: 0});

	$document.bind('click', function(e){
		if(!$('.vixs-2').is(angular.element(e.target))
			&& $('.vixs-2 ').has(e.target).length === 0){
			$scope.$apply(function(){
				$scope.showOpt = false;
			});
		}
	});

	$scope.showOpt = false;
	$scope.toggleShowOpt = function(){
		$scope.showOpt = !$scope.showOpt;
	};

	$scope.dataWorkexperience = [
		{
			company: 'Gianty Co.Ltd',
			time: '2 years until now',
			position: 'Front-end Developers',
			works: [
				{content: 'Do Intranet Social Network Website for company, help improve UI/UX and developed main company website gnt.co.jp.'},
				{content: 'Created and maintained the front-end standards document and oversaw production of Javascript, HTML, and CSS'},
				{content: 'Created and implemented a custom CSS grid system, with CSS media queries for mobile responsiveness.'},
				{content: 'Fixed front end bugs (HTML, CSS, Javascript errors (JQUERY))'},
				{content: 'Write Hybird App Portal Internal Human manager like check in out, Absence request..., fix bug app.'},
				{content: 'Experience with Angular 1 & 2 , Ionic 1 & 2 Tweenlite(TweenLite is an extremely fast, lightweight, and flexible animation tool that serves as the foundation of the GreenSock Animation Platform)'}
			]
		}
	]
});