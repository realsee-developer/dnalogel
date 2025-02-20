import { ModelMakerBaseItem } from './baseItem';
export declare class ModelMakerBoxItem extends ModelMakerBaseItem {
    constructor(...args: ConstructorParameters<typeof ModelMakerBaseItem>);
    enable(): void;
    disable(): void;
    show(): void;
    protected onClick(): boolean;
    private hideTag;
    updateVisible(): void;
}
