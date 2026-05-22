export interface Water {
    isHot: boolean;
    quality: number;
}
export interface Pipe {
    id: string;
    path: number[][];
    texture?: string;
    radius: number;
    water: Water;
}
export interface Pipeline {
    startLibraryID: number;
    endLibraryID: number;
    pipes: Pipe[];
}
export interface RootObject {
    pipelines: Pipeline[];
    pipes: Pipe[];
}
