import type { Five } from '@realsee/five';
import CruiseController from './BaseController';
import type { Config, GuildLineConfig, PluginState } from './typing';
import type { PartialDeep } from 'type-fest';
import * as THREE from 'three';
import { type AnyPosition } from '../shared-utils/positionToVector3';
interface Data extends GuildLineConfig {
    /**
     * @description: 组成路径的空间坐标点
     */
    path: THREE.CurvePath<THREE.Vector3> | AnyPosition[];
    /**
     * @description: 漫游镜头偏移量，注意会与插件初始化时的 config.offset 叠加
     * @default: { x: 0, y: 0, z: 0 }
     */
    offset?: Partial<{
        x: number;
        y: number;
        z: number;
    }>;
}
export interface MoveConfig extends Config {
    /**
     * @description: 漫游时镜头基于路径的偏移量
     * @default: { x: 0, y: 2, z: 0 }
     */
    offset?: Partial<{
        x: number;
        y: number;
        z: number;
    }>;
    /**
     * @description: 滑动屏幕时允许打断漫游
     * @default: true
     */
    allowBroke?: boolean;
}
export default class MoveController extends CruiseController<Data, MoveConfig> {
    private curve;
    private baseCurveOffset;
    private curveOffset;
    private playStartedTime;
    private duration;
    constructor(five: Five, config?: MoveConfig);
    load(data: Data, state?: PartialDeep<PluginState>): Promise<void>;
    changeSpeed: (speed: number, userAction?: boolean) => void;
    moveToStart: () => void;
    playFromStart: () => void;
    protected getDuration: () => number;
    protected getProgress: () => number;
    protected handlePlay(): Promise<string>;
    protected handlePause(options?: {
        userAction?: boolean;
    }): void;
}
export {};
