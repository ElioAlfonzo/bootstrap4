/*funcion autoinvocada*/

$(function(){ /*una vez cargada la pagina completa*/
	/*Mostrar la imagen en un modal*/
	$('.galeria .contenedor-imagen').on('click',function(){
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));/*buscame la etq img  toma el valor de su src*/
		console.log(ruta_imagen);
		$('#imagen-modal').attr('src',ruta_imagen);
	});

	/*Cerramos el modal*/
	$('#modal').on('click',function(){ 
		$('#modal').modal('hide');
	});
})