jQuery(document).ready(function($){
	$("#modal-starter").leanModal({ top : 200, overlay : 0.4, closeButton: ".modal_close" });
	
	$('.flip-container').bind('click', function(){
		
		$('.front').css({'background-color':'#BFBFBF'});
		
		$(".front").flip({
			direction:'lr',
			color: '#BFBFBF',
			speed: 800,
			//content:'<img class="flip-image" src="./images/ripemangos.jpg" alt="Unavailable" />',
			content: "Form content will goes here"
		});
	
				
	});
	
});
