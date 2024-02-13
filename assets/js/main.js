$(document).ready(function () {
    $("button").tooltip()
})

$('#enviarCorreo').click(function () {
    alert("Correo enviado correctamente")
})

// $("h5").dblclick(function () {       este dblclick ya funciona son on, pero lo inclui porque lo piden

//     $(this).css({
//         "color": "red",
//         "font-size": "2rem"
//     })
// })

$("h5").on("dblclick", function() {
	$(this).css({
			"color": "red",
			"font-size": "1.5rem"
	});
});


$('.card-title').click(function(){
    $('.recetas-relacionadas p').toggle("hide");  
})