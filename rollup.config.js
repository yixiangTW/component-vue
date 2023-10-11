import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/lib/index.ts',
  output: {
    file: 'dist/lib/bundle.js',
    name: 'C',
    format: 'umd',
  },
  plugins: [
    typescript(),
    vue({
      include: /\.vue$/,
    }),
    scss(),
  ],
  // 外部依赖配置，告诉 Rollup 不要捆绑 Vue
  external: ['vue'],
};