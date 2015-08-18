// Sliders parameters
$(document).ready(function(){
    // Top slider
    $('#top-slider').carousel({
        interval: 3000
    });
    // /.Top slider
    
    // Promo slider
    $('#promo-slider').carousel({
        interval: 1500
    });
    // /.Promo slider
    
    mobileMenu();
    
    // Timer
    $('.timer').countTo();
    // /.Timer
    
    // Paralax effect
    var s = scrollr.init({forceHeight: false});
    // /.Paralax effect
});
// /.Sliders parameters

// Change header size after scroll
$(window).bind('scroll', function(event) {
    if($(window).scrollTop() > 20) {
        $('.main-header').addClass('header-short');
        $('.main-logo img').css('max-height', 28);
    } else {
        $('.main-header').removeClass('header-short');
        $('.main-logo img').css('max-height', 42);
    }
});
// /.Change header size after scroll

// Mobile menu
function mobileMenu() {
    $('#mobile-icon').bind('click', function(event) {
        event.preventDefault(); // chodzi tutaj o wyłączenie domyślnej akcji dla (w tym wypadku) dla odnośnika
        $('#main-nav-mobile').show(1500);
    });
    
    $('#mobile-close').bind('click', function(event) {
        event.preventDefault(); // chodzi tutaj o wyłączenie domyślnej akcji dla (w tym wypadku) dla odnośnika
        $('#main-nav-mobile').hide(1500);
    });
}
// /.Mobile menu