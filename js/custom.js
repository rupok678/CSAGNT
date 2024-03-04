$(function () {
    // working_items
    $('.working_slider').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left nav_left"></i>', '<i class="fa-solid fa-chevron-right nav_right"></i>'],
        autoplayTimeout: 3000,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
                margin:15,
            },
            900: {
                items: 3,
                margin: 15,
                loop: false,
                autoplay: false,
            },
            1000: {
                items: 3,
                loop: false,
                autoplay: false,
            },
            1200: {
                items: 3,
                loop: false,
                autoplay: false,
            },
            1400: {
                items: 3,
                loop: false,
                autoplay: false,
            }
        }
    });

    // team part slider
    $('.expart_members_slider').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left nav_left"></i>', '<i class="fa-solid fa-chevron-right nav_right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
                loop: false,
                margin: 15,
            },
            1000: {
                items: 4,
                loop: false,
                autoplay: false,
            },
            1200: {
                items: 4,
                loop: false,
                autoplay: false,
            },
            1400: {
                items: 4,
                loop: false,
                autoplay: false,
            }
        }
    });

    // team video link
    new VenoBox({
        selector: '.my-video-links',
    });

    $('.testimonials_slider').slick({
        dots: false,
        infinite: true,
        nav:true,
        autoplay:true,
        autoplaySpeed: 2000,
        prevArrow:'.arrow_left',
        nextArrow:'.arrow_right',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


// xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px
// );