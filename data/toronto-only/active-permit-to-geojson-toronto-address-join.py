import pandas as pd
import geopandas as gpd


typename = "laneway-suites"
typecode = "New Laneway / Rear Yard Suite"

# typename = "secondary-suites"
# typecode = "Second Suite (New)"

addresses = gpd.read_file("building-permits/address-pts.gpkg")

file_name = "building-permits/activepermits_jan22024.csv"

df = pd.read_csv(file_name)

df = df.loc[df["WORK"] == typecode]



def geocode(address_id):

    try:

        return addresses.loc[addresses["ADDRESS_POINT_ID"] == address_id]["geometry"].iloc[0]
    
    except:

        return None
    


coords = []
unique_permits = []

i = 0

for index, row in df.iterrows():

    if row["PERMIT_NUM"] not in unique_permits:

        unique_permits.append(row["PERMIT_NUM"])

        address_id = row["GEO_ID"]

        geometry = geocode(address_id)

        coords.append([row["PERMIT_NUM"], geometry])




dfc = pd.DataFrame(coords, columns = ['PERMIT_NUM', 'geometry'])

dfc = gpd.GeoDataFrame(dfc, geometry='geometry')


df.to_csv(typename + "-active-012024update.csv")

dfc.to_file(typename + "-active-012024update.geojson", driver="GeoJSON")
