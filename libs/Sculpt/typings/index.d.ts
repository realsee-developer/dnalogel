import type { SimplifyDeep } from './utils.type';
export type { SimplifyDeep };
import type { Point, PointImportData } from '../Objects/Point';
import type { Line, LineImportData } from '../Objects/Line';
import type { Polyline, PolylineImportData } from '../Objects/Polyline';
import type { Polygon, PolygonImportData } from '../Objects/Polygon';
import type { Prism, PrismImportData } from '../Objects/Prism';
import type { Rectangle, RectangleImportData } from '../Objects/Rectangle';
import type { Circle, CircleImportData } from '../Objects/Circle';
import type { Cylinder, CylinderImportData } from '../Objects/Cylinder';
import type { Box, BoxImportData } from '../Objects/Box';
import type { PointStyle } from '../Meshes/Point';
import type { LineMeshStyle } from '../Meshes/Line';
import type { PolylineStyle } from '../Meshes/Polyline';
import type { PrismStyle } from '../Meshes/Prism';
import type { RectangleWithEdgeMeshStyle as RectangleStyle } from '../Meshes/RectangleWithEdge';
import type { CircleWithEdgeMeshStyle as CircleStyle } from '../Meshes/CircleWithEdge';
import type { CylinderStyle } from '../Meshes/Cylinder';
import type { BoxStyle } from '../Meshes/Box';
import type { AreaStyle } from '../Meshes/Area';
export declare namespace SculptData {
    type PolylineData = SimplifyDeep<PolylineImportData>;
    type PointData = SimplifyDeep<PointImportData>;
    type PolygonData = SimplifyDeep<PolygonImportData>;
    type PrismData = SimplifyDeep<PrismImportData>;
    type RectangleData = SimplifyDeep<RectangleImportData>;
    type CircleData = SimplifyDeep<CircleImportData>;
    type CylinderData = SimplifyDeep<CylinderImportData>;
    type BoxData = SimplifyDeep<BoxImportData>;
}
export type { Point, PointImportData };
export type { Line, LineImportData };
export type { Polyline, PolylineImportData };
export type { Polygon, PolygonImportData };
export type { Prism, PrismImportData };
export type { Rectangle, RectangleImportData };
export type { Circle, CircleImportData };
export type { Cylinder, CylinderImportData };
export type { Box, BoxImportData };
export type { PointStyle };
export type { LineMeshStyle };
export type { PolylineStyle };
export type { PrismStyle };
export type { RectangleStyle };
export type { CircleStyle };
export type { CylinderStyle };
export type { BoxStyle };
export type { AreaStyle };
export type BuiltInData = PolylineImportData | PointImportData | PolygonImportData | PrismImportData | RectangleImportData | CircleImportData | CylinderImportData | BoxImportData | LineImportData;
export type BuiltInItem = Polyline | Point | Polygon | Prism | Rectangle | Circle | Cylinder | Box | Line;
export declare namespace SculptType {
    /**
     * - color: 颜色
     * - opacity: 透明度
     * - lineColor: 边框线颜色
     * - lineWidth: 线宽
     * - lineOpacity: 边框线透明度
     * - occlusionVisibility: 是否以一种半透明的方式显示遮挡的部分
     * - occlusionMode: 遮挡模式
     */
    type Theme = Partial<{
        point: Partial<PointStyle>;
        line: Partial<LineMeshStyle>;
        polyline: Partial<PolylineStyle>;
        polygon: Partial<AreaStyle>;
        prism: Partial<PrismStyle>;
        rectangle: Partial<RectangleStyle>;
        circle: Partial<CircleStyle>;
        cylinder: Partial<CylinderStyle>;
        box: Partial<BoxStyle>;
    }>;
}
