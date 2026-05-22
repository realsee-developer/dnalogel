import * as THREE from 'three';
import { GLTFLoader } from '@realsee/five/gltf-loader';
import { DigitalHuman } from './DigitalHuman';
import type { DigitalScript, DigitalChapter } from './DigitalStateMachine';
export declare class DigitalPlayground {
    gltfLoader: GLTFLoader;
    script: DigitalScript | null;
    currentChapter: DigitalChapter | null;
    private digitalHumanMap;
    private digitalItemMap;
    private skeletalAnimationMap;
    private debugMode;
    constructor(debugMode?: boolean);
    setScript(script: DigitalScript): void;
    loadModel(url: string, id?: string): Promise<DigitalHuman>;
    loadModels(urls: string[], ids?: string[]): Promise<DigitalHuman[]>;
    loadAnimation(url: string): Promise<THREE.AnimationClip>;
    loadAnimations(urls: string[]): Promise<THREE.AnimationClip[]>;
    getAnimation(url: string): THREE.AnimationClip | null;
    getDigitalHuman(url: string, id?: string): DigitalHuman | null;
    playByChapter(chapter: DigitalChapter): Promise<any[]>;
    loadItems(urls: string[], offsets?: Map<string, {
        position: number[];
        rotation: number[];
    }>): Promise<any[]>;
    loadItem(url: string, offset?: {
        position: number[];
        rotation: number[];
    }): Promise<any>;
    getDigitalItem(url: string): any | null;
    pause(): void;
    continue(): void;
    reset(): void;
    setTimelineTo(time: number): void;
    /**
     * 销毁 playground
     */
    dispose(): void;
    private loadGLTF;
}
