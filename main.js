
var isShowCounter = false;

$(document).ready(function () {
  // Slide Show
  $('.slideshow').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
  });

  var wrapperMenu = document.querySelector('.wrapper-menu');

  wrapperMenu.addEventListener('click', function(){
    $('.menu-responsive').toggleClass('menu-open');
    $('.wrapper-menu').toggleClass('menu-active');
  })

})

$(window).scroll(function() {
  var about = $('.s-about')[0];
  var offsetAbout = about.offsetTop;
  var counter = $('.counter__number')[0].offsetTop;

  if (window.pageYOffset >= offsetAbout) {
    $('.navbar').addClass('sticky')
    $('.menu li a').addClass('text-sticky')
  } else {
    $('.navbar').removeClass('sticky')
    $('.menu li a').removeClass('text-sticky')
  }

  if (window.pageYOffset + window.screen.height - 100 > counter) {
    if (!isShowCounter) {
        // Counter
        $('.counter__number').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
        });
        isShowCounter = true
    }
  }
})

Pace.on('hide', function(){
  $('#overlay').addClass("pace-inactive")
})