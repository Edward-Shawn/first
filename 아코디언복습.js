$(document).ready(function(){

    

    $(".menu_wrap li").click(function(){
        var liname = this.className
            $("li").removeClass();
            $(".sub_menu").slideUp('fast');
        if( liname !== "on"){
            $(this).addClass("on");
             $(this).find("ul").slideDown('fast');
        }
             
    });
});