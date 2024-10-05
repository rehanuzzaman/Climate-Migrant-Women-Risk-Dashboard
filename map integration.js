// Initialize the Leaflet map
const map = L.map('map').setView([23.8103, 90.4125], 4); // Center at Dhaka

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Add markers for each region
const regions = {
    "dhaka": [23.8103, 90.4125],
    "sahel": [15.0, 0.0],
    "amazon": [-3.4653, -62.2159]
    // Add more regions as needed
};

for (const region in regions) {
    const marker = L.marker(regions[region]).addTo(map)
        .bindPopup(`<b>${region}</b>`)
        .on('click', function() {
            document.getElementById('regionSelect').value = region;
            updateRegionData();  // Update the dashboard data
        });
}
