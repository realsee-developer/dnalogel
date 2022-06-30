import * as BasePlugin from '../BasePlugin'

interface Config {
  testEnable: boolean
}

interface State extends BasePlugin.State<Config> {
  test: string
}

interface EventMap extends BasePlugin.EventMap<State> {
  onTest: () => void
}

function create() {
  const cont = new Controller()
  console.log('🚀 ~ cont.state.name', cont.state.config.testEnable)
  cont.hooks.on('stateChange', () => {})
  return cont
}

class Controller extends BasePlugin.Controller<Config, State, EventMap> {
  public appendTo = undefined

  public state = {
    test: 'test',
    enabled: true,
    visible: true,
    config: {
      testEnable: true,
    },
  }

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
}

export default create
export type { State, EventMap }
export { create, Controller }
