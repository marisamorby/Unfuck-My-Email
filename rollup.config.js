import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'src/scripts/main.js',
  dest: 'static/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  external: [
    '$',
    'Handlebars',
    'firebase',
  ],
  plugins: [
    eslint({
      exlude: [
        'src/styles/**',
      ],
      globals: [
        'Handlebars',
        'Clipboard',
        'firebase',
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
