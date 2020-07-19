$(document).ready(function(){


    $(window).scroll(function(){
        $("header").css("position","fixed");
    })

    

    $(".menu li").click(function(){
       
        var i = $(this).index();
        var ht = $("section > div").height();
        var navPos = i * ht;
       
        $('html,body').animate({scrollTop: i * ht});
    })

    $(".topBtn").click(function(){
        $('html,body').animate({scrollTop:0},500);
    })



})