const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
// 支持commonjs模块
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
// 支持json文件
const json = require('rollup-plugin-json')
const vuePlugin = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')


const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/dd.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/dd.datav.es.js')

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
    })
  ],
  external: ['vue']
}
