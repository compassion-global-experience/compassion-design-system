#!/usr/bin/env bash

for SCSS in src/components/**/*.scss; do
  OUTPUT=${SCSS%.scss}.module.css
  HEADER="\
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\
/* THIS IS GENERATED CODE. Any changes you make will be overwritten! */\n\
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n"
  echo "$HEADER" > "$OUTPUT"

  sass "$SCSS" >> "$OUTPUT"
  echo "Wrote $SCSS to $OUTPUT."
done
