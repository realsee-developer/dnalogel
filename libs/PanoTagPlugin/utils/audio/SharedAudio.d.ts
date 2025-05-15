export declare class SharedAudio extends Audio {
    get paused(): boolean;
    get currentTime(): number;
    private sharedAudioSrc?;
    private sharedAudioPaused;
    private sharedAudioCurrentTime;
    private tryplaying;
    private audioInstance?;
    private eventListenerDisposer?;
    constructor(src?: string);
    play(): Promise<void>;
    pause(e?: Event): void;
    dispose(): void;
    private clear;
    private endedHandler;
    private addEventListeners;
}
