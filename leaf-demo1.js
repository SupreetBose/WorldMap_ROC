var map = L.map( 'map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);
var i=0;

for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].Latitude, markers[i].Longitude] )
	.bindPopup("Applications:"+ markers[i].Applications + "<br>" + "ROC SPOC:"+ markers[i].ROC_SPOC + "<br>" + "Site Name:" + markers[i].Site_Name)
	              .addTo( map );
}