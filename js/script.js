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