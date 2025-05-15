import type { ServerPrismItem } from '../typings';
import { ModelMakerBaseItem } from './baseItem';
/**
 * @description 模型标注的棱柱类型标注的构造参数类型
 */
type ModelMakerPrismItemArgs = ConstructorParameters<typeof ModelMakerBaseItem<ServerPrismItem>>;
/**
 * @description 模型标注的棱柱类型标注
 * @extends ModelMakerBaseItem
 */
export declare class ModelMakerPrismItem extends ModelMakerBaseItem<ServerPrismItem> {
    constructor(...args: ModelMakerPrismItemArgs);
    onModelShownFloorChange: (fiveCurrentfloor: number | null) => void;
    show(): void;
    hide(): void;
    private updateFiveCurrentFloorState;
}
export {};
