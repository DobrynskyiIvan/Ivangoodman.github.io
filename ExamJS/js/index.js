function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "nav_context") {
        x.className += " responsive";
    } else {
        x.className = "nav_context";
    }
}
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        adaptiveHeight: true,
        dots: true,
        vertical: true,
        verticalSwiping: true,

    });

    // Add smooth scrolling to   links and hide adaptive navigation
    $('.link').click(function (e) {
        var jump = $(this).attr('href');
        if ($(e.target).hasClass("link")) {
            $(".nav_context").removeClass("responsive");
        }
        e.preventDefault();
        var new_position = $(jump).offset();
        $('html, body').stop().animate({
            scrollTop: new_position.top
        }, 1300);
        return false;
    });

    // change active input in form

    $("input").click(function () {
        $("input").removeClass("active");
        $(this).toggleClass("active");

    });


    $('.sliderTreeple').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '-30px',
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 990,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    fade: true
                }
            }
        ]

    });
    $('.sliderTreeple').on('swipe', function (event, slick, direction) {
        console.log(direction);

    });

});



/// ======== Google map init
function initMap() {
    var cairo = {
        lat: 48.9141283,
        lng: 24.6783888
    };



    map = new google.maps.Map(document.getElementById("map"), {
        center: cairo,
        zoom: 13,
        disableDefaultUI: true,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]

    });
    var marker = new google.maps.Marker({
        map: map,
        position: cairo,
        icon: '/ExamJS/img/Pin_png.png'
    });
}