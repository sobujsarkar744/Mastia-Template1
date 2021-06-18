$(document).ready(function(){

    //Slider Start Here
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        transitionStyle: "fade",
        animateOut: 'animate__lightSpeedOutRight',
        animateIn: 'animate__lightSpeedOutLeft',
        smartSpeed:450
    });

    //Counter Up Plugin
    $('.count-item').counterUp({
        time: 1000,
    });

   



});