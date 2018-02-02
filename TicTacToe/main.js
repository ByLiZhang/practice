$(document).ready(function(){
	$('button').on('click', makeBoard);
});

function makeBoard() {
	var user_input = $('.boardSize').val();
	var  size = Number(user_input).toFixed(1);
	var board = $('.board');
	board.empty();
	var rowNumber = 0;
	var colNumber = 0;
	if (size) {
		for (var i = 0; i < size; i++){
			var row = $('<div>').addClass('row'+(i+1)); 
			for (var j = 0; j < size; j++) {
				var col = $('<div>').addClass('col'+(j+1));
				row.append(col);
				console.log(colNumber);
			}
		$('.board').append(row);
		rowNumber++;
		colNumber++;
		}
	$('.row1>div').css({
		'border-top': 'none',
		'border-left': 'none'
	});

	$('.col1').css({
		'border-top': 'none',
		'border-left': 'none'
	});	

	$('.row'+rowNumber+'>div').css({
		'border-bottom': 'none',
	});	

	$('.col'+colNumber).css({
		'border-right': 'none'	
	});	

	} else {
		alert('Please input a valid board size');
	}
}