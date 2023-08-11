#!/usr/bin/env node

const chokidar = require('chokidar');
const sass = require('sass');
const fs = require('fs');

const watcher = chokidar.watch('**/*.scss', {
  persistent: true,
});

watcher.on('change', (changedFile) => {
  let outputPath = changedFile.replace('.scss', '.module.css');
  fs.writeFileSync(outputPath, sass.compile(changedFile).css);
  console.dir(`\n\nWrote ${outputPath}.\n`);
});
