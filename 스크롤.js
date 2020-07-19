$(document).ready(function(){

    var lastScrollTop = 0;
    var delta = 5;
    var didScroll;
    var navbarHeight = $('header').outerHeight();

    

    $(window).scroll(function(event){
        didScroll = true;
        $("header").css("position","fixed");
    })

    setInterval(function(){
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
    },250);

    function hasScrolled(){
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
        return;

        if (st > lastScrollTop && st > navbarHeight){ 

           $('header').removeClass('nav-down').addClass('nav-up'); 

        } else { 

            if(st + $(window).height() < $(document).height()) { 
                $('header').removeClass('nav-up').addClass('nav-down'); 
            } 
        }

        lastScrollTop = st;
    }
    

    // $(".menu li").click(function(){
       
    //     var i = $(this).index();
    //     var ht = $("section > div").height();
    //     var navPos = i * ht;
       
    //     $('html,body').animate({scrollTop: i * ht});
    // })

    $(".topBtn").click(function(){
        $('html,body').animate({scrollTop:0},500);
    })



})