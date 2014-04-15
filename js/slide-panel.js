$(document).ready(function(){
	$('#opener').on('click', function() {		
		var panel = $('#slide-panel');
		if (panel.hasClass("visible")) {
			panel.removeClass('visible').animate({'margin-left':'-300px'});
      $('#content').css({'margin-right':'0px'});
		} else {panel.addClass('visible').animate({'margin-left':'0px'});
      $('#content').css({'margin-right':'-300px'});
		}	
		return false;	
	});
});