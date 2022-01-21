const path = require('path');

function indexTemplate(files) {
  const exportEntries = files
    .map((file) => {
      const basename = path.basename(file, path.extname(file));
      return `export { default as Icon${basename} } from './${basename}';`;
    })
    .join('\n');

  return `
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

${exportEntries}
`;
}

module.exports = indexTemplate;
