/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu", 
	orientation: 'v', 
	classname: 'menu-v', 
	contentsource: "markup" 
})

/*-----------------------------------------------------------------------------------*/
/*	SIDEBAR HEIGHT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
	var h = $(document).height();
	$('#sidebar').css({height: h+'px'});
});

/*-----------------------------------------------------------------------------------*/
/*	HOVER
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
        $('.items .box .image, .items .box .left-side, .carousel ul li').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
    });