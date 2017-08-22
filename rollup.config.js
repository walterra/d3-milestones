import buble from 'rollup-plugin-buble';
import eslint from 'rollup-plugin-eslint';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/main.js',
  dest: 'build/milestones.js',
  format: 'umd',
  moduleName: 'milestones',
  sourceMap: true,
  sourceMapFile: 'build/milestones.js',
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    nodeResolve(),
    buble()
  ]
};
