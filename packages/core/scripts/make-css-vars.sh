#!/usr/bin/env bash

set -e

# Run this script periodically to fetch and refresh the CSS variables in src/vars
# When src/vars already exist the function will exit early
# You can force a refresh by passing the --force flag

# Check to see if there's something at the path src/vars/*.css
# If there is, exit early
if [ -z "$(ls -A src/vars/*.css 2>/dev/null)" ] || [ "$1" = "--force" ]; then
  echo "Generating CSS variables..."
else
  echo "CSS variables already exist. Skipping step..."
  exit 0
fi

scripts/get-figma-tokens.sh
scripts/convert-figma-tokens.sh
node scripts/generate-css-vars.cjs
