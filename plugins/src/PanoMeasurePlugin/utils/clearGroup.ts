import { Group } from 'three'

export default function clearGroup(group: Group) {
  group.children.length > 0 && group.remove(...group.children)
}
