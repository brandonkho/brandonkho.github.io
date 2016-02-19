$(document).ready(function() {

var $fade = $('.fade');

$fade.waypoint(function (direction){
	if(direction == 'down'){
		$fade.addClass('js-fade-animate');
	}else{
		$fade.removeClass('js-fade-animate');
	}
	
	
	
}, {offset: '50%'});

});