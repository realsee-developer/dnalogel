import type { Group } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const loader = new FBXLoader()

export async function loadFbxObj(url: string): Promise<Group> {
  return new Promise<Group>((resolve, reject) => {
    function onLoad(object: Group) {
      resolve(object)
    }
    function onError(error: ErrorEvent) {
      reject(error)
    }
    loader.load(url, onLoad, undefined, onError)
  })
}
