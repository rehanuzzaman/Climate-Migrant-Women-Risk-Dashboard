import requests

# Define the base URL for the NASA GLOBE API
BASE_URL = 'https://api.globe.gov'

# Define API parameters
endpoint = '/search/v1/data'  # Correct endpoint for searching data
params = {
    'protocol': 'aerosols',  # Example protocol; change as necessary
    'startdate': '2024-09-01',  # Start date
    'enddate': '2024-09-30',    # End date
    'organizationid': 'your_organization_id',  # Replace with your Organization ID
    'geojson': 'TRUE',  # Set to 'TRUE' for GeoJSON format
    'sample': 'FALSE',  # Set to 'TRUE' for sample data
}

# Prepare the full URL
url = BASE_URL + endpoint

# Send the request
response = requests.get(url, params=params)

# Check the response
if response.status_code == 200:
    data = response.json()
    print(data)  # Print the data or process it as needed
else:
    print(f"Error: {response.status_code} - {response.text}")
