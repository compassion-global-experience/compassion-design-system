import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'node:path';
import packageJson from './package.json' assert { type: 'json' };

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
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extract: 'base.css',
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts(),
      copy({
        targets: [
          { src: 'dist/cjs/base.css', dest: 'dist/css' },
          {
            src: path.resolve(
              '../../node_modules/@compassion-gds/css',
              'src/vars/*.css'
            ),
            dest: 'dist/css',
            rename: (name, extension) =>
              `${name.replace('_cds-', '')}.${extension}`,
          },
        ],
        verbose: true,
      }),
    ],
    external: [/\.css$/],
  },
];
