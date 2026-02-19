import json
from collections import OrderedDict

# File paths
input_file = "adu_permits_2022_2025.geojson"
output_file = "adu_permits_2022_2025_nodupes.geojson"

# Read the GeoJSON file
with open(input_file, 'r') as f:
    geojson_data = json.load(f)

# Track unique features using a set of JSON strings (simple approach)
unique_features = []
seen_features = set()

for feature in geojson_data['features']:
    # Convert feature to a string for comparison (ignores order)
    feature_str = json.dumps(feature, sort_keys=True)
    
    if feature_str not in seen_features:
        seen_features.add(feature_str)
        unique_features.append(feature)

# Update the GeoJSON with unique features
geojson_data['features'] = unique_features

# Save the cleaned GeoJSON
with open(output_file, 'w') as f:
    json.dump(geojson_data, f, indent=2)

print(f"Original features: {len(geojson_data['features'])}")
print(f"Unique features: {len(unique_features)}")
print(f"Removed {len(geojson_data['features']) - len(unique_features)} duplicates")
print(f"Saved to: {output_file}")