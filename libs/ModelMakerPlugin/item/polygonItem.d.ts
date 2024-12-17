import { ModelMakerBoxItem } from './boxItem';
export declare class ModelMakerPolygonItem extends ModelMakerBoxItem {
    constructor(...args: ConstructorParameters<typeof ModelMakerBoxItem>);
    show(): void;
    private onPanoArrived;
    private onModeChange;
    private updatePanoIndex;
    private updateMode;
}
