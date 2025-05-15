import * as THREE from 'three';
import type { Overwrite } from '../../typings/utils.type';
export default function loadVideoTexture(src: string, videoElement?: HTMLVideoElement): Promise<Overwrite<THREE.VideoTexture, {
    image: HTMLVideoElement;
}>>;
export declare function getVideoTexture(src: string, videoElement?: HTMLVideoElement): Overwrite<THREE.VideoTexture, {
    image: HTMLVideoElement;
    metadataLoaded: boolean;
}>;
