function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 980) {
    $("html").addClass("pc").removeClass("mobile");
    $("#header #nav").css({
      display: "block",
      width: "auto",
    });
    $("#nav .depth1 > li").removeClass("on");
    $("#nav .depth1 > li").find(".depth2").hide();
  } else {
    $("html").addClass("mobile").removeClass("pc");
    $("#header .menuopen")
      .find("i")
      .removeClass("fa-times")
      .addClass("fa-bars");
    $("#header #nav").css({
      display: "none",
      width: "100%",
    });
  }
}
getWindowWidth();
$(window).on("resize", function () {
  getWindowWidth();
});

$(".slideInner").slick({
  autoplay: true,
  dots: true,
  arrows: false,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
});

$(".slideOuter1 .plapau i").on("click", function () {
  if ($(this).hasClass("fa-pause")) {
    $(".slideInner").slick("slickPause");
    $(this).removeClass("fa-pause").addClass("fa-play");
  } else {
    $(".slideInner").slick("slickPlay");
    $(this).removeClass("fa-play").addClass("fa-pause");
  }
});

$(".slideOuter2 .slideInner2").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  speed: 300,
  autoplay: true,
  dots: false,
  centerMode: true,
  centerPadding: "80px",
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 911,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});

$(".slideOuter1 .plapau i").on("click", function () {
  if ($(this).hasClass("fa-pause")) {
    $(".slideInner").slick("slickPause");
    $(this).removeClass("fa-pause").addClass("fa-play");
  } else {
    $(".slideInner").slick("slickPlay");
    $(this).removeClass("fa-paly").addClass("fa-pause");
  }
});

$("#nav .depth1 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
    $(this).find(".depth2").stop().slideToggle();
  }
});
// 네개의 코드 다 결과는 같음

// 모바일용 코드(모바일은 mouseover,out이 안된다. click을 사용해야함)
$("#nav .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on");
    $(this).find(".depth2").stop().slideToggle();
    $(this).siblings().find(".depth2").stop().slideUp();
  }
});
$("#header .menuopen").on("click", function () {
  $(this).next().stop().slideToggle();
  if (!$(this).find("i").hasClass("fa-bars")) {
    $("#header #nav .depth2").slideUp();
    $("#nav .depth1 > li").removeClass("on");
    $(this).find("i").addClass("fa-bars").removeClass("fa-times");
  } else {
    $(this).find("i").addClass("fa-times").removeClass("fa-bars");
  }
});
