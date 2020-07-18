$(document).ready(function(){

    

    $(".accordion li").click(function(){
        const isIn = this.className;
        $(".accordion li").removeClass();
        $('.side_menu').slideUp('fast');
        
        if(isIn !== "on"){
            $(this).addClass("on");
            $(this).find("ul").slideDown('fast');
        }
            
    })

});