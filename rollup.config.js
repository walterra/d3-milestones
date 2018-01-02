import buble from 'rollup-plugin-buble';
import eslint from 'rollup-plugin-eslint';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'build/d3-milestones.js',
    format: 'umd',
    name: 'milestones',
    sourcemap: true
  },
  sourcemapFile: 'build/d3-milestones.js',
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
