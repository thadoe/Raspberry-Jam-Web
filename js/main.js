$( document ).ready(function() {

	$(".button1").click(function() {
	  $("#sample").text('changed text');
	});

		
	$(".button2").click(function() { 
	  $(".left").css("background-color",$(".color-input").val());
	  $(".color-input").val('');
	});
	$(".color-input").keyup(function (e) {
    	if (e.keyCode == 13) {
       		$(".left").css("background-color",$(".color-input").val());
	  		$(".color-input").val('');
   		}
   	

	});
	$(".button3").click(function() { 
	  $(".left").css("background-color",getRandomColor());
	});



});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}