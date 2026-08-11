import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'build/d3-milestones.js',
    format: 'umd',
    name: 'milestones',
    sourcemap: true,
    sourcemapFile: 'build/d3-milestones.js',
  },
  plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' })],
};
