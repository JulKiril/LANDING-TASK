$(document).ready(function(){
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });
//Anchors
    $(".header__nav,.footer__nav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href');
        let top;
        if(id==='#home'){
            top=0;
        }
        else{
            top = $(id).offset().top-80;
        }

        $('body,html').animate({scrollTop: top}, 1500);
    });
});
