$(document).ready(function(){
	squareCreation(16);	
	$('#clearButton').on('click', function(){
		var count = prompt("Укажите размеры нового поля:");
		if (!isNaN(count) && (count != 0)) {
			$('.cell').removeClass("hovered");
			squareCreation(count);
		}
	});
});
function squareCreation(count) {
	$('.mainSquare').empty();
	var height = Math.floor(590/count);
	for (var i = 0; i < count; i++){
		var newLine = "<div class=\"line\"></div>";
		$('.mainSquare').append(newLine);
		for (var j = 0; j < count; j++) {
			$('.line:eq(' + i + ')').append('<div class="cell"></div>');
		}
	}
	$(".cell").css({'height' : height + "px",
					'width' : height + "px"});
	$(".line").css('height', height + "px");
	$(".mainSquare").css({'height': height * count + "px",
						   'width': height * count + 1 + "px"});
	$('.cell').on('mouseenter', function() {
		if ($(this).hasClass("hovered")) {
			var colour = $(this).css("background-color");
			var gColour = parseInt(colour.split(",")[1]);
			if (gColour > 0) {
				gColour -= 17
			}
			gColour = gColour.toString(16);
			$(this).css("background-color", "#00" + gColour + "00");
		} else {
			$(this).addClass("hovered");
		}
	});
};
