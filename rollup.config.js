const moduleName = 'journalize';

export default {
  entry: 'src/index.js',
  moduleName,
  targets: [
    { dest: `dist/${moduleName}.cjs.js`, format: 'cjs' },
    { dest: `dist/${moduleName}.umd.js`, format: 'umd' },
    { dest: `dist/${moduleName}.es.js`, format: 'es' },
  ]
};
