#!/bin/bash

# Function to handle errors
handle_error() {
    echo "Error occurred in script at line: $1"
    exit 1
}
trap 'handle_error $LINENO' ERR

# Remove existing dependencies and configuration files
rm -rf ./node_modules ./.svelte-kit ./.husky
rm -f ./pnpm-lock.yaml ./package.json ./package-lock.json

# Download the updated package.json from GitHub
PACKAGE_JSON_URL="https://raw.githubusercontent.com/bfanger/svelte-project-template/main/package.json"
curl "$PACKAGE_JSON_URL" > ./package_temp.json

# Merge package.json files using merge_package.sh script
./merge_package.sh

# Remove temporary package.json file
rm ./package_temp.json

# Install dependencies using pnpm
pnpm install

# Install additional packages
PACKAGES=(
    "@sveltejs/adapter-auto"
    "@sveltejs/adapter-netlify"
    "@sveltejs/adapter-vercel"
    "@sveltejs/adapter-static"
    "@sveltejs/adapter-node"
    "fast-xml-parser"
    "@emailjs/browser"
)
pnpm install "${PACKAGES[@]}"

# Output success message
echo "Success! Node packages are setup now!"
echo "-------------------------------------"
echo "you can now run it develepor mode with:"
echo "$ pnpm run dev -- --open"
echo "or just build the app and preview it"
echo "$ pnpm run build && pnpm run preview"