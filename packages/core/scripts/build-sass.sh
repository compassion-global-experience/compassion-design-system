#!/usr/bin/env bash

for SCSS in src/components/**/*.scss; do
  OUTPUT=${SCSS%.scss}.module.css
  sass $SCSS $OUTPUT
done
