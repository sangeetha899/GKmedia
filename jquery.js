$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:8
            }
        }
    });
    $("#owl-demo2").owlCarousel({
        loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{ 
            items:4
        }
    }
    });

    $("#owl-demo3").owlCarousel({
        loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{ 
            items:3
        }
    }
    });

    $("#owl-demo4").owlCarousel({
        loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{ 
            items:5
        }
    }
    });
});