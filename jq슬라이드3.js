$(document).ready(function(){

    var mySlide = function(){



        var container = $(".slidebox");
        var slideGroup = $(".slide-show");
        var slides = $(".slide");
        var nav = $(".btnbox");
        var indicator = $(".slidebox-indicator");



        var currentIndex = 0;
        var timer;
        var indicatorHTML = '';





        for(var i = 0; i < slides.length; i++){
            slides.eq(i).css({ left: 100 * i + "%" }); 
            indicatorHTML += '<a href="#"></a>';
        }

        indicator.html(indicatorHTML);

        function goToSlide(index){
            slideGroup.animate({left: -100 * index + "%"},400);
            currentIndex = index;
            indicatorBtn();
        }


        function startTimer(){
            timer = setInterval(function(){
                var nextIndex = (currentIndex + 1) % slides.length;
                goToSlide(nextIndex);
                console.log(nextIndex);
            },2000)
        }
        
        function stopTimer(){
            clearInterval(timer);
        }
       
        function indicatorBtn (){
            indicator.find("a").removeClass("active");
            indicator.find("a").eq(currentIndex).addClass
            ("active");
        }
        

        container.on("mouseenter",function(){
            stopTimer();
        });
        container.on("mouseleave",function(){
            startTimer();
        });



        nav.on("click","a",function(e){
            e.preventDefault();
            if($(this).hasClass("prev")){
                if(currentIndex === 0){
                    return false;
                }else{
                    goToSlide(currentIndex -1);
                }
            }else{
                if(currentIndex === slides.length -1){
                    return false;
                }else{
                    goToSlide(currentIndex + 1 );
                }
            }
        });

        indicator.on("click", "a", function (e){
            e.preventDefault();
            var index = $(this).index();
            goToSlide(index);
        });

        goToSlide(currentIndex);
        startTimer();
    }
    mySlide();
})