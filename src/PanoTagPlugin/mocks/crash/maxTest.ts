
const position = [-0.8070892936181384, 0.1, 1.0212990045547485]
const positionInRoom = [-3.2823034210867634,1.3613521164225948,3.952892543879894]

const textTag = {
  position: position,
  contentType: 'Text',
  data: {
    title: '标题很短',
    description: '描述',
    appearance: 'plane'
  },
  config: {
    unfoldedConfig: {
      keep: 'folded'
    }
  },
}

const textTagInRoom = {
  ...textTag,
  position: positionInRoom
}

const tagList: any[] = []

for (let i = 0; i < 50; i++) {
  tagList.push(textTag)
}

for (let i = 0; i < 5000; i++) {
  tagList.push(textTagInRoom)
}

export default tagList