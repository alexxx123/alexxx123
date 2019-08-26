$(document).ready(function(){
	/*
		Calculo y acomodo para portada principal
	*/
	var tamTotal = $("#portada").height();
	var tamTitulo = $("#tituloPrincipal").height();
	var tamOpciones = $("#opcPrincipal").height();
	console.log("Pantalla total: " + tamTotal);
	tamTotal = tamTotal / 2;
	console.log("pantalla dividida: " + tamTotal);
	console.log("Margen: " + (tamTotal-tamOpciones));
	console.log("opc: " + (tamOpciones));
	$("#tituloPrincipal").css("margin-top", (tamTotal-tamTitulo+50) + "px");
	$("#opcPrincipal").css("margin-top", (tamTotal-tamOpciones-60) + "px");

   	$(window ).resize(function() {
	  	var tamTotal = $("#portada").height();
	  	var tamTitulo = $("#tituloPrincipal").height();
	  	var tamOpciones = $("#opcPrincipal").height();
	  	console.log("Pantalla total: " + tamTotal);
	  	tamTotal = tamTotal / 2;
	  	console.log("pantalla dividida: " + tamTotal);
	  	console.log("Margen: " + (tamTotal-tamOpciones));
	  	console.log("opc: " + (tamOpciones));
	  	$("#tituloPrincipal").css("margin-top", (tamTotal-tamTitulo+50) + "px");
	  	$("#opcPrincipal").css("margin-top", (tamTotal-tamOpciones-60) + "px");
	});
   	/*
   		Efectos de botones y titulo de titulo principal
   	*/

	$('#socialBtn1').animate({opacity: '1'}, 1000);
	$('#socialBtn2').animate({opacity: '1'}, 1800);
	$('#socialBtn3').animate({opacity: '1'}, 2400);
    $('#socialBtn4').animate({opacity: '1'}, 3200);

    $('#downBtn1').animate({opacity: '1'}, 3200);

    $('#menuContainer').animate({opacity: '1'}, 3200);


    $('#tituloPrincipal').animate({opacity: '1'}, 2000);

    /*
    	Botones para cambio de secciones
    */

    $("#downBtn1").click(function(){
          	$('html, body').animate({
       		scrollTop: $('#seccion2').offset().top
    	}, 1250);
    });

	$("#downBtn2").click(function(){
          	$('html, body').animate({
       		scrollTop: $('#seccion3').offset().top
    	}, 1250);
    });

    $("#downBtn3").click(function(){
          	$('html, body').animate({
       		scrollTop: $('#seccion4').offset().top
    	}, 1250);
    });

    $("#downBtn4").click(function(){
          	$('html, body').animate({
       		scrollTop: $('#seccion5').offset().top
    	}, 1250);
    });

    $("#btnOpcIni").click(function(){
          	$('html, body').animate({
       		scrollTop: $('#portada').offset().top
    	}, 2000);
    });
});