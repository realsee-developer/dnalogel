import type { Object3D } from 'three';
import type { Direction } from '../typings';
import { MoveHelperAbstract, type BaseHelperConfig } from '.';
import { ArrowGroup } from './Objects/ArrowGroup';
import * as THREE from 'three';
export declare class MoveHelper extends MoveHelperAbstract {
    name: string;
    xArrow?: ArrowGroup;
    yArrow?: ArrowGroup;
    zArrow?: ArrowGroup;
    constructor(originObject3D: Object3D, config?: {
        xArrowEnable?: boolean;
        yArrowEnable?: boolean;
        zArrowEnable?: boolean;
    } & BaseHelperConfig);
    update(camera: THREE.Camera): void;
    show(): void;
    setScaleByCamera(camera: THREE.PerspectiveCamera | THREE.OrthographicCamera): void;
    showDraggingHelper(directions: Direction[]): void;
    dispose(): void;
}
