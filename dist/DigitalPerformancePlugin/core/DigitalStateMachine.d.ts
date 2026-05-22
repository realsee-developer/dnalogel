import * as THREE from 'three';
interface DigitalScript {
    name: string;
    uuid: string;
    assets: {
        models: string[];
        animations: string[];
    };
    chapters: DigitalChapter[];
}
interface DigitalDataPlayer {
    name: string;
    type: 'data';
    data: DigitalModelKeyframe[];
}
interface DigitalModelPlayerItem {
    name: string;
    initialMatrix: number[];
    attachedBone: string;
    model: string;
    keyframes: DigitalItemKeyframe[];
}
interface DigitalEffectKeyframe {
    timeStamp: number;
    image: string;
    visible: boolean;
}
interface DigitalModelPlayerEffect {
    type: 'frameSequence';
    position: number[];
    keyframes: DigitalEffectKeyframe[];
}
interface DigitalModelPlayer {
    id: string;
    name: string;
    type: 'model';
    model: string;
    keyframes: DigitalModelKeyframe[];
    items: DigitalModelPlayerItem[];
    effects: DigitalModelPlayerEffect[];
}
interface DigitalSubTitlePlayer {
    name: string;
    type: 'subTitle';
    keyframes: DigitalSubTitleKeyframe[];
}
interface DigitalCameraPlayer {
    name: string;
    type: 'camera';
    keyframes: DigitalCameraKeyframe[];
}
interface DigitalChapter {
    name: string;
    players: Array<DigitalModelPlayer | DigitalSubTitlePlayer | DigitalCameraPlayer>;
}
interface DigitalItemKeyframe {
    timeStamp: number;
    visible: boolean;
}
interface DigitalCameraKeyframe {
    timeStamp: number;
    matrix: number[];
    fov: number;
}
interface DigitalSubTitleKeyframe {
    visible: boolean;
    timeStamp: number;
    title: string;
    content: string;
    audio?: string;
    image?: string;
}
interface DigitalModelKeyframe {
    visible: boolean;
    timeStamp: number;
    animation?: {
        url: string;
        repeat: boolean;
        isOver?: boolean;
        switchDuration?: number;
        duration?: number;
        item?: {
            url: string;
            position?: number[];
            name?: string;
            rotation?: number[];
        };
    };
    position: number[];
    interpolationType?: 'linear' | 'parabola';
    quaternion: number[];
    scale: number[];
    adddon?: {
        text?: string;
        audio?: string;
    };
}
interface DigitalDataKeyframe {
    timeStamp: number;
    data: any;
}
interface DigitalModelState {
    translation: THREE.Vector3;
    quaternion: THREE.Quaternion;
    scale: THREE.Vector3;
    animation?: DigitalModelKeyframe['animation'];
    keyframeIndex: number;
    visible: boolean;
    isFinal: boolean;
}
interface DigitalSubTitleState {
    title: string;
    content: string;
    audio?: string;
    image?: string;
    keyframeIndex: number;
}
interface DigitalCameraState {
    matrix: number[];
    fov: number;
    transitionType: 'linear' | 'instant';
}
interface DigitalDataState {
    currentFrameData: DigitalDataKeyframe['data'];
    nextFrameData: DigitalDataKeyframe['data'] | null;
    progress: number;
}
interface DigitalItemState {
    timeStamp: number;
    visible: boolean;
}
interface DigitalEffectState {
    image: string;
    visible: boolean;
}
type KeyframeType<T> = T extends 'model' ? DigitalModelKeyframe : T extends 'camera' ? DigitalCameraKeyframe : T extends 'subtitle' ? DigitalSubTitleKeyframe : T extends 'data' ? DigitalDataKeyframe : T extends 'item' ? DigitalItemKeyframe : T extends 'effect' ? DigitalEffectKeyframe : never;
type StateType<T> = T extends 'model' ? DigitalModelState : T extends 'camera' ? DigitalCameraState : T extends 'subtitle' ? DigitalSubTitleState : T extends 'data' ? DigitalDataState : T extends 'item' ? DigitalItemState : T extends 'effect' ? DigitalEffectState : never;
declare class DigitalStateMachine {
    constructor();
    getStateByTime<T extends 'model' | 'camera' | 'subtitle' | 'data' | 'item' | 'effect'>(time: number, keyframes: Array<KeyframeType<T>>, type: T): StateType<T>;
    private getDataStateByTime;
    private getEffectStateByTime;
    private getItemStateByTime;
    private getCameraStateByTime;
    private getSubtitleStateByTime;
    private getModelStateByTime;
    private getKeyframeIndexByTime;
}
export { DigitalStateMachine };
export type { DigitalModelPlayerEffect, DigitalEffectKeyframe, DigitalDataState, DigitalModelPlayerItem, DigitalDataPlayer, DigitalCameraKeyframe, DigitalChapter, DigitalModelKeyframe, DigitalScript, DigitalSubTitleKeyframe, DigitalModelPlayer, DigitalSubTitlePlayer, DigitalCameraPlayer, DigitalModelState, DigitalSubTitleState, DigitalCameraState, KeyframeType, StateType, };
