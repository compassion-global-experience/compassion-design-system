#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const chokidar = require('chokidar');
const sass = require('sass');
const fs = require('fs');
/* eslint-enable @typescript-eslint/no-var-requires */

const watcher = chokidar.watch('**/*.scss', {
  persistent: true,
});

watcher.on('change', (changedFile) => {
  const outputPath = changedFile.replace('.scss', '.module.css');

  const header = `/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\
/* THIS IS GENERATED CODE. Any changes you make will be overwritten! */\n\
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n`;

  fs.writeFileSync(outputPath, header + sass.compile(changedFile).css);
  console.dir(`\n\nWrote ${outputPath}.\n`);
});
