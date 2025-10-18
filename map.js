// map.js
const key = 'IqnUegJUuhHZkXbSXgFG'; // Your valid key

// Use your final, accurate coordinates here:
const mapCenterLat = 58.0123; 
const mapCenterLng = -3.8523; 
const zoomLevel = 16; 

const map = L.map('map').setView([mapCenterLat, mapCenterLng], zoomLevel); 

L.tileLayer(`https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.png?key=${key}`,{
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
}).addTo(map);

// Marker 1: Welcome Center Point
L.marker([mapCenterLat, mapCenterLng])
    .addTo(map)
    .bindPopup('Welcome to Brora!')
    .openPopup(); 

// Marker 2: The New Heritage & The Old School
L.marker([58.02396, -3.85812]) 
    .addTo(map)
    .bindPopup(
        '<h3>The New Heritage & The Old School</h3>' +
        '<p>This building now houses the Brora Heritage Centre, showcasing local history and artifacts.</p>' +
        '<img src="https://via.placeholder.com/200x150" alt="Image of the Heritage Centre" style="width:100%; height:auto;">' + 
        '<p><a href="https://www.broraheritage.com/" target="_blank">Visit their website</a></p>'
    );

// Marker 3: The Library (NEW, non-overlapping coordinates)
L.marker([58.01043944105685, -3.853799185858272]) // <--- Adjusted coordinates
    .addTo(map)
    .bindPopup(
        '<h3>The Library</h3>' +
        '<p>The current library, this was built as a drill hall before the first world war. In 1914 the building was drill station for "F" Squadron, 2nd Lovat\'s Scouts and base for "D" Company, 5th battalion, Seaforth Highlanders.</p>' +
        '<img src="images/lib.jpg" alt="Image of the library" style="width:100%; height:auto;">' + // <--- Corrected image path
        '<p><a href="https://www.highlifehighland.com/libraries/brora-library-and-cultural-centre/" target="_blank">Visit their website</a></p>'
    );

// Marker 4: The Golf Course (NEW, non-overlapping coordinates)
L.marker([58.01218137148599, -3.84473002055259]) //
.addTo(map)
    .bindPopup(
        '<h3>The Golf Course</h3>' +
'<p>The Golf Course Established in 1981</p>' +
'<p><a href="https://www.broragolfclub.co.uk/" target="_blank">Visit their website</a></p>'
    );



