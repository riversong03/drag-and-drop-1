// JavaScript Document

function randOrd(){
		return(Math.round(Math.random())-0.5);
	}
		
function resetChips(){
	$(".container").html("");
	init();
}
	
function init(){
	/* Create html for game layout */
		$('<section class="intro"><div class="row"><div class="col-md-2">&nbsp;</div><div class="col-md-8"><h1>Exercise 1-4: Relational Databases</h1></div><div class="col-md-2">&nbsp;</div></div><div class="row"><div class="col-md-2">&nbsp;</div><div class="col-md-8"><p><strong>Instructions:</strong> Match each item listed in the left column to a description in the right column. Drag the letter button for each item to the Drop Zone next to the corresponding description. A correct choice will stick; an incorrect one will return to its original position. To repeat the activity, click the <strong>Reset Answers</strong> button.</p></div><div class="col-md-2">&nbsp;</div></div></section><section class="activity d-flex"><section id="dragButtons"></section><section id="descriptions"></section></section>').appendTo('.container');
		$("<header class='d-flex'>Terms</header><div id='inner2' class='d-flex'></div>").appendTo("#dragButtons");
		
		
	for ( var i=0; i<definitions.length; i++ ) {
		//alert(letters[i]);
	$('<div class="btn-wrapper" id="'+letters[i]+'-wrapper"></div>').appendTo('#inner2');
    $('<div class="draggable ui-widget-content letter-btn d-flex"><p>'+letters[i]+'</p></div>').data('choice',letters[i]).attr( 'id', letters[i] ).appendTo('#'+letters[i]+'-wrapper').draggable( {
      stack: '#'+letters[i]+'div',
      cursor: 'move',
	  snap:true,
	  snapTolerance: 10,
      revert: true,
	  zIndex: 5
	} );
	
	$('<span>' + letters[i] + '.</span><p>' + terms[i] +'</p>').appendTo('div#'+letters[i]+'-wrapper');
	
  }
  	$('<button id="clearVals" class="btn btn-danger">Reset</button>').appendTo('#dragButtons');
	
	
	$(".dropZone droppable").droppable( "option", "disabled", false );
	definitions.sort(randOrd);
	$('<header class="d-flex">Descriptions</header>').appendTo('#descriptions');
	
	$('<div id="inner" class="d-flex"><div id="drop-zone-label" class="d-flex">DROP ZONE</div><div class="zone-wrapper"></div></div>').appendTo('#descriptions');
	
	for (var i = 0;i < definitions.length;i++){
		$("<div class='zoneContainer d-flex'><div class='dropZone droppable'>&nbsp;</div><p>"+definitions[i]+"</p></div>").appendTo(".zone-wrapper");
	}
	
	
	$(".droppable").droppable({
					
			drop:function(event,ui){
				// Loops through the letter array and gets the index for selected letter chip
				for(var x = 0;x < letters.length; x++){
						
					if(letters[x] == ui.draggable.attr("id")){
						var currID = letters[x];
						var resetLetter = $("#"+currID).draggable("option","revert");
						// If letter has been dragged to wrong answer previously, 
						// this removes the 'revert' attribute.
						$("#"+currID).draggable("option","revert",false);
						// Checks if letter chip has been dragged to correct definition
						if(defCopy[x] == $(this).next().text()){
							$("#"+currID).addClass('matched');

							$("#"+currID).css("top",$(this).position().top);
							$("#"+currID).css("left",$(this).position().left);
							$("#"+currID).css("color","#ffffff");
							$("#"+currID).draggable('disable');
						} else {
								var resetLetter = $('#'+currID).draggable("option","revert");
								$("#"+currID).draggable("option","revert",true);
							}
						} 
					}
				}
			});  // End droppable function
			
			$('#clearVals').click(function(){
				
				resetChips();
				
			});


}

	$(function(){
			init();
	});
