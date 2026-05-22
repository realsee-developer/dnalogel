import * as THREE from 'three';
import type { DigitalChapter } from '../core/DigitalStateMachine';
export type { DigitalScript, DigitalChapter, DigitalModelPlayer, DigitalSubTitlePlayer, DigitalCameraPlayer, DigitalModelKeyframe, DigitalSubTitleKeyframe, DigitalCameraKeyframe, DigitalModelState, DigitalSubTitleState, DigitalCameraState, DigitalModelPlayerItem, DigitalModelPlayerEffect, DigitalEffectKeyframe, DigitalDataState, DigitalDataPlayer, KeyframeType, StateType, } from '../core/DigitalStateMachine';
export interface DigitalPerformancePluginConfig {
    autoPlay?: boolean;
    loop?: boolean;
    debug?: boolean;
}
export interface GlobalProgress {
    currentTime: number;
    totalTime: number;
    percentage: number;
    currentChapterIndex: number;
    currentChapterTime: number;
    currentChapter?: DigitalChapter;
}
export interface ChapterTimeInfo {
    chapterIndex: number;
    chapterName: string;
    startTime: number;
    duration: number;
    endTime: number;
    chapter: DigitalChapter;
}
export interface ChapterLocation {
    chapterIndex: number;
    chapterTime: number;
    chapter: DigitalChapter;
}
export type ProgressListener = (progress: GlobalProgress) => void;
export interface ProgressBarEvents {
    'progress-changed': ProgressListener;
    'chapter-changed': (chapterIndex: number, chapter: DigitalChapter) => void;
    'seek-started': (targetTime: number) => void;
    'seek-completed': (actualTime: number) => void;
    'playback-started': (startTime: number) => void;
    'playback-completed': () => void;
}
export interface ExtendedAnimationConfig {
    url: string;
    repeat: boolean;
    switchDuration?: number;
    isOver?: boolean;
}
export interface DigitalItemKeyframe {
    visible: boolean;
    timeStamp: number;
    position?: number[];
    quaternion?: number[];
    scale?: number[];
}
export interface DigitalItemState {
    visible: boolean;
    translation?: THREE.Vector3;
    quaternion?: THREE.Quaternion;
    scale?: THREE.Vector3;
    keyframeIndex: number;
    isFinal: boolean;
}
export interface DigitalEffectState {
    visible: boolean;
    image?: string;
    intensity?: number;
    color?: THREE.Color;
    scale?: THREE.Vector3;
    keyframeIndex: number;
    isFinal: boolean;
}
export interface TracePoint {
    position: THREE.Vector3;
    timestamp: number;
}
export interface TraceManager {
    tracePoints: THREE.Vector3[];
    maxPoints: number;
    addPoint(point: THREE.Vector3): void;
    clear(): void;
    getPoints(): THREE.Vector3[];
}
