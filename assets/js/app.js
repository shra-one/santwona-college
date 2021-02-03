$(function () {
  AOS.init();

  $(".scroll-down").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section--about").offset().top },
      "fast"
    );
    return false;
  });

  var lastScroll = 0;
  var header = $(".navbar").outerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= header) {
      $("#header").addClass("sticky");
      var head = $(".navbar").outerHeight();
      document.documentElement.style.setProperty("--headerWidth", head + "px");
    } else {
      $("#header").removeClass("sticky");
      document.documentElement.style.setProperty(
        "--headerWidth",
        header + "px"
      );
    }
  });

  $(".js-counter").countUp({
    time: 2000,
    delay: 10,
  });


  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
  loop:false,
  items:1,
    responsive:{
        0:{
            items:1.2,
            
        },

        1000:{
            items:2,
            
        }
    }
})
  // Custom Navigation Events
  $(".owl-navs-next").click(function(){
    owl.trigger('next.owl.carousel');
  })
  $(".owl-navs-prev").click(function(){
    owl.trigger('prev.owl.carousel');
  })

// $('.js-testimonials').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1
// });
  AOS.refresh();
});
