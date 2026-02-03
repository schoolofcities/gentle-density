import pandas as pd
import geopandas as gpd



typename = "rear_closed_v2"
typecode = "New Laneway / Rear Yard Suite"

# file_name = "building-permits/building-permits-active-permits.csv"
# year_col = "ISSUED_DATE"

file_name = "building-permits/clearedpermits2017to2025.csv"
year_col = "COMPLETED_DATE"

addresses = gpd.read_file("building-permits/address-points.gpkg")


def geocode(address_id):

	try:

		return addresses.loc[addresses["ADDRESS_POINT_ID"] == address_id]["geometry"].iloc[0]
	
	except:

		return None



df = pd.read_csv(file_name)

df = df.loc[df["WORK"] == typecode]

df = df.loc[df["STATUS"] == "Closed"]

df = df[df[year_col].astype(str).str[:4].isin(
	["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"]
)]

df = df.sort_values(by=[year_col, "REVISION_NUM"], ascending=False)


coords = []
unique_permits = []

for index, row in df.iterrows():
	
	if row["PERMIT_NUM"] not in unique_permits:

		unique_permits.append(row["PERMIT_NUM"])

		address_id = row["GEO_ID"]

		geometry = geocode(address_id)

		year = str(row[year_col])[:4]

		coords.append([row["PERMIT_NUM"], year, geometry])


dfc = pd.DataFrame(coords, columns = ['PERMIT_NUM', 'year', 'geometry'])

dfc = gpd.GeoDataFrame(dfc, geometry='geometry')

dfc.to_file(typename + ".geojson", driver="GeoJSON")

#
