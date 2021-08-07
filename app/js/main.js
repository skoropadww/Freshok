$(function(){
  $('.hero__inner').slick({ 
  });

  $('.brand__list').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  let containerEl1 = document.querySelector('[data-ref="container-1"]');

  let containerEl2 = document.querySelector('[data-ref="container-2"]');
  
  let config = {
    controls: {
      scope: 'local'
    }
  };

  let mixer1 = mixitup(containerEl1, config);

  let mixer2 = mixitup(containerEl2, config);

  $(".star__icon").rateYo({
    starWidth: "16px",
    ratedFill: "#FFB800" ,
    rating: 5,
    numStars: 1,
    readOnly: true,
    fullStar: true,
  });

})