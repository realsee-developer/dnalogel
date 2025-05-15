import * as THREE from 'three';
import { type ColorStyle, type OpacityStyle, type OcclusionStyle, type Color } from '../../typings/style';
import { IObject3D } from '../../../shared-utils/three/IObject3D';
export type ColoredMeshStyle = OpacityStyle & ColorStyle & OcclusionStyle;
export default class ColoredMesh<TGeometry extends THREE.Geometry | THREE.BufferGeometry = THREE.Geometry | THREE.BufferGeometry> extends IObject3D {
    name: string;
    meshFont: THREE.Mesh<TGeometry, THREE.MeshBasicMaterial>;
    meshBackground: THREE.Mesh<TGeometry, THREE.MeshBasicMaterial>;
    get style(): {
        color: THREE.Color;
        opacity: number;
        occlusionVisibility: boolean;
        occlusionMode: "depthTest" | "translucence";
    };
    get color(): THREE.Color;
    get opacity(): number;
    get occlusionVisibility(): boolean;
    get occlusionMode(): 'depthTest' | 'translucence';
    set geometry(geometry: TGeometry);
    get geometry(): TGeometry;
    private paramsStyle;
    private _geometry;
    private highlighted;
    private opacityBeforeHighlight;
    private colorBeforeHighlight;
    constructor(params?: Partial<ColoredMeshStyle>);
    setStyle(params: Partial<ColoredMeshStyle>): void;
    highlight(params?: {
        color?: Color;
    }): void;
    unhighlight(): void;
    private setOcclusionVisibility;
}
