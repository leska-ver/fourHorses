document.addEventListener('DOMContentLoaded', function() {


  /*** Этапы(stages)-swipper ***/
  let stagesSwiper = new Swiper(".stages__swiper", {
    slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".stages__button_next",
        prevEl: ".stages__button_prev",
      },
      pagination: {
        el: ".stages__pagination",
        clickable: true, //круглеши
        //type: "fraction" цифры
      }
    });


    /*** УЧАСТНИКИ ТУРНИРА(participants)-swipper ***/
    let swiper = new Swiper(".participants__swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".participants__pagination",
        type: "fraction",//цифры
      },
      navigation: {
        nextEl: ".participants__button_next",
        prevEl: ".participants__button_prev",
      },
      breakpoints: {
        707: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 3
        },
      }
    });
  


});  