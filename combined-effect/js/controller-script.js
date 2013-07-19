jQuery(document).ready(function($){
	$("#modal-starter").leanModal({ top : 200, overlay : 0.4, closeButton: ".modal_close" });
	
	//navigation
	$('.nav-image').bind('click', function(){
		$('img.nav-image').removeClass('nav-selected');
		$(this).addClass('nav-selected');
		var nav_source = $(this).attr('src');
		$('#flip-big-image').attr('src', nav_source);
	});
	
	
	//flip and revert
	
	
	$('.flip-flip').bind('click', function(){		
		$('.front').css({'background-color':'#BFBFBF'});
		
		var img_src = $('img#flip-big-image').attr('src');
		$('input[name="selected-image-src"]').attr('value', img_src);
		
		var form_content = $('.back').html();
		
		$(".front").flip({
			direction:'lr',
			color: '#BFBFBF',
			speed: 100,
			//content:'<img class="flip-image" src="./images/ripemangos.jpg" alt="Unavailable" />',
			content: form_content
		});
		
		//undo flipping
		$('.flip-revert').bind('click', function(){
			$('.front').css({'background':'none'});
			$('.front').revertFlip();
		});
		
		return false;
				
	});
	
	
	
	
});
