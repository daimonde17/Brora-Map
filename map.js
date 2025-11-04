// map.js

// --- CONFIGURATION ---
const key = 'IqnUegJUuhHZkXbSXgFG'; // Your MapTiler API Key
const mapCenterLat = 58.0123; 
const mapCenterLng = -3.8523; 
const zoomLevel = 15; 

// --- GEOJSON DATA (All your marker data in one object) ---
const broraPois = {
    "type": "FeatureCollection",
    "features": [
        // Marker 1: Brewery Lower Brora
{
    "type": "Feature",
    "geometry": { 
        "type": "Point", 
        "coordinates": [-3.849, 58.010]
    },
    "properties": {
        "title": "Brewery Lower Brora",
        "description": "The brewery was built in 1817 near Brora Harbour. The building was later used as a lemonade factory under Mr D Bremner, who had come from Wick. In order to encourage the use of malt liquor, in hope that in time it would supersede the use of whisky, Lady Stafford advanced £200 for the construction of a small brewery (at Brora).",
        "links": [
            { "text": "View Highland HER Record", "url": "https://her.highland.gov.uk/Monument/MHG32863" }
        ]
    }
},
       
        // Marker 2: The New Heritage Centre & The Old School
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-3.85812, 58.02396] }, // FIXED: [lng, lat]
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
            "geometry": { "type": "Point", "coordinates": [-3.85395, 58.01024] }, // FIXED: [lng, lat]
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
            "geometry": { "type": "Point", "coordinates": [-3.84473002055259, 58.01218137148599] }, // FIXED: [lng, lat]
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
                "coordinates": [-3.859770436527265, 58.008314929833396]  // FIXED: [lng, lat]
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
        // Marker 6: Clynelish Distillery
        {
            "type": "Feature",
            "geometry": { 
                "type": "Point", 
                "coordinates": [-3.868194, 58.023816]  // FIXED: [lng, lat]
            },
            "properties": {
                "title": "Clynelish Distillery",
                "description": "Known as the 'Highland Home of Johnnie Walker,' famous for its waxy, fruity single malt.",
                "links": [ 
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
                "coordinates": [-3.912052, 57.987215] // FIXED: [lng, lat]
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
                "coordinates": [-3.945278, 57.981944] // FIXED: [lng, lat]
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
        },
// Marker 9: The Stafford Arms Hotel (MHG32870)
{
    "type": "Feature",
    "geometry": { 
        "type": "Point", 
        "coordinates": [-3.84702, 58.00990] // Approximate coordinates for Lower Brora
    },
    "properties": {
        "title": "The Stafford Arms Hotel (Historic Inn) 🍻",
        "description": "The Stafford Arm's Inn was built in 1819 by the 1st Duke of Sutherland. The building was demolished in the 1950s.",
        
        "links": [
            { "text": "View Highland HER Record (MHG32870)", "url": "https://her.highland.gov.uk/Monument/MHG32870" },

        ]
    }
},
// Marker 10: Brora Y Station
{
    "type": "Feature",
    "geometry": { 
        "type": "Point", 
        "coordinates": [-3.84845, 58.00700] // Longitude then Latitude
    },
    "properties": {
        "title": "Brora Y Station (GCHQ) 🤫",
        "description": "A former top-secret Government listening station that operated from 1940-1986. It collected intelligence for Bletchley Park during WWII and later served as a GCHQ Cold War monitoring post.",
        "links": [
            { "text": "Read more on Wikipedia", "url": "https://en.wikipedia.org/wiki/Brora_Y_Station" },
{ "text": "It is now a less secretive Caravan Park", "url": "https://www.campingandcaravanningclub.co.uk/campsites/uk/highland/sutherland/seabreezescaravanpark/" }
        ]
    }
},
{
    "type": "Feature", 
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-3.86643, 58.01176],  // North 
            [-3.86532, 58.01141],  // East 
            [-3.86620, 58.01106],  // South
            [-3.86745, 58.01137],  // west
            [-3.86643, 58.01176]   // Close the polygon
        ]]
    },
    "properties": {
        "title": "Brora Brick and Tile Works 🧱",
        "description": "The brickyard at Brora started in 1814, closed in 1826, re-opened in 1873, and was taken over by the tweed firm, Hunters, in 1914. They ceased operations in 1949, but the brickyard did not close until the 1970s.",
        "color": "#8B0000",      // Brick red
        "fillOpacity": 0.25,     // Light transparency
        "stroke": true,
        "color": "#8B0000",
        "strokeColor": "#8B0000", // Brick red border (changed from just "color")
        "weight": 2,
        "links": [
            { "text": "Scottish Brick History", "url": "https://www.scottishbrickhistory.co.uk/brora-brick-and-tile-works-brora-sutherland/" }
        ]
    }
}
    ] 
};


