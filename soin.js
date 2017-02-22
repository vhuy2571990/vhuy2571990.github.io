var owl = $('.owl-carousel_normal');
owl.owlCarousel({
  margin: 30,
  loop: true,
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

$('.owl-carousel-profit').owlCarousel({
	items: 4,
	loop: false,
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


$(document).ready(function(){
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

  $('#filter_class .button.is-info').on('click', function(){
    $('.sub_select').toggleClass('show');
  });
});
