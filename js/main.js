$( document ).ready(function() {

	$(".button1").click(function() {
	  $("#sample").text('changed text');
	});

		
	$(".button2").click(function() {
	  $(".left").css("background-color",$(".color-input").val());
	});

});