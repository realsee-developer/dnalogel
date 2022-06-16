import * as THREE from 'three'
import type { Five } from "@realsee/five";

const { Raycaster, Vector3 } = THREE

/**
 * 碰撞检测可见性
 * */
export const isImpacted = (five: Five, sourceVector: THREE.Vector3, targetVector: THREE.Vector3, distance: number): boolean => {
    const direction = sourceVector.clone().sub(targetVector).normalize()
    const raycaster = new Raycaster()
    raycaster.set(targetVector, direction)
    const [intersection] = five.model.intersectRaycaster(raycaster)
    return intersection && distance <= intersection.distance + 0.1
}
