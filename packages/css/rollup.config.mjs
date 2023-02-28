import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import fs from 'fs';

const plugins = [
  postcss({
    extract: true,
    plugins: [
      atImport(),
    ],
  }),
];

// Read all CSS file names in the themes folder
// Create `dist/{theme}.css` for each theme
const themes = fs.readdirSync('src/theme');
export default themes.map(name => ({
  input: `src/theme/${name}`,
  output: {
    file: `dist/${name}`,
  },
  plugins,
}));
