const nodeResolve = require('@rollup/plugin-node-resolve').default;
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');

const babelConfig = require('./babel.config');
const extensions = ['.js'];

module.exports = {
    input: 'src/jinabox.js',
    output: {
      file: 'dist/jinabox.umd.js',
      format: 'umd',
    },
    plugins: [
      nodeResolve({ extensions }),
      babel({
        ...babelConfig,
        extensions,
        exclude: ['node_modules/**','*.test.js','*.test.js.snap'],
      }),
      postcss(),
    ],
  };
