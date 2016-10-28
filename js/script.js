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

	var ele = $('.avatar');
	TweenLite.to(ele, 1, {scaleX: 1.5, scaleY:1.5, ease:Bounce.easeOut, y: 0});
})();

var app = angular.module('app', []);

app.controller('infoCtrl', function($scope, $document){
	$scope.listOpt = [
		{name: 'Blog'},
		{name: 'Shop / Ecommerce'}
	];

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
	}
});