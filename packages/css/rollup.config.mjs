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

const themes = fs.readdirSync('src/theme');

export default themes.map(name => ({
  input: `src/theme/${name}`,
  output: {
    file: `dist/${name}`,
  },
  plugins,
}));
