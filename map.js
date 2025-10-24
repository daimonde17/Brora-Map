// map.js

// --- CONFIGURATION ---
const key = 'IqnUegJUuhHZkXbSXgFG'; // Your MapTiler API Key
const mapCenterLat = 58.0123; 
const mapCenterLng = -3.8523; 
const zoomLevel = 16; 

// --- MAP INITIALIZATION ---
// Create the map and set the starting view
const map = L.map('map').setView([mapCenterLat, mapCenterLng], zoomLevel); 


// --- BASEMAPS DEFINITION ---

// 1. MapTiler Historical Map (Your historical layer)
const maptilerLayer = L.tileLayer(`https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.png?key=${key}`,{
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
});

// 2. OpenStreetMap Standard Layer (The reliable modern reference)
const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});

// Define an object to hold your base layers for the control box
const baseLayers = {
    "Historical (MapTiler 1888)": maptilerLayer,
    "Modern (OpenStreetMap)": osmLayer 
};

// Start the map with the modern layer for better initial visibility
osmLayer.addTo(map); 


// --- MARKERS DEFINITION (Overlay) ---

// Create a feature group to hold your markers (this lets the layer control turn them on/off)
const markerGroup = L.featureGroup();

// Marker 1: Welcome Center Point
L.marker([mapCenterLat, mapCenterLng])
    .addTo(markerGroup) 
    .bindPopup('Welcome to Brora!')
    .openPopup(); 

// Marker 2: The New Heritage & The Old School
L.marker([58.02396, -3.85812]) 
    .addTo(markerGroup)
    .bindPopup(
        '<h3>The New Heritage & The Old School</h3>' +
        '<p>This building now houses the Brora Heritage Centre, showcasing local history and artifacts.</p>' +
        '<img src="https://via.placeholder.com/200x150" alt="Image of the Heritage Centre" style="width:100%; height:auto;">' + 
        '<p><a href="https://www.broraheritage.com/" target="_blank">Visit their website</a></p>'
    );

// Marker 3: The Library (Adjusted Coordinates for less overlap)
L.marker([58.01024, -3.85395]) 
    .addTo(markerGroup)
    .bindPopup(
        '<h3>The Library</h3>' + 
        // Note: The apostrophe in "Lovat\'s" is correctly escaped for JavaScript
        '<p>The current library, this was built as a drill hall before the first world war. In 1914 the building was drill station for "F" Squadron, 2nd Lovat\'s Scouts and base for "D" Company, 5th battalion, Seaforth Highlanders. .</p>' + 
        '<img src="images/lib.jpg" alt="Image of the library" style="width:100%; height:auto;">' + 
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
    
// Add the entire marker group to the map
markerGroup.addTo(map);

// Define an object to hold your overlays for the control box
const overlayLayers = {
    "Points of Interest": markerGroup
};

// --- ADD THE LAYER CONTROL ---

// Add the control to the map
L.control.layers(baseLayers, overlayLayers).addTo(map);