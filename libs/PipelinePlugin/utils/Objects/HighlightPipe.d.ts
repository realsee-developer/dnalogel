import type { PipeParams as BasePipeParams, AnimeOptions } from './Pipe';
import { ObjectPipe } from './Pipe';
export type PipeParams = BasePipeParams;
export declare class ObjectHighlightPipe extends ObjectPipe {
    imageCount: number;
    private highlightAnime?;
    constructor(params: PipeParams);
    highlight(options?: AnimeOptions): void;
    highlight1(options?: AnimeOptions): void;
    disposeAnime(): void;
}
