import pandas as pd
import geopandas as gpd
from geopy.geocoders import Nominatim
import requests
import json
import time

# geolocator = Nominatim(user_agent="geocoder2")

# geolocator.geocode("Toronto, Canada")

# typename = "laneway-suites"
# typecode = "New Laneway / Rear Yard Suite"

typename = "secondary-suites"
typecode = "Second Suite (New)"


# def geocode(street_num, street_name, street_type, street_dir):

#     location = geolocator.geocode(street_num + " " + street_name + " " + street_type + " " + street_dir + ", Toronto, Canada")

#     print(location)

#     return([location.longitude, location.latitude])

def geocode(address):

    try:
        
        address_full = address 

        url = "https://nominatim.openstreetmap.org/search/" + address + "?format=json&addressdetails=2&limit=1"

        page = requests.get(url)

        data = json.loads(page.content)
        
        # return data # switch this out with the next line if you want to see the full data that is being returned

        return(data[0]['lon'], data[0]['lat'])
    
    except:
        
        return(0,0)
    


file_name = "building-permits/activepermits_june152023.csv"

df = pd.read_csv(file_name)

df = df.loc[df["WORK"] == typecode]

print(df)

coords = []
unique_permits = []

i = 0

for index, row in df.iterrows():

    street_type = row["STREET_TYPE"]

    if street_type == "CRCL":
        street_type = "CIRCLE"

    if street_type == "GRV":
        street_type = "GROVE"

    if street_type == "GT":
        street_type = "GATE"
    
    if row["PERMIT_NUM"] not in unique_permits:

        try:

            unique_permits.append(row["PERMIT_NUM"])

            address = row["STREET_NUM"] + " " + row["STREET_NAME"] + " " + street_type + " " + row["STREET_DIRECTION"] + ", Toronto, Canada"

            xy = geocode(address)

            coords.append([row["PERMIT_NUM"], round(float(xy[0]), 6), round(float(xy[1]), 6)])

        except:

            print(row["PERMIT_NUM"], row["STREET_NUM"], row["STREET_NAME"], row["STREET_TYPE"], row["STREET_DIRECTION"])

            coords.append([row["PERMIT_NUM"], 0, 0])

        time.sleep(1.2)

    # i += 1
    # if i > 5:
    #     break

dfc = pd.DataFrame (coords, columns = ['PERMIT_NUM', 'X', 'Y'])

dfc = gpd.GeoDataFrame(dfc, geometry=gpd.points_from_xy(dfc.X, dfc.Y))

dfc = dfc[["PERMIT_NUM", 'X', 'Y',"geometry"]]

print(dfc)

df.to_csv(typename + "-active-072023update-v3.csv")
dfc.to_file(typename + "-active-072023update-v3.geojson", driver="GeoJSON")
