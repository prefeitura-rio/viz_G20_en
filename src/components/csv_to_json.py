import pandas as pd
import json

# Load the CSV file
file_path = "rj_shapefile.csv"
data = pd.read_csv(file_path)

# Convert to JSON (orient='records' creates a list of dictionaries)
json_data = data.to_json(orient='records', force_ascii=False, indent=4)

# Save the JSON to a file
output_path = "rj_shapefile.json"
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(json_data)

print(f"JSON saved successfully to {output_path}")
