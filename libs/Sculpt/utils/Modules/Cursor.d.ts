type CursorType = 'auto' | 'pen' | 'pen-forbidden' | 'pen-crosshair' | 'pne-polygon' | 'pen-circle' | 'crosshair-rectangle' | 'crosshair-circle';
export declare class Cursor {
    private container;
    private deleteButton?;
    constructor(container?: HTMLElement);
    /**
     * @param type - The type of the cursor.
     */
    setType(type: CursorType): void;
    showDeleteButton(params: {
        clientX: number;
        clientY: number;
        container?: HTMLElement;
        onClick: () => void;
    }): HTMLElement;
    removeDeleteButton(): void;
    tip(tip: string): () => void;
    closeTip(): void;
    reset(): void;
}
export {};
