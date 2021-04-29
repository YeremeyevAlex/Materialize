$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.carousel').carousel({
		fullWidth: true,
		indicators: true,
	});
	$('.materialboxed').materialbox();
		setInterval(function() {
			$('.carousel').carousel('next');
		}, 5000);
});