import pandas as pd

typecode = "New Laneway / Rear Yard Suite"
file_name = "building-permits/clearedpermits2017to2025.csv"

year_issue = "ISSUED_DATE"
year_complete = "COMPLETED_DATE"

df = pd.read_csv(file_name)

# Filter to relevant permits
df = df.loc[df["WORK"] == typecode]

df = df.drop_duplicates(subset=["PERMIT_NUM"])

status_counts = df["STATUS"].value_counts(dropna=False)
total = status_counts.sum()

print("Status breakdown after WORK filter:")
for status, count in status_counts.items():
    pct = count / total * 100
    print(f"  {status}: {count} ({pct:.1f}%)")
    

df = df.loc[df["STATUS"] == "Closed"]

# Convert to datetime (invalids -> NaT)
df[year_issue] = pd.to_datetime(df[year_issue], errors="coerce")
df[year_complete] = pd.to_datetime(df[year_complete], errors="coerce")

# Remove rows with missing dates
df = df.dropna(subset=[year_issue, year_complete])

# Compute difference in days
df["days_diff"] = (df[year_complete] - df[year_issue]).dt.days

# Final output: ONLY the three columns
out_df = df[[year_issue, year_complete, "days_diff"]].copy()

# Format dates as YYYY-MM-DD
out_df[year_issue] = out_df[year_issue].dt.strftime("%Y-%m-%d")
out_df[year_complete] = out_df[year_complete].dt.strftime("%Y-%m-%d")

out_df.to_csv("rear_suite_issue_complete_with_duration.csv", index=False)

# Print summary stats
dur = out_df["days_diff"]
print(f"Min days: {dur.min()}")
print(f"10th percentile: {dur.quantile(0.10):.0f}")
print(f"25th percentile: {dur.quantile(0.25):.0f}")
print(f"Median (50th): {dur.quantile(0.50):.0f}")
print(f"75th percentile: {dur.quantile(0.75):.0f}")
print(f"90th percentile: {dur.quantile(0.90):.0f}")
print(f"Max days: {dur.max()}")
print(f"Mean days: {dur.mean():.1f}")

pct_over_2yrs = (dur > 365 * 2).mean() * 100

print(f"% over 2 years (>730 days): {pct_over_2yrs:.1f}%")