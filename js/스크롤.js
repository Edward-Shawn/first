$(window).ready(function(){
    $(window).scrollTop(0);
   
    $(window).scroll(function(){
        $("header").css("position","fixed")
    })

    $(".gnb li").click(function(){
        
        $(".gnb li").removeClass();
        $(this).addClass("on");

        var i = $(this).index();
        var navPos = i*ht
        $("html,body").animate({scrollTop:navPos-100});
    })
    
    var ht = $(window).height();
    $("section").height(ht);
})