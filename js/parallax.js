$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.manned-flight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.frameless-parachute').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#frameless-parachute').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.english-channel').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#english-channel').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.after-WWII').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#after-WWII').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.new-building').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#new-building').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.ctam-today').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#ctam-today').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#frameless-parachute').offset().top - (($('#english-channel').offset().top - $('#frameless-parachute').offset().top) / 2);
	var section3Top =  $('#english-channel').offset().top - (($('#after-WWII').offset().top - $('#english-channel').offset().top) / 2);
	var section4Top =  $('#after-WWII').offset().top - (($('#new-building').offset().top - $('#after-WWII').offset().top) / 2);
	var section5Top =  $('#new-building').offset().top - (($('#ctam-today').offset().top - $('#new-building').offset().top) / 2);
	// var section6Top =  $('#ctam-today').offset().top - (($('#about').offset().top - $('#ctam-today').offset().top) / 2);
	var section6Top =  $('#ctam-today').offset().top - (($(document).height() - $('#ctam-today').offset().top) / 2);;

	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top) {
		$('nav#primary a.manned-flight').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top) {
		$('nav#primary a.frameless-parachute').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
		$('nav#primary a.english-channel').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top) {
		$('nav#primary a.after-WWII').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top) {
		$('nav#primary a.new-building').addClass('active');
	} else if ($(document).scrollTop() >= section6Top) {
		$('nav#primary a.ctam-today').addClass('active');
	}
}
