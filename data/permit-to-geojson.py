import pandas as pd
import geopandas as gpd
from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="geocoder")


def geocode(street_num, street_name, street_type, street_dir):

    location = geolocator.geocode(street_num + " " + street_name + " " + street_type + " " + street_dir + ", Toronto, Canada")

    return([location.longitude, location.latitude])


def read_permit_data_by_year(year):

    file_name = "building-permits/clearedpermits" + year + "_csv.csv"

    df = pd.read_csv(file_name)

    df = df.loc[df["WORK"] == "New Laneway / Rear Yard Suite"]

    print(df)

read_permit_data_by_year("2021")

geocode("436", "CLINTON", "ST", "")