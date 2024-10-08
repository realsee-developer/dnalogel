import type { Object3D } from 'three';
import type { Direction } from '../typings';
import { MoveHelperAbstract, type BaseHelperConfig } from '.';
import { ArrowGroup } from './Objects/ArrowGroup';
import type * as THREE from 'three';
export declare class MoveHelper extends MoveHelperAbstract {
    xArrow?: ArrowGroup;
    yArrow?: ArrowGroup;
    zArrow?: ArrowGroup;
    constructor(originObject3D: Object3D, config?: {
        xArrowEnable?: boolean;
        yArrowEnable?: boolean;
        zArrowEnable?: boolean;
    } & BaseHelperConfig);
    show(): void;
    setScaleByCamera(camera: THREE.PerspectiveCamera): void;
    showDraggingHelper(directions: Direction[]): void;
    dispose(): void;
}
