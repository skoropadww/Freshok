$(function(){
  $('.slider').slick({
    
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
})