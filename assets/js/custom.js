$('.toggle').click(function() {
  $('.collapse-menu').toggleClass('show');
});

$('.toggle2').click(function() 
{
  $('.collapse-menu').toggleClass('show');
});


$(document).ready(function () {
  var section = $('.processdevelopment-section');
  var scrollerItems = $('.scroller-item');
  var progressLine = section.find('.progress-line'); // Select the progress line

  // Initialize: first image is active
  scrollerItems.eq(0).addClass('active');

  if (section.length > 0) {
    $(window).on('scroll', function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var sectionTop = section.offset().top;
      var sectionHeight = section.outerHeight();
      var sectionBottom = sectionTop + sectionHeight;

      // Update progress line height
      if (scrollTop >= sectionTop && scrollTop <= sectionBottom) {
        var progress = ((scrollTop - sectionTop) / sectionHeight) * 100;
        progressLine.css('height', progress + '%');
      } else if (scrollTop < sectionTop) {
        progressLine.css('height', '0%');
      } else if (scrollTop > sectionBottom) {
        progressLine.css('height', '100%');
      }

      // Image activation logic
      if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
        section.find('.scroller-content').each(function (index) {
          var $this = $(this);
          var contentTop = $this.offset().top;
          var contentBottom = contentTop + $this.outerHeight();

          if (scrollTop + windowHeight / 2 >= contentTop && scrollTop + windowHeight / 2 < contentBottom) {
            activateImage(index);
          }
        });
      }
    });
  }

  function activateImage(index) {
    // Mark all previous images as "previous"
    scrollerItems.slice(0, index).removeClass('active').addClass('previous');

    // Activate the current image
    scrollerItems.eq(index).addClass('active').removeClass('previous');

    // Deactivate all following images
    scrollerItems.slice(index + 1).removeClass('active').removeClass('previous');
  }
});



// slick slider black banner

$('.black-slider').slick({
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,          
    speed: 3000,               
    arrows: false,
    dots: false,               
    cssEase: 'linear',         
    infinite: true,
    draggable: true,
    responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
    ]
  });

  $('.awards-slider').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 6000,       
    speed: 2000,               
    arrows: false,
    dots: false,         
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 10,      
    responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
    ]
  });


$('.testimonial-slider').slick({
  dots: true,
  draggable: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  dots:false
});

$('.logos-slider').slick({
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 0,   
  autoplaySpeed: 6000,       
  speed: 2000,               
  arrows: false,
  dots: false,         
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 10,      
  responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }
  ]
});

$('.speriorcontentmanagement-slider').slick({
  slidesToShow: 3,
  margin:25,
  autoplay: true,
  autoplaySpeed: 0,   
  autoplaySpeed: 6000,       
  speed: 2000,               
  arrows: false,
  dots: false,         
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 10,      
  responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
  ]
});

$('.ecslider').slick({
  slidesToShow: 3,
  margin:25,
  autoplay: true,
  autoplaySpeed: 0,   
  autoplaySpeed: 6000,       
  speed: 2000,               
  arrows: false,
  dots: false,         
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 10,      
  responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
  ]
});

$('.dropdown-menu1').click(function()
{
  $('.dropdown-menu1').toggleClass('active');
});

$('.dropdown-menu2').click(function()
{
  $('.dropdown-menu2').toggleClass('active');
});



