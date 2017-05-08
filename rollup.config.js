import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

const moduleName = 'journalize';

export default {
  entry: 'src/index.js',
  moduleName,
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs()
  ],
  targets: [
    { dest: `dist/${moduleName}.cjs.js`, format: 'cjs' },
    { dest: `dist/${moduleName}.umd.js`, format: 'umd' },
    { dest: `dist/${moduleName}.es.js`, format: 'es' },
  ]
};
