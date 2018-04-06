(function(){
	'use strict';
	// google api key: AIzaSyDduW921vsA0NTh6tI85Cg06VCN_Ll7st8
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

	$(document).ready(function(){
		var _innerHeight1 = $('.timeline-group.first').innerHeight(),
		    _innerHeight2 = $('.timeline-group.second').innerHeight();
		TweenLite.fromTo("#accordion .panel.first", 2, {css: {opacity:0}}, {css: {opacity: 1}, ease: Sine});
		TweenLite.fromTo(".timeline-group.first", 1, {css: {height: "0px", overflow: "hidden"}}, {css: {height: _innerHeight1, overflow: "visible"}, delay: 1, ease: Sine});
		TweenLite.fromTo(".timeline-group.second", 1, {css: {height: "0px", overflow: "hidden"}}, {css: {height: _innerHeight2, overflow: "visible"}, delay: 3, ease: Elastic});
		TweenLite.to(".timeline-group.first .item-content", 1, {opacity: 1, delay: 2, ease: Power1.easeInOut});
		TweenLite.to(".timeline-group.second .item-content", 1, {opacity: 1, delay: 5, ease: Power1.easeInOut});
		TweenLite.to("#disqus_thread", 1, {opacity: 1, delay: 6, ease: Power2.easeInOut});
	});

	$(window).resize(function() {
			$(".timeline-group.first").css("height", "auto");
			$(".timeline-group.second").css("height", "auto");
	});

})();

var app = angular.module('app', []);

app.controller('infoCtrl', function($scope){
	$scope.listOpt = [
		{name: 'Blog'},
		{name: 'Shop / Ecommerce'}
	];

	var ele = $('#avatar');
	var tween = TweenLite.to(ele, 1, {scaleX: 1.2, scaleY:1.2, ease:Power1.easeInOut, y: 0});

	TweenLite.to(".header-timeline.first", 2, {opacity: 1, ease:Power1.easeInOut});
	TweenLite.to(".header-timeline.second", 1, {opacity: 1, ease:Power1.easeInOut, delay: 2});
	TweenLite.to(".header-timeline.third", 1, {opacity: 1, ease:Power1.easeInOut, delay: 4});

	$scope.showOpt = false;
	$scope.toggleShowOpt = function(){
		$scope.showOpt = !$scope.showOpt;
	}

	$scope.openModal = function() {
			$('.modal').addClass('is-active');
	}

	$scope.closeModal = function() {
		$('.modal').removeClass('is-active');
	}

	$scope.dataWorkexperience = [
		{
			company: 'Gianty Co.Ltd',
			time: 'July 2015',
			years: '2015',
			works: [
				{content: '- Do Intranet Social Network Website for company, help improve UI/UX and developed main company website gnt.co.jp.'},
				{content: '- Created and maintained the front-end standards document and oversaw production of Javascript, HTML, and CSS.'},
				{content: '- Created and implemented a custom CSS grid system, with CSS media queries for mobile responsiveness.'},
				{content: '- Fixed front end bugs.'},
				{content: '- Write Hybird App Portal Internal Human manager like check in out, Absence request..., fix bug app.'},
				{content: '- Experience with Angular , Ionic, Tweenlite.'}
			]
		},
		{
			company: 'Isobar Ecommerce Expert',
			time: 'March 2017',
			years: '2017',
			works: [
				{content: '- Front-end developer for Magento platform theme UI.'},
				{content: '- UI/UX developer, fix bug, HTML, CSS, Javascript.'},
				{content: '- Fix FrontEnd Bugs, JavaScript, HTML, CSS.'},
				{content: '- Research new technical about FrontEnd.'}
			],
			process: true
		}
	]

	$scope.currentInfo = {
		helloText: `Hi, I'm a FrontEnd Developer.`,
		address: '666/47 (3/2 Street, Q.10, tp.HCM)',
		mail: 'vhuy271990@gmail.com',
		phone: '01223636224',
		fb: 'https://www.facebook.com/nolove2571990',
		objective: 'Executed and contributed to front-end web development projects, with an emphasis on front end features, browser manipulation, and cross-browser compatibility.'
	}

	$scope.skills = [{name: 'Html', image: 'html.png', href: 'http://w3school.info'}, {name: 'Css', image: 'css3.png', href: 'http://bulma.io'}, {name: 'Javascript', image: 'js.png', href: 'https://www.javascript.com/'}, {name: 'Angular', image: 'angular.png', href: 'http://angular.io'}, {name: 'Ionic', image: 'ionic.jpg', href: 'https://ionicframework.com/'}]
	$scope.listProject = [
		{link: './pages/full-page/gnt-demo/index.html', name: 'Gianty Company PR site', image: './pages/full-page-gnt.png'},
		{link: './pages/ecommerce/deer/deer.html', name: 'Deer Shopping Demo', image: './pages/deer-shop.jpg'}
	]
});
