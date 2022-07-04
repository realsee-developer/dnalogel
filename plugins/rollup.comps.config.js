import glob from 'glob'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import commonjs from "@rollup/plugin-commonjs"
import postcss from 'rollup-plugin-postcss'

const inputPath = glob.sync('./comps/index.ts')
const outputPath = 'components'

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

const config = []
config.push(defineConfig({
	input: inputPath,
	output: [{
		name: 'dnalogel',
		file: `${outputPath}/index.js`,
		format: 'cjs'
	}, {
		name: 'dnalogel',
		file: `${outputPath}/index.es.js`,
		format: 'es'
	}, {
		name: 'dnalogel',
		file: `${outputPath}/index.umd.js`,
		format: 'umd',
		globals: {
			'@realsee/five': 'five',
			'@realsee/five/line': 'FiveSDK_Line',
			three: 'THREE',
			'three/examples/jsm/renderers/CSS3DRenderer': 'CSS3DRenderer'
		},
	}],
	plugins: [
		typescript({}),
		typescript({ tsconfig: './tsconfig.build.json' }),
		commonjs(),
	],
	external,
}))

export default config
