import type { Model } from '.';
import type Point from './point';
import type { LineJson } from '../typings/data';
import type { Polyline } from './polyline';
import { Subscribe, type SubscribeEventMap } from '@realsee/five';
import { DistanceItem } from '../utils/dom/distanceItem';
import type * as THREE from 'three';
import type { FiveLine } from '../../shared-utils/five/FiveLine';
export interface ILineHook extends SubscribeEventMap {
    selected: (line: Line) => void;
    textChanged: (text: string | undefined) => void;
}
export default class Line {
    id: string;
    selected: boolean;
    text?: string;
    readonly type = "line";
    readonly model: Model;
    readonly mesh: FiveLine;
    readonly points: Point[];
    readonly lightMesh: FiveLine;
    readonly hook: Subscribe<ILineHook>;
    readonly distanceItem: DistanceItem;
    private polyline?;
    private visible?;
    constructor(point: Point, anotherPoint: Point, model: Model);
    hide(): void;
    show(): void;
    setPoints(startPoint: THREE.Vector3, endPoint: THREE.Vector3): void;
    remove(): void;
    clear(): void;
    isEmpty(): boolean;
    getPolyline(): Polyline;
    findAnotherPoint(point: Point): Point;
    setText(text: string | null): void;
    toJSON(): LineJson;
    toJson(): LineJson;
    clone(): Line;
}
