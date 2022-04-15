import type { FloorplanServerRoomItem } from '../floorplan/typings/floorplanServerData'
import { roomInfoIcon } from './Assets/roomInfoIcon'

export function getRoomInfoInstance() {
  const infoDom = document.createElement('div')
  const iconDom = document.createElement('i')
  const textDom = document.createElement('span')
  infoDom.appendChild(iconDom)
  infoDom.appendChild(textDom)
  // infoDom style
  infoDom.style.position = 'relative'
  infoDom.style.width = '100%'
  infoDom.style.display = 'flex'
  infoDom.style.flexDirection = 'column'
  infoDom.style.alignItems = 'center'
  infoDom.style.marginTop = `${150 / 16}rem`
  infoDom.style.opacity = '0'
  infoDom.style.transition = 'opacity 1000ms linear'
  // iconDom style
  iconDom.style.display = 'block'
  iconDom.style.width = `${134 / 16}rem`
  iconDom.style.height = `${22 / 16}rem`
  iconDom.style.backgroundSize = '100%'
  iconDom.style.backgroundRepeat = 'no-repeat'
  iconDom.style.backgroundImage = `url(${roomInfoIcon})`
  textDom.style.marginTop = `${10 / 16}rem`
  // textDom style
  textDom.style.fontSize = `${16 / 16}rem`
  textDom.style.color = '#fff'
  textDom.style.opacity = '0.7'
  textDom.style.textShadow = '0 2px 16px rgb(22 34 83 / 24%)'
  textDom.style.fontWeight = 'bold'

  return {
    appendTo(element: Element) {
      element.appendChild(infoDom)
    },
    dispose() {
      infoDom.remove()
    },
    setRoom(room: FloorplanServerRoomItem) {
      textDom.innerHTML = room.name + ' ' + Math.floor(room.size / 1000000) + '㎡'
    },
    show() {
      infoDom.style.opacity = '1'
    },
    hide() {
      infoDom.style.opacity = '0'
    }
  }
}
