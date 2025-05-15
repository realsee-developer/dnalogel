import * as THREE from 'three';
export declare function loadTexture(uri: string): Promise<THREE.Texture>;
export declare function loadPicture(uri: string): Promise<{
    texture: THREE.Texture;
    transparent: boolean;
}>;
