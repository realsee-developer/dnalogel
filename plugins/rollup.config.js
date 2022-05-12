import glob from 'glob'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocessor from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
import postcss from 'rollup-plugin-postcss'

const plugins = glob.sync('**/**Plugin/index.ts')

const svelteRollupPlugin = svelte({
  emitCss: false,
  extensions: [".svelte"],
  preprocess: sveltePreprocessor({
    postcss: {plugins: [
      require('autoprefixer'),
      require('postcss-plugin-px2rem')({
        rootValue: 19.2, // 换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px
        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
        // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
        // propBlackList: ['font-size', 'border'], // 黑名单
        exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
      // selectorBlackList: [], //要忽略并保留为px的选择器
      // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用 ignoreIdentifier 后，replace 将自动设置为 true。
      // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
      mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
      minPixelValue: 3, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
      })
    ]}
  }),
})

const external = [
  '@realsee/five',
  '@realsee/five/line',

  'three',
  'three/examples/jsm/renderers/CSS3DRenderer',
  'three/examples/jsm/loaders/FBXLoader',

  // 'svelte',
  // 'svelte/internal',
  // 'svelte/easing',
  // 'svelte/transition',

  // '@tweenjs/tween.js',

]
const config = plugins.map((plugin) => {
  const pluginName = plugin.match(/\/((\w+)Plugin)\/index.ts/)[1]
  const pluginPath = plugin.replace('src/', 'dist/').replace('/index.ts', '/index.js')
  return defineConfig({
    input: plugin,
    output: [{
      name: pluginName,
      file: pluginPath,
      format: 'cjs'
    }],
    plugins: [
      svelteRollupPlugin,
      typescript({}),
      commonjs(),
      postcss({plugins: [
          require('autoprefixer'),
          require('postcss-plugin-px2rem')({
            rootValue: 19.2, // 换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: ['font-size', 'border'], // 黑名单
            exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用 ignoreIdentifier 后，replace 将自动设置为 true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 3, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]})
    ],
    external,
  })
})

config.push(defineConfig({
  input: 'src/index.ts',
  output: [{
    name: 'dnalogel',
    file: `dist/index.js`,
    format: 'cjs'
  }, {
    name: 'dnalogel',
    file: `dist/index.es.js`,
    format: 'es'
  }, {
    name: 'dnalogel',
    file: `dist/index.umd.js`,
    format: 'umd',
    globals: {
      '@realsee/five': 'five',
      '@realsee/five/line': 'FiveSDK_Line',
      three: 'THREE',
      'three/examples/jsm/renderers/CSS3DRenderer': 'CSS3DRenderer'
    },
  }],
  plugins: [
    svelteRollupPlugin,
    typescript({ tsconfig: './tsconfig.build.json' }),
    commonjs(),
  ],
  external,
}))

export default config
