import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: 'src/Generatr.js',
  output: [
    {
      file: 'index.js',
      format: 'cjs'
    },
    {
      file: 'index.mjs',
      format: 'es'
    },
    {
      file: 'generatr.min.js',
      format: 'iife',
      name: 'Generatr'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};