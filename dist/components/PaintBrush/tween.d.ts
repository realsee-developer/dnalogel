import { Tween } from '@tweenjs/tween.js';
export interface TweenRes extends Tween<any> {
    onDestroy: (fn: () => void) => any;
    destroy: () => any;
}
export default function tween(from: any, to: any, duration: number, easing?: (amount: number) => number): TweenRes;
export declare function tweenProgress(duration: number, easing: (amount: number) => number): TweenRes;
