import { ModelMakerPluginType } from '@realsee/dnalogel/dist'

export const data: ModelMakerPluginType.ServerData = {
  list: [
    {
      id: 1,
      name: '多边形',
      type: 'triangles',
      object_data: {
        points: [
          [-4.123815036198345, 1.6264862369528197e-15, 0.6749571893360409],
          [-4.136171940569206, 0.8818357559928545, 0.8036810838238246],
          [-4.3480243783849355, 0.724703895663797, 0.8701076327433946],
          [-4.322683971372346, -0.012037871935272133, 0.7562943264963584],
        ],
        color: '#ff00ff',
        opacity: 0.4,
      },
    },
    {
      id: 2,
      name: '盒子',
      type: 'box',
      object_data: {
        start: [0, 0, 2],
        end: [1, 1, 3],
        rotation: [0, 0, 0],
        color: '#00ff00',
        opacity: 0.4,
      },
    },
    {
      id: 3,
      name: '区域标签',
      type: 'prism',
      object_data: {
        floorIndex: 0,
        points: [
          [0, 0, 0],
          [1, 0, 0],
          [1, 0, 1],
          [0, 0, 1],
        ],
        height: 2,
        fixedY: 0.1,
        color: '#0000ff',
        opacity: 0.4,
      },
    },
  ],
}
