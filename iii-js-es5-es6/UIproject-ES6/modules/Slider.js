// import "./import-jquery"
// import 'owl.carousel';

class Slider {
  constructor() {
    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
    })
  }
}

export default Slider;
