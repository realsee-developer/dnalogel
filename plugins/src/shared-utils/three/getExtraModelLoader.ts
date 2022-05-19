import * as THREE from 'three'
import { loadFbxObj } from './loadFbxObj'

/** 模型资源加载器，用于满足资源共用 */
export function getExtraModelLoader() {
  const cache = new Map<string, Promise<THREE.Group>>()

  const load = function (url: string, type = 'FBX'): Promise<THREE.Group> {
    if (type !== 'FBX') return Promise.reject(new Error('不支持的类型'))
    if (cache.has(url)) return cache.get(url)!
    const groupPromise = loadFbxObj(url)
    cache.set(url, groupPromise)
    return groupPromise
  }

  const dispose = function () {
    cache.clear()
  }

  return { load, dispose }
}
