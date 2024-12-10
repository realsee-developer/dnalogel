import * as THREE from 'three';
import type { Object3D } from 'three';
import { RotateHelperAbstract, type BaseHelperConfig } from '../Base/BaseHelper';
import type { Color, Direction } from '../typings';
import { tipsDom } from './HTML/tipsDom';
export declare class RotateHelper extends RotateHelperAbstract {
    name: string;
    xCircle?: RotateCircleGroup;
    yCircle?: RotateCircleGroup;
    zCircle?: RotateCircleGroup;
    children: RotateCircleGroup[];
    angleTips?: ReturnType<typeof tipsDom>;
    private container?;
    constructor(originObject3D: Object3D, config?: {
        container?: HTMLElement;
        yzCircleEnable?: boolean;
        xzCircleEnable?: boolean;
        xyCircleEnable?: boolean;
        angleTipsEnable?: boolean;
    } & BaseHelperConfig);
    hide(): void;
    show(): void;
    setScaleByCamera(camera: THREE.PerspectiveCamera | THREE.OrthographicCamera): void;
    showDraggingHelper(directions: Direction[]): void;
    dispose(): void;
}
declare class RotateCircleGroup extends THREE.Group {
    direction: Direction;
    /** 1/4 圆 */
    circle: Circle;
    /** 旋转过程中展示的背景圆环 */
    ring: DashedRing;
    /** 旋转过程中表示角度的扇形 */
    angleSector: AngleSector;
    constructor(options: {
        direction: Direction;
        color?: Color;
    });
    showCircle(): void;
    showRing(): void;
    hide(): void;
}
declare class Circle extends THREE.Mesh {
    direction: Direction;
    material: THREE.MeshBasicMaterial;
    gapAngle: number;
    geometry: THREE.RingGeometry;
    constructor(options: {
        direction: Direction;
        color?: Color;
    });
}
declare class DashedRing extends THREE.Group {
    direction: Readonly<Direction>;
    constructor(options: {
        direction: Direction;
    });
}
declare class AngleSector extends THREE.Mesh {
    direction: Direction;
    baseAxes: THREE.Vector3;
    angleDirection: 1 | -1;
    material: THREE.MeshBasicMaterial;
    constructor(options: {
        direction: Direction;
        color?: Color;
    });
}
export {};
