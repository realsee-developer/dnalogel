import type { ServerTrianglesItem } from '../typings';
import { ModelMakerBaseItem } from './baseItem';
/**
 * @description 模型标注的多边形类型标注的构造参数类型
 */
type ModelMakerPolygonItemArgs = ConstructorParameters<typeof ModelMakerBaseItem<ServerTrianglesItem>>;
/**
 * @description 模型标注的多边形类型标注，即多边形
 * @extends ModelMakerBaseItem
 */
export declare class ModelMakerPolygonItem extends ModelMakerBaseItem<ServerTrianglesItem> {
    constructor(...args: ModelMakerPolygonItemArgs);
    show(): void;
    private onPanoArrived;
    private onModeChange;
    private updatePanoIndex;
    private updateMode;
}
export {};
