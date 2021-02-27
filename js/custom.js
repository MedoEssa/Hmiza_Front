$(document).ready(function(){
        $('#check').click(function(){
	    if('password' == $('#test-input').attr('type')){
	         $('#test-input').prop('type', 'text');
	    }else{
	         $('#test-input').prop('type', 'password');
	    }
	});

    function scroll_to_top(div) {
    $(div).click(function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
    $(window).scroll(function(){
        if($(window).scrollTop()<500){
            $(div).fadeOut();
        } else{
            $(div).fadeIn();
        }
    });
}
scroll_to_top("#scroll-top");

        $('.col-md-3').hover(
            // trigger when mouse hover
            function(){
                $(this).animate({
                    marginTop: "-=2%",
                },200);
            },

            // trigger when mouse out
            function(){
                $(this).animate({
                    marginTop: "0%"
                },200);
            }
        );



});