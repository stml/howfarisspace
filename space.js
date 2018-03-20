var map;
var circles;

// Distances in metres
var troposphere = 20000;
var stratosphere = 50000;
var mesosphere = 85000;
var karman_line = 100000;
var thermosphere = 690000;
var exosphere = 10000000;

$( document ).ready(function() {
  var layer = new L.StamenTileLayer("toner-lite");
  map = new L.Map("this_map", {
    center: new L.LatLng(37.98, 23.72),
    zoom: 8
  });
  map.addLayer(layer);
  circles = new L.LayerGroup();
  draw(map.getCenter());
  map.on('click', getCenter);
});

function getCenter(e) {
    draw(e.latlng);
}

function draw(center) {
    circles.clearLayers();
    circles.addLayer(L.circle(center, { color: 'LightCoral', fillColor: 'LightCoral', fillOpacity: 0.2, radius: exosphere }));
    circles.addLayer(L.circle(center, { color: 'lightblue', fillColor: 'lightblue', fillOpacity: 0.2, radius: thermosphere }));
    circles.addLayer(L.circle(center, { color: 'red', fillColor: 'red', fillOpacity: 0, radius: karman_line }));
    circles.addLayer(L.circle(center, { color: 'purple', fillColor: 'purple', fillOpacity: 0.2, radius: mesosphere }));
    circles.addLayer(L.circle(center, { color: 'green', fillColor: 'green', fillOpacity: 0.2, radius: stratosphere }));
    circles.addLayer(L.circle(center, { color: 'orange', fillColor: 'orange', fillOpacity: 0.2, radius: troposphere }));

    circles.addTo(map);
}
