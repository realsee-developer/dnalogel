import { Object3D } from 'three';
export declare class IObject3D extends Object3D {
    name: string;
    needsRender: boolean;
    constructor();
    removeChildren(): this;
    add(...objects: Object3D[]): this;
    addIfNotExists(...objects: Object3D[]): this;
    remove(...objects: Object3D[]): this;
    removeFromParent(): this;
}
