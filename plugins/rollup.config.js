import glob from 'glob'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocessor from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
const plugins = glob.sync('**/**Plugin/index.ts')

const svelteRollupPlugin = svelte({
  emitCss: false,
  extensions: [".svelte"],
  preprocess: sveltePreprocessor(),
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
