#!/usr/bin/env bash
# Transform the Figma tokens into a format that can be used with style-dictionary

set -e

rm -rf tokens

# iterate the folder themes/components and create a comma separated list of component names
COMPONENTS=""
for component in themes/components/*; do
  if [ ! -d "$component" ]; then
    NEXT_ENTRY="components/$(basename "$component" .json)"
    if [ -z "$COMPONENTS" ]; then
      COMPONENTS="$NEXT_ENTRY"
    else
      COMPONENTS="$COMPONENTS,$NEXT_ENTRY"
    fi
  fi
done

npx token-transformer themes tokens/cds-light.json "core/cds-core,cds-light/theme-cds-light,$COMPONENTS" core/cds-core,cds-light/theme-cds-light
npx token-transformer themes tokens/cds-dark.json "core/cds-core,cds-dark/theme-cds-dark,$COMPONENTS" core/cds-core,cds-dark/theme-cds-dark
