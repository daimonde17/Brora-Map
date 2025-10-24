// map.js

// --- CONFIGURATION ---
const key = 'IqnUegJUuhHZkXbSXgFG'; // Your MapTiler API Key
const mapCenterLat = 58.0123; 
const mapCenterLng = -3.8523; 
const zoomLevel = 16; 

// --- MAP INITIALIZATION ---
const map = L.map('map').setView([mapCenterLat, mapCenterLng], zoomLevel); 


// --- BASEMAPS DEFINITION ---

// 1. MapTiler Historical Map
const maptilerLayer = L.tileLayer(`https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.png?key=${key}`,{
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
});

// 2. OpenStreetMap Standard Layer (Modern reference)
const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});

const baseLayers = {
    "Historical (MapTiler 1888)": maptilerLayer,
    "Modern (OpenStreetMap)": osmLayer 
};

// Start the map with the modern layer
osmLayer.addTo(map); 


// --- GEOJSON DATA (All your marker data in one object) ---
const broraPois = {
    "type": "FeatureCollection",
    "features": [
        // Marker 1: Welcome Center Point (NOTE: coordinates are [Lng, Lat])
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-3.8523, 58.0123] },
            "properties": {
                "title": "Welcome to Brora!",
                "description": "",
                "open_popup": true 
            }
        },
        // Marker 2: The New Heritage & The Old School
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-3.85812, 58.02396] },
            "properties": {
                "title": "The New Heritage & The Old School",
                "description": "This building now houses the Brora Heritage Centre, showcasing local history and artifacts.",
                "image": "https://via.placeholder.com/200x150",
                "link": "https://www.broraheritage.com/"
            }
        },
        // Marker 3: The Library
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-3.85395, 58.01024] },
            "properties": {
                "title": "The Library",
                "description": "The current library, this was built as a drill hall before the first world war. In 1914 the building was drill station for \"F\" Squadron, 2nd Lovat's Scouts and base for \"D\" Company, 5th battalion, Seaforth Highlanders.",
                "image": "images/lib.jpg",
                "link": "https://www.highlifehighland.com/libraries/brora-library-and-cultural-centre/"
            }
        },
        // Marker 4: The Golf Course
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-3.84473002055259, 58.01218137148599] },
            "properties": {
                "title": "The Golf Course",
                "description": "The Golf Course Established in 1891 (the text was corrected from 1981).",
                "link": "https://www.broragolfclub.co.uk/"
            }
        }, // <-- FIX: Comma added here
        // Marker 5: Brora Rangers
        {
            "type": "Feature",
            "geometry": { 
                "type": "Point", 
                "coordinates": [-3.859770436527265, 58.008314929833396] // NOTE: Correct Lng/Lat order
            },
            "properties": { // <-- FIX: Properties object correctly defined
                "title": "Brora Rangers - Founded in 1879",
                "description": "Dundgeon Park, home to Brora Rangers.",
                "image": "images/BR_logo.png", 
                "link": "https://brorarangers.football/"
            } // <-- FIX: Feature object correctly closed
        }
    ] // <-- GeoJSON features array closes correctly
}; // <-- GeoJSON object closes correctly


// --- MARKER DISPLAY LOGIC ---

// Create a feature group to hold your markers (this acts as the overlay layer)
const markerGroup = L.featureGroup();

L.geoJSON(broraPois, {
    // This function runs once for every point in the GeoJSON data
    onEachFeature: function(feature, layer) {
        const props = feature.properties;
        
        // 1. Build the Popup Content using Template Literals (backticks)
        let popupContent = `
            <h3>${props.title}</h3>
            ${props.description ? `<p>${props.description}</p>` : ''}
            ${props.image ? `<img src="${props.image}" alt="${props.title}" style="width:100%; height:auto; margin-bottom: 5px;">` : ''}
            ${props.link ? `<p><a href="${props.link}" target="_blank">Visit their website</a></p>` : ''}
        `;

        // 2. Bind the popup to the marker
        layer.bindPopup(popupContent);
        
        // 3. Check for the custom 'open_popup' property and open it
        if (props.open_popup) {
            layer.openPopup();
        }
    }
}).addTo(markerGroup);


// --- LAYER CONTROL ---

// Add the entire marker group to the map (as an Overlay)
markerGroup.addTo(map);

// Define an object to hold your overlays for the control box
const overlayLayers = {
    "Points of Interest": markerGroup
};

// Add the control to the map
L.control.layers(baseLayers, overlayLayers).addTo(map);