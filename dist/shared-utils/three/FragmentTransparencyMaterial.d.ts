import * as THREE from 'three';
export declare class FragmentTransparencyMaterial extends THREE.ShaderMaterial {
    uniforms: {
        map: {
            value: THREE.Texture;
        };
    };
    transparent: boolean;
    blending: THREE.Blending;
    blendSrc: THREE.BlendingDstFactor;
    blendDst: THREE.BlendingDstFactor;
    blendSrcAlpha: THREE.BlendingDstFactor;
    blendDstAlpha: THREE.BlendingDstFactor;
    vertexShader: string;
    fragmentShader: string;
    constructor(texture: THREE.Texture);
}
