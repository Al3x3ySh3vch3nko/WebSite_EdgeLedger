// Initialize and add the map 
function initMap() {
// Your Location
    const loc = { lat: 55.179692, lng: 37.589161};
// Centered map on location 
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
// The marker, postitioned at location 
    const marker = new google.maps.Marker ({position: loc, map: map}); 
} 

// Sticky menu background 
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;}
        else {
            document.querySelector('#navbar').style.opacity = 1;
        }
});

// Smooth Scrolling 
$('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});