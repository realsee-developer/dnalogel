import { ModelMakerBaseItem } from './baseItem';
import type { ServerBoxItem } from '../typings';
/**
 * @description 模型标注的盒子类型标注的构造参数类型
 */
type ModelMakerBoxItemArgs = ConstructorParameters<typeof ModelMakerBaseItem<ServerBoxItem>>;
/**
 * @description 模型标注的盒子类型标注，即长方体
 * @extends ModelMakerBaseItem
 */
export declare class ModelMakerBoxItem extends ModelMakerBaseItem<ServerBoxItem> {
    constructor(...args: ModelMakerBoxItemArgs);
    enable(): void;
    disable(): void;
    show(): void;
    updateVisible(): void;
    protected onClick(): boolean;
    private hideTag;
}
export {};
