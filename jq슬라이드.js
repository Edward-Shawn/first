$(document).ready(function(){

    var mySlide = function(){

        var $container = $(".slideshow");
        var $slideGroup = $container.find(".slideshow-slides");
        var $slides = $slideGroup.find(".slide");
        var $nav = $container.find(".slideshow-nav");

        var currentIndex = 0;
        var timer;

        for(var i = 0; i < $slides.length; i++){
            $slides.eq(i).css({left: 100 * i + "%"});
        }

        function goToSlide(index){
            $slideGroup.animate({left: -100 * index + "%"},400);
            currentIndex = index;
        }

        function startTimer(){
            timer = setInterval(function(){
                var nextIndex = (currentIndex + 1) % $slides.length;
                goToSlide(nextIndex);
                console.log(nextIndex);   
            },3000)
        }

        function stopTimer(){
            clearInterval(timer);
        }

        $nav.on("mouseenter",function(){
            stopTimer();
        });
        $nav.on("mouseleave",function(){
            startTimer();
        })

        $nav.on("click", "a", function(e){
            e.preventDefault();
            if($(this).hasClass("prev")){

                if(currentIndex === 0){
                    return false;
                }else{
                    goToSlide(currentIndex - 1);
                }

            }else{

                if(currentIndex === $slides.length - 1 ){
                    return false;
                }else{
                    goToSlide(currentIndex + 1);
                }

            }
        })

        goToSlide(currentIndex);
        startTimer();
    }
    mySlide();
});