import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';

import packageJson from './package.json' assert { type: 'json' };

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        // This configuration promotes better tree shaking, at least in the next.js project we tested it in.
        // It's mainly about exports like these: `export * as Icon from './icon'`
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: (info) => {
            return `esm/${info.name.replace('node_modules/', 'packages/')}.js`;
        }
      },
    ],
    plugins: [
      peerDepsExternal(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.declarations.json' }),
      postcss({
        minimize: true,
        config: false,
        modules: {
          generateScopedName: 'gds__[local]___[hash:base64:5]',
        },
      }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts(),
    ],
    external: [/\.css$/],
  },
];
