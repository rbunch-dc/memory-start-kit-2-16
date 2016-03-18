var moves = 0;
var wins = 0;
var games = 0;
var gridSize;
var gameTiles;
var gridArray;
var rowSize;
var cards = [
	"<img src='img/default/monsters-01.png'>",
	"<img src='img/default/monsters-02.png'>",
	"<img src='img/default/monsters-03.png'>",
	"<img src='img/default/monsters-04.png'>",
	"<img src='img/default/monsters-05.png'>",
	"<img src='img/default/monsters-06.png'>",
	"<img src='img/default/monsters-07.png'>",
	"<img src='img/default/monsters-08.png'>",
	"<img src='img/default/monsters-09.png'>",
	"<img src='img/default/monsters-11.png'>",
	"<img src='img/default/monsters-13.png'>",
	"<img src='img/default/monsters-14.png'>",
	"<img src='img/default/monsters-15.png'>",
	"<img src='img/default/monsters-16.png'>"
];


$(document).ready(function(){

	$('input').click(function(){
		var diff = $(this).val();
		if(diff == 'easy'){
			rowSize = 5;
			gridSize = rowSize*2;
			$('#mg-wrapper').addClass('easy');			
		}else if(diff=="med"){
			rowSize = 5;
			gridSize = rowSize*4;
			$('#mg-wrapper').addClass('med');			
		}else if(diff=="hard"){
			rowSize = 7;
			gridSize = rowSize*4;
			$('#mg-wrapper').addClass('hard');
		}
		$('#button-bucket').toggle();
		gameTiles = cards.slice(0,(gridSize/2));
		gridArray = $.merge(gameTiles, gameTiles);


		//shuffle here

		//place here
		for(i=0; i<gridArray.length; i++){
			var html = '<div class="mg-tile">';
					html += '<div class="mg-tile-inner unmatched flipped">';
						html += '<div class="mg-tile-outside"></div>';
						html += '<div class="mg-tile-inside">' + gridArray[i]+'</div>';
					html += '</div>';
				html += '</div>';
			$('#mg-contents').append(html);
		}

		setTimeout(function(){
			$('.mg-tile-inner').removeClass('flipped');
		},2000);


		$('.mg-tile-inner')

		$('.mg-tile').click(function(){
			$(this).find('.mg-tile-inner').addClass('flipped');
			if($('.flipped.unmatched').length == 2){
				moves++
				var visibleCards = $('.flipped.unmatched img');
				if(visibleCards[0].src == visibleCards[1].src){
					//leave them flipped
					//add matched
					$('.flipped.unmatched').addClass('matched');
					//remove unmatched
					$('.flipped.unmatched').removeClass('unmatched');
				}else{
					//The user has flipped over 2 cards and they DO NOT match.	
					setTimeout(function(){
						$('.flipped.unmatched').removeClass('flipped');	
					},500);
				}
				if($('.flipped.matched').length == gridArray.length){
					alert('you have matched them all');
					wins++
				}
			}else{
				//Only one card is flipped up
			}
			$('#move-counter').html(moves);
			$('#wins-counter').html(wins);			
		});

	});














});