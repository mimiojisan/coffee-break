function fadeAnime(){

    $('.sec-copy').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('txt-fc-in');
        }else{
            $(this).removeClass('txt-fc-in');

        }
    });

    $('.sec-category').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('slide-in-rgt');
        }else{
            $(this).removeClass('slide-in-rgt');

        }
    });

    $('.sec-coupon').find('.banner').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fade-in-fwd');
        }else{
            $(this).removeClass('fade-in-fwd');

        }
    });
    
    $('.sec-blog').find('.blog-wrap').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('slide-in-rgt');
        }else{
            $(this).removeClass('slide-in-rgt');

        }
    });

};

$(window).scroll(function (){
    fadeAnime();
});