const path = require('path')
// 打包外部模块代码
const resolve = require('rollup-plugin-node-resolve')
// 支持commonjs模块
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
// 支持json文件
const json = require('rollup-plugin-json')
// 代码压缩
const { terser } = require('rollup-plugin-terser')
const vuePlugin = require('rollup-plugin-vue')

const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/dd.datav.mini.js')
const outputEsPath = path.resolve(__dirname, './dist/dd.datav.es.mini.js')

module.exports = {
  input: inputPath,
  output: [{
    file: outputUmdPath,
    format: 'umd',
    name: 'ddDataV',
    globals: {
      vue: 'Vue'
    }
  },{
    file: outputEsPath,
    format: 'es',
    globals: {
      vue: 'Vue'
    }
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [[
        '@babel/transform-runtime', {
          "regenerator": true,
        }
      ]]
    }),
    json(),
    vuePlugin(),
    postcss({
      plugins: []
    }),
    terser()
  ],
  // 不打包vue，声明vue为外部模块
  external: ['vue']
}
