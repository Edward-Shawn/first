$(document).ready(function(){

    

    $(".accordion li").click(function(){
        $(".accordion li").removeClass();
        $(this).addClass("on");
        $(".accordion li .side_menu").hide();
        $(this).find("ul").show();
     })

    //  $(".accordion li").eq(0).trigger("click");
    
    

    // var accordion = $('.accordion').find("li");
    

    // accordion.click(function(){
    //     $(".accordion> li").removeClass("on");
    //     $(this).addClass("on");
    // })


    //$(".on").onload(function(){
    

        // if($(".side_menu").css("display") == "none"){
        //     $(".side_menu").css("display","block")
        // }else{
            
        // }
    //});
   
});