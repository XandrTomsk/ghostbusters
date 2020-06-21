$(document).ready(function () {
  const mMenuBtn = $(".mobile-buttons");
  const mMenu = $(".m-menu");
  const tab = $(".tab");
  mMenuBtn.on("click", function () {
    window.scroll(0,0) ;
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  var mySwiper = new Swiper (".swiper-container", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 25,
    breakpoints: {
      991: {
        slidesPerView: 4,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
     /* 576: {
        slidesPerView: 2,
      },*/
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        }
      }
    }
  });
});
