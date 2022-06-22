jQuery(function($) {
    "use strict";

    if($('.home_slider').length){

            $('.home_slider').slick({
            vertical:true,
            arrows: false,
            dots: true,
            rows: 0,
            adaptiveHeight:true,
            // autoplay: true,
            // autoplaySpeed: 1000,
        });

    }

    if($('.shopSlider__box').length){
        $('.shopSlider__box').slick({
            infinite: true,
            rows: 0,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows:$('.slider_controls'),
            prevArrow:"<div class=\"slider_controls__left\"><i class=\"fa-solid fa-arrow-left\"></i></div>",
            nextArrow:"<div class=\"slider_controls__right\"><i class=\"fa-solid fa-arrow-right\"></i></div>", 
            responsive: [

                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

    if($('.testemonial_carusel').length){

        $('.testemonial_carusel').slick({
            infinite: true,
            rows: 0,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows:$('.testemonial_slider'),
            prevArrow:"<div class=\"testemonial_left\"><div class=\"left\"><i class=\"fa-solid fa-arrow-left\"></i></div></div>",
            nextArrow:"<div class=\"testemonial_right\"><div class=\"right\"><i class=\"fa-solid fa-arrow-right\"></i></div></div>", 
            responsive: [

              {
                breakpoint: 980,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });


        $('.testemonial_carusel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let tabs_cont = $('.testemonial_cont');
            tabs_cont.find($('.testemonialTab')).hide();
            tabs_cont.find($('.tab-' + nextSlide)).show();

          });

    }

	$('.burger').click(function(event){
		$('.burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');	
	});
    
  $('header .headerTop nav > ul > li  a ').click(function(event){
    $('.burger, .menu').removeClass('active');
    $('body').removeClass('lock');
  });

  $('.video_info__icon').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  let header = document.querySelector('.headerTop').offsetHeight;

  $(".menu").on("click","a", function (event) {

    event.preventDefault();

    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - header + 1}, 1500);
  });



  

  


  $(".sap_menu__cont").click(function(){
     $(".sap_menu").toggleClass('menu_active');
  });
  
});


