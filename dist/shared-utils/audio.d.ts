export declare const audioCache: Record<string, IAudio[]>;
export declare enum AudioNamespace {
    Default = "default",
    GetAudioDuration = "getAudioDuration",
    PlayAudio = "playAudio"
}
export declare function getAudio(src?: string, params?: {
    namespace?: string;
}): IAudio;
export declare function getAudioDuration(audio?: string | IAudio): Promise<number>;
export declare function waitForBlankAudioGenerated(checkInterval?: number, timeout?: number, params?: {
    namespace?: string;
}): Promise<void>;
/**
 * @description: 生成空音频
 */
export declare function generateBlankAudio(length: number, params?: {
    namespace?: string;
}): void;
declare const IAudio_base: new (src?: string) => HTMLAudioElement;
export declare class IAudio extends IAudio_base {
    preload: "auto";
    crossOrigin: "anonymous";
    get isBlankAudio(): boolean;
    get src(): string;
    set src(paramsSrc: string);
    get muted(): boolean;
    set muted(muted: boolean);
    realSrc: string;
    inited: boolean;
    removeDocumentEventListener: () => void;
    constructor(src?: string);
    clear(): void;
}
export {};
