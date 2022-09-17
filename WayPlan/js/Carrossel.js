$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, //2000ms = 2s
    autoplayHoverPause: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
});