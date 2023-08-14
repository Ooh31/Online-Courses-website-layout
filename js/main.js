$(function () {
    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
      })

      $('.team__slider').slick ({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive:
        [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              draggable: true,
            },
          },
        ]
    })
    $('.team__slider-prev').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickNext')
    })
  
    $('.testimonials__slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.testimonials__dots'),
      waitForAnimate: false,
      // responsive:
      //   [
      //     {
      //       breakpoint: 700,
      //       settings: {
  
      //       },
      //     },
      //   ]
    })
    $('.testimonials__prev').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext')
    })
    
})
