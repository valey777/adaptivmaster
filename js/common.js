$(document).ready(function() {
	
	var clock=$(".clock").FlipClock(3600,{
		autoStart:false,
		language:'ru-ru',
		callbacks:{
			stop:function(){
				$('.massage').html("Время прошло")
			}
		}
	});
	clock.setTime(56880);
	clock.setCountdown(true);
	clock.start();
});