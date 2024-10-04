import requests
import pandas as pd

# Define the API endpoint and parameters
url = "https://power.larc.nasa.gov/api/temporal/daily/point"
params = {
    'start': '20240901',  # Start date in YYYYMMDD format
    'end': '20240930',    # End date in YYYYMMDD format
    'latitude': 21.4333,  # Cox's Bazar Latitude
    'longitude': 92.0058,  # Cox's Bazar Longitude
    'parameters': 'T2M,PRECTOT',  # Specify the parameters you want (e.g., temperature and precipitation)
    'community': 'RE',     # Community type (Renewable Energy)
    'format': 'JSON'       # Response format
}

# Make the API request
response = requests.get(url, params=params)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    
    # Extract the relevant data into a DataFrame
    df = pd.DataFrame(data['properties']['parameter'])
    
    # Display the DataFrame
    print(df)
else:
    print("Error:", response.status_code, response.text)
