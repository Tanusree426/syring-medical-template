$(document).ready(function(){
$('.owl-crousel-1').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1024:{
            items:3,
            nav:false,
            loop:true
        }
    }
});
});

$(document).ready(function(){
$('.owl-crousel-2').owlCarousel({
    loop:true,
    
    dots:false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        700:{
            items:2,
            nav:false,
            margin:30,
        },
        1024:{
            items:3,
            nav:false,
            loop:true,
            margin:30,
        }
    }
});
});
/*
$(document).ready(function{


$('.owl-crousel-2').owlCarousel({
    loop:true,
    margin:0,
   
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
   
});
});*/



$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
});

AOS.init({
	duration: 1000,
});

/*var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
});*/

 jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});