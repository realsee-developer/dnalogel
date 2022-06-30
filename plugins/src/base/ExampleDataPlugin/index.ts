import * as BasePlugin from '../BasePluginWithData'

interface Config {
  testEnable: boolean
}

interface State extends BasePlugin.State<Config> {
  test: string
}

interface EventMap extends BasePlugin.EventMap<State, PluginData> {
  onTest: () => void
}

interface ServerData {
  version: number
  data: {
    a: string
  }
}

interface PluginData {
  a: string
}

function create() {
  const cont = new Controller()
  console.log('🚀 ~ cont.state.name', cont.state.test)
  return cont
}

class Controller extends BasePlugin.Controller<Config, State, EventMap, ServerData, PluginData> {
  public appendTo = undefined
  public state = {
    test: 'test',
    enabled: true,
    visible: true,
    config: {
      testEnable: true,
    },
  }
  protected data?: PluginData

  public constructor() {
    super()
  }

  public async show() {}

  public async hide() {}

  public enable() {}

  public disable() {}

  public dispose() {}

  public setState(state: State) {
    this.state.test = state.test
  }

  public async load(serverData: ServerData, state?: State) {
    this.data = this.formatData(serverData)
  }

  protected formatData(data: ServerData) {
    return { a: data.data.a.toString() }
  }
}

export default create
export type { State, EventMap }
export { create, Controller }
