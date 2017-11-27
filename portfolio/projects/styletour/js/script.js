$(function () {
	$('.carousel').carousel({
  //interval: false
});
	$('.search').on('click', function(){
		$('.main-menu .navbar-form').slideToggle();
	});
	$('#elastislide').elastislide();
});

$(window).load(function(){
	var carouselCaptionWidth=$('#carousel-sidebar .active img').width();
	$('#carousel-sidebar img').each(function(){
		$(this).attr('width',carouselCaptionWidth);
	});
	$('#carousel-sidebar .sidebar-carousel-caption').css('width', carouselCaptionWidth + 'px');
	$('.sidebar .carousel-indicators').css('width', carouselCaptionWidth + 'px');
	$('.sidebar .banner').css('width', carouselCaptionWidth + 'px');
});