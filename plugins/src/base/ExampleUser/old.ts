// 老用户
import ExamplePlugin from '../ExamplePlugin'
import { Five } from '@realsee/five'

const five = new Five({
  plugins: [[ExamplePlugin, 'example-plugin']],
})
