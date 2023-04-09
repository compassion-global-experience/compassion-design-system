#!/usr/bin/env bash

set -ex

# Copy CSS files (and assets like fonts) so they can be reexported from the current package.
# This will let users install only the react package instead of having to also install the css package.

rm -rf dist/css
mkdir dist/css
cp -r ../css/src/vars/*.css dist/css
cp ../css/reset.css dist/css/reset.css
cp -r ../css/assets dist/css/assets
