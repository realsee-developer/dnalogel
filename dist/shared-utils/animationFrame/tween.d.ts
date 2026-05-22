import * as TWEEN from '@tweenjs/tween.js';
export declare const Easing: Readonly<{
    Linear: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    } & {
        None: (amount: number) => number;
    }>;
    Quadratic: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Cubic: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Quartic: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Quintic: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Sinusoidal: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Exponential: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Circular: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Elastic: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Back: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    Bounce: Readonly<{
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    }>;
    generatePow(power?: number): {
        In: (amount: number) => number;
        Out: (amount: number) => number;
        InOut: (amount: number) => number;
    };
}>;
interface ITween<T> extends TWEEN.Tween<T> {
    onDestroy: (fn: () => void) => TWEEN.Tween<T>;
    destroy: () => void;
}
/**
 * 对象变化的补间动画
 * 1. 应用 requestAnimationFrameInterval 做 update
 * 2. 在原生 tween 上新增 destroy 方法和 onDestroy 监听
 * DOC： https://github.com/tweenjs/tween.js
 * @param from 对象起始状态
 * @param to 对象末尾状态
 * @param duration 经历时间（s）
 * @param easing 过程动画，默认是 Easing.Linear.None
 */
export default function tween<T>(from: T, to: T, duration: number, easing?: (amount: number) => number): ITween<T>;
export declare function tweenProgress(duration: number, easing: typeof Easing.Linear.None): ITween<{
    progress: number;
}>;
export {};
