# Install necessary packages
# Run this in your local environment, not in Google Colab
# pip install requests pandas

# Import necessary libraries
import requests
import pandas as pd

# Define your NASA Earthdata credentials
USERNAME = 'rehan.bd'  # Replace with your NASA Earthdata username
PASSWORD = '10101162rz@A'  # Replace with your NASA Earthdata password

# Define API parameters
collection_id = 'MODIS/Terra/Aerosol'  # Example dataset
start_date = '2024-09-01'  # Start date
end_date = '2024-09-30'    # End date
bounding_box = '90,-180,-90,180'  # Define your bounding box (min_lat, min_lon, max_lat, max_lon)

# Define the search URL for GES DISC
search_url = f'https://gdata.nasa.gov/gesdisc/rest-api/v1.0/collections/{collection_id}/search'

# Prepare the search request payload
params = {
    "start": start_date,
    "end": end_date,
    "bounding_box": bounding_box,
    "limit": 1000  # Adjust the limit as necessary
}

# Print the URL for debugging
print("Requesting data from:", search_url)

# Send the search request with basic auth
try:
    response = requests.get(search_url, params=params, auth=(USERNAME, PASSWORD))

    # Check for successful response
    if response.status_code == 200:
        print("Data fetched successfully!")
        data = response.json()

        # Extract data and convert to DataFrame
        records = data.get('records', [])
        df = pd.DataFrame(records)

        # Display the first few rows of the DataFrame
        print(df.head())

        # Save DataFrame to a CSV file
        csv_filename = "nasa_earthdata_gdisc_modis_data_september_2024.csv"
        df.to_csv(csv_filename, index=False)
        print(f"Data saved as '{csv_filename}'")
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
        print("Response:", response.json())
except Exception as e:
    print("An error occurred:", str(e))
