#!/usr/bin/env bash
# This script fetches the Figma tokens from the cds-tokens repo and copies them into the themes folder

set -ex

FIGMA_REPO=https://github.com/compassion-global-experience/cds-tokens.git

git clone --filter=blob:none $FIGMA_REPO cds-tokens
cp -r cds-tokens/themes/ ./themes/
rm -rf cds-tokens
