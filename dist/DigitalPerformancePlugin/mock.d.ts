interface MockAction {
    repeat: boolean;
    name: string;
    animationUrl: string;
    duration: number;
    rotation?: any;
    subAction?: {
        url: string;
        position?: number[];
        rotation?: number[];
    };
}
interface MockPoint {
    point: {
        x: number;
        y: number;
        z: number;
    };
    curveIndex?: number;
    actions: MockAction[];
}
interface MockTrack {
    easing: string;
    duration: number;
    path: {
        x: number;
        y: number;
        z: number;
    }[];
    points: MockPoint[];
}
interface MockFiveState {
    longitude: number;
    latitude: number;
    fov: number;
    offset: {
        x: number;
        y: number;
        z: number;
    };
    distance: number;
    mode: string;
    workCode: string;
    panoIndex: number;
}
interface Mock {
    id: number;
    matrix: number[];
    modelUrl: string;
    name: string;
    animationUrl: string;
    repeat: string;
    track: MockTrack;
    cover_img?: string;
    fiveState?: MockFiveState;
}
export declare function convertMockToPlayer(mockData: Mock, totalDelay?: number, rotationWalkDuration?: number): {
    name: string;
    type: "model";
    model: string;
    keyframes: {
        visible: boolean;
        timeStamp: number;
        position: number[];
        quaternion: number[];
        scale: number[];
    }[];
    id?: undefined;
} | {
    id: number;
    name: string;
    type: "model";
    model: string;
    keyframes: any[];
};
export {};
