var owl = $('.owl-carousel_normal');
owl.owlCarousel({
  margin: 30,
  loop: true,
  touchDrag: false,
  mouseDrag: false,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$('.owl-carousel_4item').owlCarousel({
  margin: 30,
  loop: true,
  nav: false,
  touchDrag: false,
  mouseDrag: false,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});

$('.owl-carousel-profit').owlCarousel({
	items: 4,
	loop: true,
	nav: true,
	navText: ['', ''],
	responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3
    },
    1400: {
    	items: 4
    }
  }
});

$("#owl-example").owlCarousel({
  items: 1,
  navigation : true, 
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: true,
    pagination: false,
    rewindSpeed: 500
});

$(document).ready(function(){
  //news html
  var heightMainImage = $('.main-news img').innerHeight();
  $('#special-news img').css({
    height: heightMainImage + 'px'
  });
  
	function openModal(ele){
		$(ele).addClass('is-active');
	}
	function closeModal(ele){
		if($(ele).length !== 0){
			$(ele).removeClass('is-active');
		}
	}
	var loginButton = $('.login-button'),
		registerButton = $('.register-button'),
		closeLogin = $('.close-login'),
		closeRegister = $('.close-register'),
		subMenu = $('.sub_menu a'),
		closeNoti = $('.close-noti');

	loginButton.on('click', function(){openModal('.modal-login')});
	registerButton.on('click', function(){openModal('.modal-register')});

	closeRegister.on('click', function(){closeModal('.modal-register')});
	closeLogin.on('click', function(){closeModal('.modal-login')});

	subMenu.on('click', function(){openModal('.modal-notification')});
	closeNoti.on('click', function(){closeModal('.modal-notification')});

  $(window).click(function(){
    $('.sub_select').removeClass('show');
  });

  $('#filter_class .button.is-info').on('click', function(e){
    e.stopPropagation();
    $('.sub_select').toggleClass('show');
  });

  $('#soin-header .nav-toggle').on('click', function(){
    $(this).toggleClass('is-active');
    $('#soin-header').find('.nav-menu').toggleClass('is-active');
  });

  $('.soin_register_stick').on('mouseenter', function(){
    $('.soin_register_child').addClass('animated bounceInUp');
  });

  $('.soin_register_stick').on('mouseleave', function(){
    $('.soin_register_child').removeClass('animated bounceInUp');
  });

  var heightDetailClass = $('.img-detail-class').find('img').innerHeight();
  $('.wrapper-detail-content').css({
    height: heightDetailClass + 'px'
  });
  

  $(".tabs_detail_class ul li").click(function(){
    $(".tabs_detail_class ul").find('li').removeClass('is-active');
    $(this).addClass('is-active');
    var data = $(this).find('a').attr('data-tab');
    if(data == '#gv'){
      $(".content-tabs").find('#kh').hide();
      $(".content-tabs").find('#gv').show();
    }else if(data == '#kh'){
      $(".content-tabs").find('#kh').show();
      $(".content-tabs").find('#gv').hide();
    }else{
      return false;
    }
  });

  $("body").on('mouseenter', '.hidden-layer .learn_after', function(){
      $(this).parent('.hidden-layer').find('.saved').addClass('animated bounceInUp');
  });

  $("body").on('mouseleave', '.hidden-layer .learn_after', function(){
      $(this).parent('.hidden-layer').find('.saved').addClass('animated bounceInUp');
  });

  var itemMemberWrapper = $('.list-connect-member').find('.item-member');
  itemMemberWrapper.each(function(){
    var widthItem = $(this).innerWidth();
    $(this).find('.img-member').css({
      height: widthItem + 'px',
      'top': -(widthItem/2) + 'px'
    });
    $(this).find('.info_wrapper').css({
        'margin-top': widthItem/2 + 'px'
    });
    $(this).parents('.columns').css({
        'margin-bottom': (widthItem/2) + 40 + 'px'
    });
  });

  $("#creat-account-link").click(function(){
    $('.modal-notification').removeClass('is-active');
    $(".modal-register").addClass('is-active');
  });

  $(window).resize(function(){
    var itemMemberWrapper = $('.list-connect-member').find('.item-member');
    itemMemberWrapper.each(function(){
      var widthItem = $(this).innerWidth();
      $(this).find('.img-member').css({
        height: widthItem + 'px',
        'top': -(widthItem/2) + 'px' 
      });
      $(this).find('.info_wrapper').css({
        'margin-top': widthItem/2 + 'px'
      });
    });
  });
});
