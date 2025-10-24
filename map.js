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
        // Marker 1: Welcome Center Point 
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-3.8523, 58.0123] },
            "properties": {
                "title": "Welcome to Brora!",
                "description": "Click the items for info & links, see the top right for an alternate 1888 map",
                "open_popup": true,
                "is_special": true 
            }
        },
        // Marker 2: The New Heritage Centre & The Old School
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-3.85812, 58.02396] },
            "properties": {
                "title": "The New Heritage Centre & The Old School",
                "description": "This building now houses the Brora Heritage Centre, showcasing local history and artifacts.",
                "image": "images/broraheritagelogo.jpg",
                "links": [ 
                    { "text": "Visit their website", "url": "https://www.broraheritage.com/" }
                ]
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
                "links": [ 
                    { "text": "Visit their website", "url": "https://www.highlifehighland.com/libraries/brora-library-and-cultural-centre/" }
                ]
            }
        },
        // Marker 4: The Golf Course
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-3.84473002055259, 58.01218137148599] },
            "properties": {
                "title": "The Golf Course",
                "description": "The Golf Course Established in 1891.",
                "links": [ 
                    { "text": "Go to Golf Club Website", "url": "https://www.broragolfclub.co.uk/" }
                ]
            }
        }, 
        // Marker 5: Brora Rangers
        {
            "type": "Feature",
            "geometry": { 
                "type": "Point", 
                "coordinates": [-3.859770436527265, 58.008314929833396] 
            },
            "properties": { 
                "title": "Brora Rangers - Founded in 1879",
                "description": "Dundgeon Park, home to Brora Rangers.",
                "image": "images/BR_logo.png", 
                "links": [ 
                    { "text": "Go to Club Website", "url": "https://brorarangers.football/" }
                ]
            } 
        },
        // Marker 6: Clynelish Distillery - WITH MULTIPLE LINKS
        {
            "type": "Feature",
            "geometry": { 
                "type": "Point", 
                "coordinates": [-3.868194, 58.023816] 
            },
            "properties": {
                "title": "Clynelish Distillery",
                "description": "Known as the 'Highland Home of Johnnie Walker,' famous for its waxy, fruity single malt.",
                "links": [ // <-- NEW LINKS ARRAY
                    { "text": "Official Distillery Site", "url": "https://www.malts.com/en-gb/distilleries/clynelish" },
                    { "text": "Wikipedia Page", "url": "https://en.wikipedia.org/wiki/Clynelish_distillery" },
		{ "text": "Some history of the distillery", "url": "https://www.wanderingspiritsglobal.com/clynelish-brora-distillery/" }
                ]
            }
        },
// Marker 7: Carn Liath Broch (Iron Age)
        {
            "type": "Feature",
            "geometry": { 
                "type": "Point", 
                "coordinates": [-3.912052, 57.987215] 
            },
            "properties": {
                "title": "Carn Liath Broch (Iron Age)",
                "description": "A well-preserved Iron Age broch dating back over 2,000 years, managed by Historic Environment Scotland.",
                "links": [
                    { "text": "Wikipedia Page", "url": "https://en.wikipedia.org/wiki/Carn_Liath_(broch)" },
                    { "text": "Historic Environment Scotland", "url": "https://www.historicenvironment.scot/visit-a-place/places/carn-liath-broch/" }
                ]
            }
        },
 // Marker 8: Dunrobin Castle (Stately Home)
        {
            "type": "Feature",
            "geometry": { 
                "type": "Point", 
                "coordinates": [-3.945278, 57.981944] // Longitude then Latitude
            },
            "properties": {
                "title": "Dunrobin Castle",
                "description": "The stately home of the Earl of Sutherland, featuring spectacular French-style gardens and architecture dating back to the 13th century.",
"image": "images/dunrobin.jpg",
                "links": [
                    { "text": "Official Castle Website", "url": "https://www.dunrobincastle.co.uk/" },
                    { "text": "Wikipedia Page", "url": "https://en.wikipedia.org/wiki/Dunrobin_Castle" }
                ]
            }
        }
    ] 
};


// --- MARKER DISPLAY LOGIC (UPDATED FOR MULTIPLE LINKS) ---

const markerGroup = L.featureGroup();

L.geoJSON(broraPois, {
    // 1. pointToLayer is used for custom icon logic
    pointToLayer: function (feature, latlng) {
        if (feature.properties.is_special) {
            // Create a custom red icon for the Welcome marker
            const redIcon = L.AwesomeMarkers.icon({
                icon: 'home', 
                markerColor: 'red',
                prefix: 'fa' 
            });
            // Return the custom marker
            return L.marker(latlng, {icon: redIcon});
        }
        // For all other markers, return the default Leaflet marker (blue)
        return L.marker(latlng);
    },

    // 2. onEachFeature is used for popup logic
    onEachFeature: function(feature, layer) {
        const props = feature.properties;
        
        // ** NEW LINK LOGIC **
        let linksHTML = '';
        if (props.links && Array.isArray(props.links)) {
            // Loop through each object in the 'links' array and create an anchor tag
            linksHTML = props.links.map(link => 
                `<p><a href="${link.url}" target="_blank">${link.text}</a></p>`
            ).join(''); // Joins the list of HTML strings into one block
        }
        
        // Build the Popup Content
        let popupContent = `
            <h3>${props.title}</h3>
            ${props.description ? `<p>${props.description}</p>` : ''}
            ${props.image ? `<img src="${props.image}" alt="${props.title}" style="width:100%; height:auto; margin-bottom: 5px;">` : ''}
            ${linksHTML}
        `;

        // Bind and open popup if necessary
        layer.bindPopup(popupContent);
        if (props.open_popup) {
            layer.openPopup();
        }
    }
}).addTo(markerGroup);


// --- LAYER CONTROL ---
markerGroup.addTo(map);

const overlayLayers = {
    "Points of Interest": markerGroup
};

L.control.layers(baseLayers, overlayLayers).addTo(map);