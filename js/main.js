window.$ = jQuery;

var win = $(window);
var doc = $(document);
var urlHash = window.location.hash;

var attachMobileMenu = function() {
	var header = $('#header');
	if (window.matchMedia('(max-width: 899px)').matches) {
		$('#main-menu > ul').hide().removeAttr('style');
		$('#main-menu > ul').removeClass('opened');
		$('#main-menu-toggle').removeClass('opened');
		$('#main-menu-toggle').unbind('click');
		$('#main-menu a').unbind('click');
		header.unbind('click');
		$('#main-menu-toggle').on('click', function(e) {
			e.stopPropagation();
			var _this = $(this);
			_this.toggleClass('opened');
			$('#main-menu > ul').toggleClass('opened');
			$('#main-menu > ul').slideToggle();
			$('#main-menu a').on('click', function() {
				_this.removeClass('opened');
				$('#main-menu > ul').removeClass('opened');
				$('#main-menu > ul').slideUp();
			});
		});
		header.on('click', function() {
			if($('#main-menu-toggle').hasClass('opened'))
				$('#main-menu-toggle').click();
		});
	} else {
		$('#main-menu > ul').show().css('display', 'flex');
	}
}
	
function validate_text(myform) {
	if (myform.names.value == "" || myform.names.value == null || myform.names.value.length >= 100) {
		alert("Въведете Име.");
		myform.names.focus();
		return false;
	}
	if (myform.email.value == "" || myform.email.value == null || myform.email.value.length >= 70) {
		alert("Въведете Е-мейл.");
		myform.email.focus();
		return false;
	}
	if (myform.address.value == "" || myform.address.value == null || myform.address.value.length >= 100) {
		alert("Въведете Адрес.");
		myform.address.focus();
		return false;
	}
	if (myform.city.value == "" || myform.city.value == null || myform.city.value.length >= 70) {
		alert("Въведете Град.");
		myform.city.focus();
		return false;
	}

	if (myform.telephone.value == "" || myform.telephone.value == null || myform.telephone.value.length >= 100) {
		alert("Въведете Телефон.");
		myform.telephone.focus();
		return false;
	}

	if (myform.txtNumber.value == "" || myform.txtNumber.value == null || myform.txtNumber.value.length >= 6) {
		alert("Въведете Код.");
		myform.txtNumber.focus();
		return false;
	}

	if (myform.message.value == "" || myform.message.value == null || myform.message.value.length >= 1000) {
		alert("Въведете Съобщение.");
		myform.message.focus();
		return false;
	}
	return true;
}

function okAlpha(myform) {
	var regex = /^[a-zA-Zа-яА-Я ]+$/;
	if (regex.test(myform.names.value) == false) {
		alert("Поле Имена трябва да съдържа само буквени символи!");
		myform.name.focus();
		return false;
	}
	if (regex.test(myform.city.value) == false) {
		alert("Поле Град трябва да съдържа само буквени символи!");
		myform.city.focus();
		return false;
	}
}
function okNumber(myform) {
	var regex = /^[0-9 ]+$/;
	if (regex.test(myform.telephone.value) == false) {
		alert("Поле Телефон трябва да съдържа само числови символи!");
		myform.telephone.focus();
		return false;
	}
	if (regex.test(myform.txtNumber.value) == false) {
		alert("Поле Код трябва да съдържа само числови символи!");
		myform.txtNumber.focus();
		return false;
	}
	return true;
}

function ok_Email(email) {
	var regex = /^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/;
	if (regex.test(email.value)) {
		return true;
	} else {
		return false;
	}
}

function ok_Form(myform) {
	if (validate_text(myform) == false) {
		return false;
	}
	if (okAlpha(myform) == false) {
		return false;
	}
	if (ok_Email(myform.email) == false) {
		alert("Въведете валиден Е-мейл адрес");
		myform.email.focus();
		myform.email.select();
		return false;
	}
	if (okNumber(myform) == false) {
		return false;
	}
	return true;
}


doc.ready(function() {

	attachMobileMenu();
	win.on('resize', function() {
		attachMobileMenu();
	});
	var body = $('body');
	var y = win.scrollTop();
	if (y > 0) {
		body.addClass('fixed');
	} else {
		body.removeClass('fixed');
	}
	win.on('scroll', function () {
		var y = $(this).scrollTop();
		if (y > 0) {
			body.addClass('fixed');
		} else {
			body.removeClass('fixed');
		}
	});  


	$('.window-open').on('click', function(e) {
		e.preventDefault();
		window.open( $(this).attr('href'), 'sharer', 'width=660,height=400' );
	});


    $('.bxslider-pager').bxSlider({
		speed: 700,
		slideMargin: 0,
		controls: 0,
		infiniteLoop: false,
		autoReload: true
	});

	$('.bxslider-arrows').each(function() {
		var slider = $(this);
		var nav = slider.next('.bxslider-arrows-nav').find('div');
		slider.bxSlider({
			speed: 500,
			pager: 0,
			mode: 'fade',
			nextSelector: nav,
			prevSelector: nav
		});
	});


	$('.fancybox-inline').fancybox({
		closeBtn	: 0,
		maxWidth	: 800,
		padding		: 0,
		margin		: [100, 20, 20, 20],
		helpers : {
			overlay : {
				css : {
					'background' : 'none'
				},
				locked: false
			}
		}
	});
	
});