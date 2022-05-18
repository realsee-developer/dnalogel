import type * as THREE from 'three'
import { loadTexture } from './loadTexture'

/** 贴图加载器，用于满足资源共用 */
export function getTextureLoader() {
  const cache = new Map<string, Promise<THREE.Texture>>()

  const load = function (url: string): Promise<THREE.Texture> {
    if (cache.has(url)) return cache.get(url)!
    const texturePromise = loadTexture(url)
    cache.set(url, texturePromise)
    return texturePromise
  }

  const dispose = function () {
    cache.forEach((texturePromise) => texturePromise.then((texture) => texture.dispose()))
    cache.clear()
  }

  return { load, dispose }
}
