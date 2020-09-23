'use strict'; 
$(window).load( function() {	

    // PORTFOLIO ISOTOPE
if ($('.isotope_items').length) {
     var $container = $('.isotope_items');
     $container.isotope();

    $('.portfolio-filter ul li').on("click", function(){
        $(".portfolio-filter ul li").removeClass("select-cat");
        $(this).addClass("select-cat");              
        var selector = $(this).attr('data-filter');
        $(".isotope_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
    });
        return false;
    });      
}

$(".portfolio-filter ul li").click(function() {
    $('html, body').animate({
        scrollTop: $(".isotope_items").offset().top - 30
    }, 500);
});

        
}); // window load end 



$(document).ready( function() {	
    

//PRELOADER
 $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
   

// HOME PAGE HEIGHT
function centerInit() {
    var wrapper = $('.wrapper')

    wrapper.css({
        "margin-top": $(window).height() + "px"
    });
}
centerInit();
$(window).resize(centerInit);


// MAGNIFIC POPUP FOR PORTFOLIO PAGE
if ($('.gallery').length) {
    $('.gallery').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });
}
    	
// RESPONSIVE MENU
$('.hamburger').on('click', function () {
    $('.nav').toggleClass('open');
});

$('#nav-icon').click(function(){
    $(this).toggleClass('open');
});
    

// SUBMENU
$('.hassub i').on('click',function(){
    $(this).parent('.hassub').children('.submenu').slideToggle();
});

//BLOG LINE 
$('.blogs .post').hover(function(){
    $(this).next('.line').hide();
    $(this).prev('.line').hide();
}, function(){
    $(this).next('.line').show();
    $(this).prev('.line').show();
    });


// HERO EFFECT
if ($(window).width() > 481) {
      function promoEffect() {
        var pro = $('.hero');
        var where =  window.pageYOffset || document.documentElement.scrollTop;
        pro.css({
            'transform': 'scale('+(100 - where/100)/98+')',
             'opacity' : (1 - (where/20) / 30)
        }) 
    }
    promoEffect();
    $(window).scroll(promoEffect);
}else{
      function promoEffect() {
        var pro = $('.hero');
        var where =  window.pageYOffset || document.documentElement.scrollTop;
        pro.css({
            'transform': 'scale('+(100 - where/100)/99+')',
             'opacity' : (1 - (where/20) / 15)
        }) 
    }
    promoEffect();
    $(window).scroll(promoEffect);

}

// STICKY SIDEBAR
if ($('.left-filter-section').length) {
         var windowh = $(window).height();
         var filter = $('.left-filter-section').height();
         var coord = windowh - filter 

        var sidebar = new StickySidebar('.left-filter-section', {
            containerSelector: '.wrapper',
            innerWrapperSelector: '.isotope_items',
            resizeSensor: true,
            topSpacing: 90,
            bottomSpacing: 20
        });

};



  // OWL CAROUSEL GENERAL JS
var owlcar = $('.owl-carousel');
if (owlcar.length) {
    owlcar.each(function () {
        var $owl = $(this);
        var itemsData = $owl.data('items');
        var autoPlayData = $owl.data('autoplay');
        var paginationData = $owl.data('pagination');
        var navigationData = $owl.data('navigation');
        var stopOnHoverData = $owl.data('stop-on-hover');
        var itemsDesktopData = $owl.data('items-desktop');
        var itemsDesktopSmallData = $owl.data('items-desktop-small');
        var itemsTabletData = $owl.data('items-tablet');
        var itemsTabletSmallData = $owl.data('items-tablet-small');
        $owl.owlCarousel({
            items: itemsData
            , pagination: paginationData
            , navigation: navigationData
            , autoPlay: autoPlayData
            , stopOnHover: stopOnHoverData
            , navigationText: ["<", ">"]
            , itemsCustom: [
                [0, 1]
                , [500, itemsTabletSmallData]
                , [710, itemsTabletData]
                , [992, itemsDesktopSmallData]
                , [1199, itemsDesktopData]
            ]
        , });
    });
}
    
    
}); // document ready end 


























