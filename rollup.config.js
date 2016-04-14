import commonjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';

export default {
  format: 'umd',
  moduleName: 'journalize',
  plugins: [
    commonjs(),
    node({
      jsnext: true,
      main: true
    })
  ]
};
