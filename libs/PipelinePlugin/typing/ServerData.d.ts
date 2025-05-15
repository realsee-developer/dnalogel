export interface LinesDataset {
    id: string;
    type: string;
    name: string;
    data: number[][];
}
export interface ConnectsDataset {
    waterType: number;
    start: number;
    end: number;
    data: string[];
}
export interface WaterTypeMap {
    name: string;
    type: number;
}
export interface ModelMap {
    library: number;
    name: string;
}
/** LinesDataset 的别名 */
export type PipeItem = LinesDataset;
export interface RootObject {
    LinesDataset: LinesDataset[];
    ConnectsDataset: ConnectsDataset[];
    WaterTypeMap: WaterTypeMap[];
    ModelMap: ModelMap[];
}
