import { unsafe__useFiveInstance } from '@realsee/five/react'

export function useFivePlugin<T extends (...args: any) => any>(name: string) {
  const five = unsafe__useFiveInstance()
  const plugin = five.plugins[name]
  if (!plugin) throw new Error(`can not find plugin "${name}"`)
  return plugin as ReturnType<T>
}
