const position = [-0.8070892936181384, 0.1, 1.022]
const positionInRoom = [-3.2823034210867634, 1.3613521164225948, 3.952892543879894]

const randomPostion = () => {
  let random = Math.random()
  // x: -0.14 ~ -4.6
  const xRandom = -0.14 - random * 4.46
  random = Math.random()
  // y: 0 ~ 2.4
  const yRandom = random * 2.4
  return [xRandom, yRandom, 1.022]
}

const randomRoomPostion = () => {
  let random = Math.random()
  // x: -2 ~ -4.6
  const xRandom = -2 - random * 4.46
  random = Math.random()
  // y: 0 ~ 2.4
  const yRandom = random * 2.4
  return [xRandom, yRandom, 3.9]
}

const textTag = {
  position: position,
  contentType: 'Text',
  data: {
    title: '标题很短',
    description: '描述',
    appearance: 'plane',
  },
  config: {
    unfoldedConfig: {
      keep: 'folded',
    },
  },
}

const generateTag = () => {
  return {
    ...textTag,
    position: randomPostion(),
  }
}

const generateTagInRoom = () => {
  return {
    ...textTag,
    position: randomRoomPostion(),
  }
}

const tagList: any[] = []

for (let i = 0; i < 400; i++) {
  tagList.push(generateTag())
}

for (let i = 0; i < 10000; i++) {
  tagList.push(generateTagInRoom())
}

export default tagList
