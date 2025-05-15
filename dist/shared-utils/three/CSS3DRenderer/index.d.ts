import { Object3D } from 'three';
import type { Scene, Camera } from 'three';
export declare class CSS3DObject extends Object3D {
    element: HTMLElement;
    onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
    onAfterRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
    constructor(element: HTMLElement);
}
export declare class CSS3DSprite extends CSS3DObject {
    constructor(element: HTMLElement);
}
export declare class CSS3DRenderer {
    domElement: HTMLElement;
    constructor(mode?: 'front' | 'behind');
    getSize(): {
        width: number;
        height: number;
    };
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: Camera): void;
}
