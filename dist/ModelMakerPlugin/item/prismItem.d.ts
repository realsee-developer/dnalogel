import { ModelMakerBaseItem } from './baseItem';
export declare class ModelMakerPrismItem extends ModelMakerBaseItem {
    constructor(...args: ConstructorParameters<typeof ModelMakerBaseItem>);
    onModelShownFloorChange: (fiveCurrentfloor: number | null) => void;
    show(): void;
    hide(): void;
    private updateFiveCurrentFloorState;
}
