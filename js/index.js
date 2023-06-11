$(document).ready(function () {
  $(".about__link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".gallery__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="./img/gallery/arrow-left.svg" alt="arrow-left" /></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="./img/gallery/arrow-right.svg" alt="arrow-right" /></button>',
  });

  $(".gallery__item-inner").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  $(".menu-btn").on("click", () => {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".header__arrow-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".booking").offset().top,
      },
      1000,
    );
  });
});
