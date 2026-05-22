export declare function noop(): void;
export interface Coords {
    x: number;
    y: number;
}
export declare function queue(promiseCallback?: () => Promise<void>): void;
export declare function transformCoords(coords: Coords, cw: number, ch: number): {
    x: number;
    y: number;
};
export declare function unTransformCoords(coords: Coords, cw: number, ch: number): {
    x: number;
    y: number;
};
export declare function getQuadraticCurvePoint(points: Coords[]): {
    control?: undefined;
    end?: undefined;
} | {
    control: Coords;
    end: {
        x: number;
        y: number;
    };
};
export declare function execInterval(i: number, time: number, callback?: typeof noop): void;
export declare function nextFrame(fn: FrameRequestCallback, delay?: number): void;
