
$(function() {
	/*show/hide login*/
	var buttonLogin = $('.ch-btn-user-panel');
	var boxLogin = $('.ch-box-login-drop-down');
	var areaLogin = $('.ch-login-form-panel');
	boxLogin.hide();
	buttonLogin.removeAttr('href');
	buttonLogin.click(function(login) {
		login.stopPropagation();
		boxLogin.toggle();
		if ($(this).hasClass("ch-activo")) {
			$(this).removeClass("ch-activo");
		}else{			
			$(this).addClass("ch-activo");
			boxShowMore.hide();
			buttonShowMore.removeClass('ch-activo');
			boxSuper1.hide();
			buttonSuper1.removeClass('ch-activo');
			boxSuper2.hide();
			buttonSuper2.removeClass('ch-activo');
			boxSuper3.hide();
			buttonSuper3.removeClass('ch-activo');
			boxSuper4.hide();
			buttonSuper4.removeClass('ch-activo');
			boxSuper5.hide();
			buttonSuper5.removeClass('ch-activo');
		}
	});
	areaLogin.mouseup(function() { 
		return false;
	});

	/*Ver mas*/
	var buttonShowMore = $('.ch-show-more-btn');
	var boxShowMore= $('.ch-show-more-box');
	var areaShowMore = $('.ch-login-form-panel');
	boxShowMore.hide();
	buttonShowMore.removeAttr('href');
	buttonShowMore.click(function(login) {
		login.stopPropagation();
		boxShowMore.toggle();
		if ($(this).hasClass("ch-activo")) {
			$(this).removeClass("ch-activo");
		}else{			
			$(this).addClass("ch-activo");
			boxLogin.hide();
			buttonLogin.removeClass('ch-activo');
			boxSuper1.hide();
			buttonSuper1.removeClass('ch-activo');
			boxSuper2.hide();
			buttonSuper2.removeClass('ch-activo');
			boxSuper3.hide();
			buttonSuper3.removeClass('ch-activo');
			boxSuper4.hide();
			buttonSuper4.removeClass('ch-activo');
			boxSuper5.hide();
			buttonSuper5.removeClass('ch-activo');
		}
	});
	areaShowMore.mouseup(function() { 
		return false;
	});

	/*SAPERMENIU*/
	var buttonSuper1 = $('.ch-megamenu-btn1');
	var boxSuper1= $('.ch-megamenu-box1');
	var areaSuper1 = $('.ch-megamenu-box-area');
	boxSuper1.hide();
	buttonSuper1.removeAttr('href');
	buttonSuper1.click(function(login) {
		login.stopPropagation();
		boxSuper1.toggle();
		if ($(this).hasClass("ch-activo")) {
			$(this).removeClass("ch-activo");
		}else{			
			$(this).addClass("ch-activo");
			boxLogin.hide();
			buttonLogin.removeClass('ch-activo');
			boxShowMore.hide();
			buttonShowMore.removeClass('ch-activo');
			boxSuper2.hide();
			buttonSuper2.removeClass('ch-activo');
			boxSuper3.hide();
			buttonSuper3.removeClass('ch-activo');
			boxSuper4.hide();
			buttonSuper4.removeClass('ch-activo');
			boxSuper5.hide();
			buttonSuper5.removeClass('ch-activo');
		}
	});
	areaSuper1.mouseup(function() { 
		return false;
	});

	/**/
	var buttonSuper2 = $('.ch-megamenu-btn2');
	var boxSuper2= $('.ch-megamenu-box2');
	boxSuper2.hide();
	buttonSuper2.removeAttr('href');
	buttonSuper2.click(function(login) {
		login.stopPropagation();
		boxSuper2.toggle();
		if ($(this).hasClass("ch-activo")) {
			$(this).removeClass("ch-activo");
		}else{			
			$(this).addClass("ch-activo");
			boxLogin.hide();
			buttonLogin.removeClass('ch-activo');
			boxShowMore.hide();
			buttonShowMore.removeClass('ch-activo');
			boxSuper1.hide();
			buttonSuper1.removeClass('ch-activo');
			boxSuper3.hide();
			buttonSuper3.removeClass('ch-activo');
			boxSuper4.hide();
			buttonSuper4.removeClass('ch-activo');
			boxSuper5.hide();
			buttonSuper5.removeClass('ch-activo');
		}
	});

	/**/
	var buttonSuper3 = $('.ch-megamenu-btn3');
	var boxSuper3= $('.ch-megamenu-box3');
	boxSuper3.hide();
	buttonSuper3.removeAttr('href');
	buttonSuper3.click(function(login) {
		login.stopPropagation();
		boxSuper3.toggle();
		if ($(this).hasClass("ch-activo")) {
			$(this).removeClass("ch-activo");
		}else{			
			$(this).addClass("ch-activo");
			boxLogin.hide();
			buttonLogin.removeClass('ch-activo');
			boxShowMore.hide();
			buttonShowMore.removeClass('ch-activo');
			boxSuper1.hide();
			buttonSuper1.removeClass('ch-activo');
			boxSuper2.hide();
			buttonSuper2.removeClass('ch-activo');
			boxSuper4.hide();
			buttonSuper4.removeClass('ch-activo');
			boxSuper5.hide();
			buttonSuper5.removeClass('ch-activo');
		}
	});
	/**/
	var buttonSuper4 = $('.ch-megamenu-btn4');
	var boxSuper4= $('.ch-megamenu-box4');
	boxSuper4.hide();
	buttonSuper4.removeAttr('href');
	buttonSuper4.click(function(login) {
		login.stopPropagation();
		boxSuper4.toggle();
		if ($(this).hasClass("ch-activo")) {
			$(this).removeClass("ch-activo");
		}else{			
			$(this).addClass("ch-activo");
			boxLogin.hide();
			buttonLogin.removeClass('ch-activo');
			boxShowMore.hide();
			buttonShowMore.removeClass('ch-activo');
			boxSuper1.hide();
			buttonSuper1.removeClass('ch-activo');
			boxSuper2.hide();
			buttonSuper2.removeClass('ch-activo');
			boxSuper3.hide();
			buttonSuper3.removeClass('ch-activo');
			boxSuper5.hide();
			buttonSuper5.removeClass('ch-activo');
		}
	});
	/**/
	var buttonSuper5 = $('.ch-megamenu-btn5');
	var boxSuper5= $('.ch-megamenu-box5');
	boxSuper5.hide();
	buttonSuper5.removeAttr('href');
	buttonSuper5.click(function(login) {
		login.stopPropagation();
		boxSuper5.toggle();
		if ($(this).hasClass("ch-activo")) {
			$(this).removeClass("ch-activo");
		}else{			
			$(this).addClass("ch-activo");
			boxLogin.hide();
			buttonLogin.removeClass('ch-activo');
			boxShowMore.hide();
			buttonShowMore.removeClass('ch-activo');
			boxSuper1.hide();
			buttonSuper1.removeClass('ch-activo');
			boxSuper2.hide();
			buttonSuper2.removeClass('ch-activo');
			boxSuper3.hide();
			buttonSuper3.removeClass('ch-activo');
			boxSuper4.hide();
			buttonSuper4.removeClass('ch-activo');
		}
	});
	/**/
	


	$('.ch-megamenu-accordion').click(function(ev) {
		$(this).find('>ul').slideToggle().css('display','block').end().siblings().find('ul').slideUp();
		$(this).find('>span').toggleClass('ch-megamenu-accordion-less').end().siblings().find('>span').removeClass('megamenu-accordion-less');
		ev.stopPropagation();		
	});

	
!function ($) {
	$(document)
		.on('click.dropdown.data-api touchstart.dropdown.data-api', clearBoxes)
		.on('click.dropdown touchstart.dropdown.data-api', '.ch-btn-user-panel', function (e) { 
			e.stopPropagation() 
			
		})
		.on('click.dropdown touchstart.dropdown.data-api', '.ch-box-login-drop-down', function (e) { e.stopPropagation() })

		.on('click.dropdown touchstart.dropdown.data-api', '.ch-show-more-btn', function (e) { 
			e.stopPropagation() 

		})
		.on('click.dropdown touchstart.dropdown.data-api', '.ch-show-more-box', function (e) { e.stopPropagation() })

		.on('click.dropdown touchstart.dropdown.data-api', '.ch-megamenu-btn1', function (e) { e.stopPropagation() })
		.on('click.dropdown touchstart.dropdown.data-api', '.ch-megamenu-box-area', function (e) { e.stopPropagation() })


	function clearBoxes (){
		boxLogin.hide();
		buttonLogin.removeClass("ch-activo");

		boxShowMore.hide();
		buttonShowMore.removeClass("ch-activo");

		boxSuper1.hide();
		buttonSuper1.removeClass("ch-activo");

		boxSuper2.hide();
		buttonSuper2.removeClass("ch-activo");

		boxSuper3.hide();
		buttonSuper3.removeClass("ch-activo");

		boxSuper4.hide();
		buttonSuper4.removeClass("ch-activo");

		boxSuper5.hide();
		buttonSuper5.removeClass("ch-activo");
	}
}(window.jQuery);

});
