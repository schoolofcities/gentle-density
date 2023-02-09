import pandas as pd
import geopandas as gpd
from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="geocoder2")

# typename = "secondary-suites"
# typecode = "Second Suite (New)"

typename = "laneway-garden-suites"
typecode = "New Laneway / Rear Yard Suite"


def geocode(street_num, street_name, street_type, street_dir):

    location = geolocator.geocode(street_num + " " + street_name + " " + street_type + " " + street_dir + ", Toronto, Canada")

    return([location.longitude, location.latitude])

def read_permit_data_by_year(year):

    file_name = "building-permits/clearedpermits" + year + ".csv"

    df = pd.read_csv(file_name)

    df = df.loc[df["WORK"] == typecode]

    df = df.loc[df["STATUS"] == "Closed"]

    coords = []
    unique_permits = []

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

                coords.append([row["PERMIT_NUM"], round(xy[0], 6), round(xy[1], 6), year])

            except:

                print(row["PERMIT_NUM"], row["STREET_NUM"], row["STREET_NAME"], row["STREET_TYPE"], row["STREET_DIRECTION"], year)

                coords.append([row["PERMIT_NUM"], 0, 0, year])



    dfc = pd.DataFrame (coords, columns = ['PERMIT_NUM', 'X', 'Y', "year"])

    dfc = gpd.GeoDataFrame(dfc, geometry=gpd.points_from_xy(dfc.X, dfc.Y))

    dfc = dfc[["PERMIT_NUM","geometry", "year"]]

    return df, dfc



df_table = []
df_geo = []

for year in ["2013","2014","2015","2016","2017","2018", "2019", "2020", "2021", "2022"]:

    print(year)

    df, dfc = read_permit_data_by_year(year)

    df_table.append(df)
    df_geo.append(dfc)

df_table = pd.concat(df_table)
df_geo =  gpd.GeoDataFrame(pd.concat(df_geo))

df_table.to_csv(typename + ".csv")
df_geo.to_file(typename + ".geojson", driver="GeoJSON")
