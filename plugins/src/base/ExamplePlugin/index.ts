import * as BasePlugin from '../BasePlugin'

interface State extends BasePlugin.State {
  test: string
}

type EventMap = BasePlugin.EventMap<State>

function create() {
  const cont = new Controller()
  console.log('🚀 ~ cont.state.name', cont.state.test)
  return cont
}

class Controller extends BasePlugin.Controller<State, EventMap> {
  public state = {
    test: 'test',
    enabled: true,
    visible: true,
  }

  public constructor() {
    super()
  }

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
