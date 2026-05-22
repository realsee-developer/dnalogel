import * as TWEEN from '@tweenjs/tween.js';
export declare class BetterTween<T> extends TWEEN.Tween<T> {
    private disposeMethods;
    private animationFrameDisposer?;
    onDispose: (callback: () => void) => this;
    play: () => this;
    stop: () => this;
    dispose: () => void;
}
export declare function tweenProgress(duration?: number, easing?: (amount: number) => number): BetterTween<{
    progress: number;
}>;
