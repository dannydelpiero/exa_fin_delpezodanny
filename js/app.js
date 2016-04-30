//1.usuario da un clic en link que rodea la imagen
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	//1.1mostrar el lightbox
	$image.attr("src",href);

	var texto=$(this).children("img").attr("alt");
	$caption.text(texto);
	
	$overlay.show();
	console.log(href);
});

//agregar overlay lightbox
var $overlay=$("<div id='overlay'></div>");
var $image=$("<img>");
var $caption=$("<p></p>");

//2.1 con imagen
$overlay.append($image);
//2.2 un texto

$overlay.append($caption);
//agergar overlay al body
$("body").append($overlay);


$select.change(function(){
	//toma el valor de la opcion seleccionada
	window.location=$select.val();
});
//3cuando se da clic al overlay
//3.1 esconder el ovrlay
$overlay.click(function(){
	$overlay.hide();
});