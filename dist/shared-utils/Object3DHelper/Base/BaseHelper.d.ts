import type { Create3DElementReturnType } from '../../../CSS3DRenderPlugin';
import * as THREE from 'three';
import type { Group, Mesh, Object3D } from 'three';
import { Vector3 } from 'three';
import type { Direction, Direction4, PositionFrom, ScalePosition } from '../typings';
import type { tipsDom } from '../Helper/HTML/tipsDom';
import { IObject3D } from '../../three/IObject3D';
type NonVoid<T> = T extends void ? never : T;
export interface BaseHelperConfig {
    onRender?: () => any;
    /**
     * @description: helper 初始位置来源
     * @default 'objectPosition'
     */
    positionFrom?: PositionFrom;
}
export declare abstract class BaseHelper<OriginObject3D extends Object3D = Object3D> extends IObject3D {
    protected originObject3D: OriginObject3D;
    protected onRender: () => any;
    private positionFrom;
    get helperObject(): Object3D;
    constructor(originObject3D: OriginObject3D, config?: BaseHelperConfig);
    render(): void;
    enable(): void;
    disable(): void;
    show(): void;
    hide(): void;
    raycasterIntersectObject(raycaster: THREE.Raycaster, intersection?: THREE.Intersection[]): THREE.Intersection[];
    initialPosition(offset?: THREE.Vector3): void;
    setScaleByCamera(camera: THREE.PerspectiveCamera | THREE.OrthographicCamera): void;
    initQuaternion(config?: {
        xAxis?: Vector3 | (() => Vector3);
        yAxis?: Vector3 | (() => Vector3);
        zAxis?: Vector3 | (() => Vector3);
    }): void;
    applyHelperScaleMatrix4(matrix: THREE.Matrix4, origin?: Vector3): void;
    setHelperQuaternion(quaternion: THREE.Quaternion, origin?: Vector3): void;
    applyHelperQuaternion(quaternion: THREE.Quaternion, origin?: Vector3): void;
    dispose(): void;
}
export declare abstract class MoveHelperAbstract<OriginObject3D extends Object3D = Object3D> extends BaseHelper<OriginObject3D> {
    abstract xArrow?: Object3D & {
        arrow: Object3D;
        line?: Object3D;
        direction: Direction;
    };
    abstract yArrow?: Object3D & {
        arrow: Object3D;
        line?: Object3D;
        direction: Direction;
    };
    abstract zArrow?: Object3D & {
        arrow: Object3D;
        line?: Object3D;
        direction: Direction;
    };
    abstract showDraggingHelper(directions?: Direction[]): void;
    abstract update(camera: THREE.Camera): void;
}
export declare abstract class BoundingBoxHelperAbstract<OriginObject3D extends Object3D = Object3D> extends BaseHelper<OriginObject3D> {
}
type Circle = (Mesh | Group) & {
    direction: Direction;
    circle: Mesh;
    angleSector?: Mesh & {
        angleDirection: number;
        baseAxes: Vector3;
    };
};
export declare abstract class RotateHelperAbstract<OriginObject3D extends Object3D = Object3D> extends BaseHelper<OriginObject3D> {
    abstract xCircle?: Circle;
    abstract yCircle?: Circle;
    abstract zCircle?: Circle;
    abstract angleTips?: ReturnType<typeof tipsDom>;
    abstract showDraggingHelper(directions: Direction[]): void;
}
export declare abstract class ScaleHelperAbstract<OriginObject3D extends Object3D = Object3D> extends BaseHelper<OriginObject3D> {
    abstract scaleMeshes: Array<Object3D & {
        scalePosition: ScalePosition;
    }>;
}
export declare abstract class RectangleScaleHelperAbstract<OriginObject3D extends Object3D, PointType extends Object3D | HTMLElement> extends BaseHelper<OriginObject3D> {
    abstract points: PointType extends Object3D ? {
        point: PointType;
        direction: Direction4;
    }[] : {
        point: PointType;
        direction: Direction4;
        position: Vector3;
    }[];
    abstract cornerPositions: Vector3[];
    abstract css3DInstance?: NonVoid<Create3DElementReturnType>;
    abstract plane?: THREE.Mesh;
    abstract showDraggingHelper(directions?: Direction[]): void;
    abstract updatePoints(): void;
    abstract enable(): void;
    abstract disable(): void;
}
export {};
