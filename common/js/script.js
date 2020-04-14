$(document).ready(
  function () {

    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      var elements = document.getElementsByTagName('a');
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('touchend', function () {});
      }
    }

    $('.hd_menu ul li a, .hd_all .hd_fixed .hd_sp .menu_sp ul li a, .hd_all .hd_fixed .hd_logo a').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 900);
          return false;
        } else {
          $('html,body').animate({
            scrollTop: target.offset().top - 0
          }, 900);
        }
      }
    });

    var topBtn = $('.backtop');
    topBtn.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    $('#slide_01').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:false,
      items:1,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed:2000,
      animateOut: 'fadeOut',
    });

    $('#slide_02').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed:1000,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
    });

  }
);

var image = new Array ();
image[0] = "./img/index/sp_banner01.jpg";
image[1] = "./img/index/sp_banner02.jpg";
image[2] = "./img/index/sp_banner03.jpg";
image[3] = "./img/index/sp_banner04.jpg";
image[4] = "./img/index/sp_banner05.jpg";
image[5] = "./img/index/sp_banner06.jpg";
var size = image.length
var x = Math.floor(size*Math.random())
$('#randomImages').css("background-image", "url("+image[x]+")");

// wow = new WOW({
//   boxClass: 'wow', // default
//   animateClass: 'animated', // default
//   offset: 0, // default
//   mobile: false, // default
//   live: true // default
// })
// wow.init();
AOS.init();

$(".hbg_sp").click(function(){
    $(".menu_sp").addClass("open_menu");
});

$(".hd_all .hd_fixed .hd_sp .menu_sp ul li a").click(function(){
  $(".menu_sp").removeClass("open_menu");
});

// $(document).mouseup(function(e) 
// {
//     var container = $(".menu_sp");

//     if (!container.is(e.target) && container.has(e.target).length === 0) 
//     {
//       $(".menu_sp").removeClass("open_menu");
//     }
// });


// $(function(){				
				
//   var $win = $(window); // or $box parent container
//   var $box = $(".menu_sp");
//   var $log = $(".hd_all .hd_fixed .hd_sp .menu_sp ul li a");
  
//    $win.on("click.Bst", function(event){		
//     if ( 
//       $box.has(event.target).length == 0 //checks if descendants of $box was clicked
//       &&
//       !$box.is(event.target) //checks if the $box itself was clicked
//     ){
//       $log.text("you clicked outside the box");
//     } else {
//       $log.text("you clicked inside the box");
//     }
//   });

// });