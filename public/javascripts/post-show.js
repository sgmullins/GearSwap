mapboxgl.accessToken = 'pk.eyJ1Ijoic2dtdWxsaW5zIiwiYSI6ImNrMWh6dnJ0ZzBnYmgzY3RmZDZxYXFucXgifQ.Vqrythg8C_92z-tIGR_npg';
                    
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: post.coordinates,
    zoom: 5
 });
                    
// create a HTML element for our post location/marker
var el = document.createElement('div');
el.className = 'marker';
            
// make a marker for our location and add to the map
new mapboxgl.Marker(el)
    .setLngLat(post.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 5 }) // add popups
    .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
    .addTo(map);
            
// Toggle edit review form
$('.toggle-edit-form').on('click', function() {
	// toggle the edit button text on click
	$(this).text() === 'Edit' ? $(this).text('Cancel') : $(this).text('Edit');
	// toggle visibility of the edit review form
	$(this).siblings('.edit-review-form').toggle();
});