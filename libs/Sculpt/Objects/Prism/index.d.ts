import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import { PrismMesh, type PrismData, type PrismStyle } from '../../Meshes/Prism';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import { PrismMeshEditor } from '../../Editors/PrismMeshEditor';
import type { LiteralString } from '../../../typings/utils.type';
export interface PrismImportData extends BaseImportData, PrismData {
    type: LiteralString<'Prism'>;
    style?: Partial<PrismStyle>;
}
export declare class Prism extends BaseObject<PrismImportData> {
    readonly type = "Prism";
    prismMesh: PrismMesh;
    get editor(): PrismMeshEditor;
    _editor: PrismMeshEditor;
    get data(): {
        readonly points: [number, number, number][];
        readonly heightPoint: [number, number, number];
        readonly style: {
            readonly color: number;
            readonly lineWidth: number;
            readonly lineColor: number;
        };
        readonly id: string;
        readonly type: string;
    };
    constructor(data?: PrismImportData, config?: Partial<BaseObjectConfig>);
    setData(data: Partial<PrismImportData>): void;
    highlight(): void;
    unhighlight(): void;
    create(params?: Partial<PrismStyle>): Promise<void>;
}
export declare function createPrism(prismMesh: PrismMesh, pointSelector: PointSelector): Promise<void>;
