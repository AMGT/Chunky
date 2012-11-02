//****** VIEJO MENU IZQUIERDO
// $(window).load(function(){
// 		$('#side-nav li').click(function(ev) {
// 			$(this).find('>ul').slideToggle().end().siblings().find('ul').slideUp();
// 			ev.stopPropagation();
// 		});
// });

// MOSTRAR FECHA 
function MostrarFecha()
{
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
	var f=new Date();
	var minutos = f.getMinutes();
	if(minutos < 10) { minutos = '0' + minutos; }
	document.write('<div class="date"><p>');
	document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + " - " + f.getHours() + ":" + minutos + " Hs");
	document.write('</p></div>');
}

// LOGIN FORM / MIS DATOS
$(function() {    
	var button = $('.bot-login-panel');
	var box = $('.box-login-drop-down');
	var form = $('.login-form-panel');
	box.hide();
	button.removeAttr('href');
	button.click(function(login) {
		box.toggle();
	});
	form.mouseup(function() { 
		return false;
	});
	$(this).mouseup(function(login) {
		if(!($(login.target).parent('.bot-login-panel').length > 0)) {
			box.hide();
		}
	});
});

// MEGAMENU

$(function() {  
	var button = $('.megamenu-btn');
	var box = $('.megamenu-box');
	var area = $('.megamenu-box-area');

	box.hide();
	button.removeAttr('href'); 

	button.click(function() {
		$(this).addClass("activo");
	});

	area.mouseup(function() { 
		return false;
	});

	$(this).mouseup(function() {
		box.hide();
		button.removeClass("activo");
	});
});

	function dropMegamenu(elegido){
		var box = $('.megamenu-box');
		box.hide();
		$('#'+elegido).show();
	}

/*Accordion Megamenú*/
$(window).load(function(){
		$('.megamenu-accordion').click(function(ev) {
			 $(this).find('>ul').slideToggle().css('display','block').end().siblings().find('ul').slideUp();
			 $(this).find('>span').toggleClass('megamenu-accordion-less').end().siblings().find('>span').removeClass('megamenu-accordion-less');
			
			ev.stopPropagation();		
		});
});


// HEADER

	$(document).ready(function(){
		var randomNum = Math.ceil(Math.random()*8);
		var style_name = "span24 header logos patron" + randomNum;

		  //alert("este es el estilo que se va a setear: " + style_name);
		  $("#header").removeAttr("class");
		  $("#header").attr("class", style_name);
	});
