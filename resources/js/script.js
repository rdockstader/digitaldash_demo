var map = new GMaps({
    div: '.map',
    lat: 41.7484010,
    lng: -111.8077387,
    zoom: 17
});

map.addMarker({
  lat: 41.7484010,
  lng: -111.8077387,
});

map.addMarker({
  lat: 41.7474010,
  lng: -111.8077387,
});

map.addMarker({
  lat: 41.7478010,
  lng: -111.8077387,
});

map.addMarker({
  lat: 41.7484010,
  lng: -111.8097387,
});

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({scrollTop: target.offset().top }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });