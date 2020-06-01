$(document).ready(function(){

    $(".menu_btn").click(function(){
        $(this).toggleClass("on");
    

    if($(this).hasClass("on")){
        $(".menu_btn>.fas").attr("class","fas fa-times");

    } else {
        $(".menu_btn>.fas").attr("class","fas fa-bars");

    }
    });
});