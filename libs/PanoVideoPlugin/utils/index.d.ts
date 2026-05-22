import type { Vector3 } from 'three';
export default function directionToLongitudeAndLatitude(direction: Vector3 | {
    x: number;
    y: number;
    z: number;
}): {
    longitude: number;
    latitude: number;
};
