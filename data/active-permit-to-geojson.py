import pandas as pd
import geopandas as gpd
from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="geocoder2")

typename = "laneway-suites"
typecode = "New Laneway / Rear Yard Suite"


def geocode(street_num, street_name, street_type, street_dir):

    location = geolocator.geocode(street_num + " " + street_name + " " + street_type + " " + street_dir + ", Toronto, Canada")

    return([location.longitude, location.latitude])



file_name = "building-permits/activepermits.csv"

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

            xy = geocode(row["STREET_NUM"], row["STREET_NAME"], street_type, row["STREET_DIRECTION"])

            coords.append([row["PERMIT_NUM"], round(xy[0], 6), round(xy[1], 6)])

        except:

            print(row["PERMIT_NUM"], row["STREET_NUM"], row["STREET_NAME"], row["STREET_TYPE"], row["STREET_DIRECTION"])

            coords.append([row["PERMIT_NUM"], 0, 0])

    # i += 1
    # if i > 20:
    #     break


dfc = pd.DataFrame (coords, columns = ['PERMIT_NUM', 'X', 'Y'])

dfc = gpd.GeoDataFrame(dfc, geometry=gpd.points_from_xy(dfc.X, dfc.Y))

dfc = dfc[["PERMIT_NUM","geometry"]]

df.to_csv(typename + "-active.csv")
dfc.to_file(typename + "-active.geojson")
