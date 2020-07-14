const nodeResolve = require('@rollup/plugin-node-resolve').default;
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
const postcss = require('rollup-plugin-postcss');

const babelConfig = require('./babel.config');
const extensions = ['.js'];

const terserConfig = {
  compress: {
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    warnings: false,
  }
};

module.exports = {
    input: 'src/jinabox.js',
    output: {
      file: 'dist/jinabox.umd.min.js',
      format: 'umd',
    },
    plugins: [
      nodeResolve({ extensions }),
      babel({
        ...babelConfig,
        extensions,
        exclude: 'node_modules/**',
      }),
      terser(terserConfig),
      postcss(),
    ],
  };
