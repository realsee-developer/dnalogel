import * as THREE from 'three';
import type { GLTFObject } from '@realsee/five/gltf-loader';
import { DigitalStateMachine } from './DigitalStateMachine';
import type { DigitalModelKeyframe, DigitalModelPlayerItem, DigitalModelPlayerEffect } from './DigitalStateMachine';
export declare class DigitalHuman {
    model: GLTFObject;
    keyframesManager: DigitalStateMachine;
    keyframes: DigitalModelKeyframe[];
    items: DigitalModelPlayerItem[];
    effects: DigitalModelPlayerEffect[];
    digitalPlayground: any;
    state: {
        currentTime: number;
        currentAnimation: THREE.AnimationClip | null;
        currentAnimationRepeat: boolean;
        playing: boolean;
    };
    animationFrameId: number | null;
    curveLine: THREE.Line;
    effectsGroup: THREE.Group;
    effectObjects: Map<string, THREE.Mesh>;
    container: THREE.Group;
    private mixer;
    private action;
    private itemMatrixMap;
    private trace;
    private processedNeedRenderKeyframeIndices;
    private attachedItems;
    private rightHandBone;
    constructor(model: GLTFObject, digitalPlayground: any);
    playAnimation({ animation, repeat, switchDuration }: {
        animation: THREE.AnimationClip;
        repeat: boolean;
        switchDuration: number;
    }): void;
    pauseAnimation(): void;
    stopAnimation(): void;
    continueAnimation(): void;
    attachItem(): void;
    init(): void;
    reset(): void;
    play(option?: {
        keyframes: DigitalModelKeyframe[];
        items: DigitalModelPlayerItem[];
        effects: DigitalModelPlayerEffect[];
    }): Promise<boolean>;
    traceUpDate(): void;
    clearTrace(): void;
    clearProcessedNeedRenderKeyframeIndices(): void;
    private hasProcessedNeedRenderForTimestamp;
    private markNeedRenderProcessedForTimestamp;
    private getRightHandBone;
    private updateKeyframeItems;
    private detachAllKeyframeItems;
}
