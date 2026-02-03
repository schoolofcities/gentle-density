import pandas as pd
import geopandas as gpd



typename = "rear_active_v2"
typecode = "New Laneway / Rear Yard Suite"

file_name = "building-permits/building-permits-active-permits.csv"
year_col = "ISSUED_DATE"

# file_name = "building-permits/clearedpermits2017to2025.csv"
# year_col = "COMPLETED_DATE"

addresses = gpd.read_file("building-permits/address-points.gpkg")


def geocode(address_id):

	try:

		return addresses.loc[addresses["ADDRESS_POINT_ID"] == address_id]["geometry"].iloc[0]
	
	except:

		return None


def read_permit_data_by_year(year):

	df = pd.read_csv(file_name)

	df = df.loc[df["WORK"] == typecode]

	# df = df.loc[df["STATUS"] == "Closed"]

	df = df[df[year_col].astype(str).str[:4] == year]

	coords = []
	unique_permits = []

	for index, row in df.iterrows():
		
		if row["PERMIT_NUM"] not in unique_permits:

			unique_permits.append(row["PERMIT_NUM"])

			address_id = row["GEO_ID"]

			geometry = geocode(address_id)

			coords.append([row["PERMIT_NUM"], geometry])




	dfc = pd.DataFrame(coords, columns = ['PERMIT_NUM', 'geometry'])

	dfc = gpd.GeoDataFrame(dfc, geometry='geometry')

	dfc["year"] = year

	return df, dfc



df_table = []
df_geo = []

# for year in ["2013","2014","2015","2016","2017","2018", "2019", "2020", "2021", "2022"]:

for year in ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"]:

	print(year)

	df, dfc = read_permit_data_by_year(year)

	df_table.append(df)
	df_geo.append(dfc)

df_table = pd.concat(df_table)
df_geo =  gpd.GeoDataFrame(pd.concat(df_geo))

df_table.to_csv(typename + ".csv")
df_geo.to_file(typename + ".geojson", driver="GeoJSON")

#
