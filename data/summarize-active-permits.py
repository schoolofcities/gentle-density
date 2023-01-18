import pandas as pd
import geopandas as gpd

typename = "laneway-suites"
typecode = "New Laneway / Rear Yard Suite"

df = pd.read_csv(typename + "-active.csv")
gdf = gpd.read_file(typename + "-active.geojson")

df = df.sort_values(by=["PERMIT_NUM","APPLICATION_DATE","REVISION_NUM"]).drop_duplicates(subset="PERMIT_NUM", keep="last")

df = df[df["APPLICATION_DATE"].astype(str).str[:4].isin(["2018","2019","2020","2021","2022"])]

gdf = gdf[gdf["PERMIT_NUM"].isin(df["PERMIT_NUM"])]

gdf.to_file(typename + "-active-subset.geojson")

statusLaneway = pd.DataFrame(df.groupby(["STATUS"]).size()).rename(columns = {0:'rearyard'})


typename = "secondary-suites"
typecode = "Second Suite (New)"

df = pd.read_csv(typename + "-active.csv")
gdf = gpd.read_file(typename + "-active.geojson")

df = df.sort_values(by=["PERMIT_NUM","APPLICATION_DATE","REVISION_NUM"]).drop_duplicates(subset="PERMIT_NUM", keep="last")

df = df[df["APPLICATION_DATE"].astype(str).str[:4].isin(["2018","2019","2020","2021","2022"])]

gdf = gdf[gdf["PERMIT_NUM"].isin(df["PERMIT_NUM"])]

gdf.to_file(typename + "-active-subset.geojson")

statusSecondary = pd.DataFrame(df.groupby(["STATUS"]).size()).rename(columns = {0:'secondary'})

dfs = pd.merge(statusLaneway,statusSecondary, left_index=True, right_index = True, how='outer').sort_values("rearyard", ascending=False).fillna(0)

dfssum = dfs.sum()

print(dfssum)

dfe = dfs.head(6)
dfesum = dfe.sum()

other = [dfssum.rearyard - dfesum.rearyard, dfssum.secondary - dfesum.secondary]

dfe.loc['Other'] = other

print(dfe)

dfe.to_json("active-summary.json")
