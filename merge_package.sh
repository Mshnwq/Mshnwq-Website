#!/bin/bash

# Function to merge JSON objects
merge_json() {
  jq -s '.[0] * .[1]' "$1" "$2"
}

# Define the file paths
file1="package_temp.json"
file2="package_root.json"

# Merge the JSON files
merged_json=$(merge_json "$file1" "$file2")

# Print the merged JSON
echo "$merged_json" > package.json