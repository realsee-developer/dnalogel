export interface ModelTVVideoPluginParameterType {
    videoElement?: HTMLVideoElement;
}
export declare enum DIRECTION {
    TOP_LEFT = "topLeft",
    TOP_RIGHT = "topRight",
    BOTTOM_LEFT = "bottomLeft",
    BOTTOM_RIGHT = "bottomRight"
}
export interface Point {
    x: number;
    y: number;
    z: number;
}
export interface ModelTVVideoPluginData {
    enable?: boolean;
    video_src: string;
    video_poster_src: string;
    points: Point[][] | Record<DIRECTION, Point>[];
}
export interface ModelTVVideoPluginExportType {
    enable: () => void;
    disable: () => void;
    load: (data: ModelTVVideoPluginData, videoElement?: HTMLVideoElement) => Promise<void>;
}
