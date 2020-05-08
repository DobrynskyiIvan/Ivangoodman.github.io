$(document).ready(function () {
    $('.slider').slick({

        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 4,
        autoplay: true,
        variableWidth: true,
        arrows: true,
        responsive: [{

                breakpoint: 1440,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 3,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



});