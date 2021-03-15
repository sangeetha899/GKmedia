$(document).ready(function () {
    var owl = $('#owl-slide1');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
  });

  $(document).ready(function () {
  var owl = $('#owl-slide2');
owl.owlCarousel({

    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }

});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
  });

  $(document).ready(function () {
    var owl = $('#owl-slide3');
  owl.owlCarousel({
  
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:6
          }
      }
  
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })
    });
    // starting thriller movies
    $(document).ready(function () {
    $('#owl-slide4').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
});
    // ending thriller movies

    // start hollywood movies
    $(document).ready(function () {
        var owl = $('#owl-slide5');
      owl.owlCarousel({
      
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:4000,
          autoplayHoverPause:false,
          transitionStyle : "backslide",
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
      $('.play').on('click',function(){
          owl.trigger('play.owl.autoplay',[1000])
      })
      $('.stop').on('click',function(){
          owl.trigger('stop.owl.autoplay')
      })
        });
    // 
    // end of hollywood movies

    // start of final slideshow
    
    
    // end of final slideshow