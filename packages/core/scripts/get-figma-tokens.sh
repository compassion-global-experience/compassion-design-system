#!/usr/bin/env bash
# This script fetches the Figma tokens from the cds-tokens repo and copies them into the themes folder

# TODO: Consider replacing this logic with a dependency on the tokens npm package instead.

set -ex

FIGMA_REPO=https://github.com/compassion-global-experience/cds-tokens.git

git clone --filter=blob:none $FIGMA_REPO cds-tokens
cp -r cds-tokens/themes/ ./themes/
rm -rf cds-tokens
