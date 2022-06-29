import * as ExamplePlugin from '../ExamplePlugin'
import { Five } from '@realsee/five'

// 使用 Five 创建
const five = new Five({
  plugins: [[ExamplePlugin.create, 'example-plugin']],
})

// 使用 Function 创建
const  example = ExamplePlugin.create()