// --- ERROR CHECKING ---
console.log("Map script loaded");
console.log("Map center:", mapCenterLat, mapCenterLng);
console.log("Number of POIs:", broraPois.features.length);

// --- MAP INITIALIZATION ---
const map = L.map('map').setView([mapCenterLat, mapCenterLng], zoomLevel); 

// --- BASEMAPS DEFINITION ---

// 1. MapTiler Historical Map
const maptilerLayer = L.tileLayer(`https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.png?key=${key}`,{
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "&copy; <a href='https://www.maptiler.com/copyright/' target='_blank'>MapTiler</a> &copy; <a href='https://www.nls.uk/copyright/' target='_blank'>National Library of Scotland</a> &copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap contributors</a>",
    crossOrigin: true
});
// Add this new layer to your map.js (keep your existing layers)
const nls25inchLayer = L.tileLayer('https://mapseries-tilesets.s3.amazonaws.com/25_inch/scotland_2/{z}/{x}/{y}.png', {
    minZoom: 10,
    maxZoom: 18,
    attribution: '&copy; National Library of Scotland',
    bounds: [[54.5, -6.5], [61.5, -0.5]] // Covers all of Scotland
});

// 2. OpenStreetMap Standard Layer (Modern reference)
const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});

const baseLayers = {
    "25-inch Historical (NLS)": nls25inchLayer,
    "Historical (MapTiler 1888)": maptilerLayer,
    "Modern (OpenStreetMap)": osmLayer 
};

// Start with the new 25-inch map as default
nls25inchLayer.addTo(map);

// Start the map with the 1888 layer
maptilerLayer.addTo(map); 

// --- MARKER DISPLAY LOGIC (UPDATED FOR MULTIPLE LINKS) ---

const markerGroup = L.featureGroup().addTo(map); // Add to map immediately

L.geoJSON(broraPois, {
    // 1. pointToLayer is used for custom icon logic (for Points only)
    pointToLayer: function (feature, latlng) {
        if (feature.geometry.type === 'Point') {
            if (feature.properties.is_special) {
                const redIcon = L.AwesomeMarkers.icon({
                    icon: 'home', 
                    markerColor: 'red',
                    prefix: 'fa' 
                });
                return L.marker(latlng, {icon: redIcon});
            }
            const blueIcon = L.AwesomeMarkers.icon({
                markerColor: 'blue',
                prefix: 'fa'
            });
            return L.marker(latlng, {icon: blueIcon});
        }
        // For non-Point geometries, return null (they'll be handled by style function)
        return null;
    },

    // 2. ADD THIS NEW STYLE FUNCTION for Polygons
    style: function(feature) {
        if (feature.geometry.type === 'Polygon') {
            return {
                fillColor: feature.properties.color || '#3388ff', // Use custom color or default blue
                fillOpacity: feature.properties.fillOpacity || 0.2,
                color: feature.properties.strokeColor || feature.properties.color || '#3388ff',
                weight: feature.properties.weight || 2,
                opacity: feature.properties.opacity || 1.0
            };
        }
        // For points, return empty object (use default styles)
        return {};
    },

    // 3. onEachFeature is used for popup logic (same as before)
    onEachFeature: function(feature, layer) {
        const props = feature.properties;
        
        let linksHTML = '';
        if (props.links && Array.isArray(props.links)) {
            linksHTML = props.links.map(link => 
                `<p><a href="${link.url}" target="_blank">${link.text}</a></p>`
            ).join('');
        }
        
        let popupContent = `
            <h3>${props.title}</h3>
            ${props.description ? `<p>${props.description}</p>` : ''}
            ${props.image ? `<img src="${props.image}" alt="${props.title}" style="width:100%; height:auto; margin-bottom: 5px;">` : ''}
            ${linksHTML}
        `;

        layer.bindPopup(popupContent);
        if (props.open_popup) {
            setTimeout(() => {
                layer.openPopup();
            }, 500);
        }
    }
}).addTo(markerGroup);

// --- LAYER CONTROL ---
const overlayLayers = {
    "Points of Interest": markerGroup
};

// This line adds the Map Options control to the map!
L.control.layers(baseLayers, overlayLayers).addTo(map);

// --- INTRODUCTION BOX CLOSE FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', function() {
    const introBox = document.getElementById('intro-box');
    const closeButton = document.getElementById('close-intro');
    
    if (closeButton && introBox) {
        closeButton.addEventListener('click', function() {
            introBox.classList.add('hidden');
        });
    }
});