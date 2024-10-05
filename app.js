// Sample Data
const regionData = {
    "dhaka": {
        population: "21M",
        healthRisk: "High",
        economicRisk: "High",
        shelterRisk: "Medium",
        overallRisk: "High",
        avgTemp: "2.0",
        avgPrecip: "2000"
    },
    "sahel": {
        population: "150M",
        healthRisk: "High",
        economicRisk: "Medium",
        shelterRisk: "Low",
        overallRisk: "High",
        avgTemp: "1.5",
        avgPrecip: "400"
    },
    "amazon": {
        population: "35M",
        healthRisk: "Medium",
        economicRisk: "Medium",
        shelterRisk: "Low",
        overallRisk: "Medium",
        avgTemp: "1.5",
        avgPrecip: "1600"
    }
};

// Function to update region data
function updateRegionData() {
    const regionSelect = document.getElementById("regionSelect").value;
    const data = regionData[regionSelect];

    document.getElementById("population").querySelector("span").textContent = data.population;
    document.getElementById("healthRisk").querySelector("span").textContent = data.healthRisk;
    document.getElementById("economicRisk").querySelector("span").textContent = data.economicRisk;
    document.getElementById("shelterRisk").querySelector("span").textContent = data.shelterRisk;
    document.getElementById("overallRisk").querySelector("span").textContent = data.overallRisk;
    document.getElementById("avgTemp").querySelector("span").textContent = data.avgTemp + "°C";
    document.getElementById("avgPrecip").querySelector("span").textContent = data.avgPrecip + " mm";

    // Update Chart
    updateChart(data);
}

// Function to update chart
function updateChart(data) {
    const ctx = document.getElementById('riskChart').getContext('2d');
    const chartData = {
        labels: ['Health Risk', 'Economic Risk', 'Shelter Risk', 'Overall Risk'],
        datasets: [{
            label: 'Risk Level',
            data: [
                data.healthRisk === 'High' ? 3 : (data.healthRisk === 'Medium' ? 2 : 1),
                data.economicRisk === 'High' ? 3 : (data.economicRisk === 'Medium' ? 2 : 1),
                data.shelterRisk === 'High' ? 3 : (data.shelterRisk === 'Medium' ? 2 : 1),
                data.overallRisk === 'High' ? 3 : (data.overallRisk === 'Medium' ? 2 : 1)
            ],
            backgroundColor: ['#FF5733', '#FFC300', '#DAF7A6', '#C70039'],
        }]
    };

    if (window.riskChart) window.riskChart.destroy();  // Destroy previous chart
    window.riskChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 3
                }
            }
        }
    });
}

// Initialize with first region's data
updateRegionData();
