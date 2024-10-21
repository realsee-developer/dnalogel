import type { TagIconUrl } from '..';
export declare function getImageSize(url: string): Promise<{
    width: number;
    height: number;
}>;
export declare function getImageInfo<T extends Pick<TagIconUrl, 'url' | 'ratio'>>(params: T): Promise<T & {
    width: number;
    height: number;
}>;
export declare function getKeyframeInfo<T extends Pick<TagIconUrl, 'fps' | 'ratio' | 'steps' | 'url'>>(params: T): Promise<T & {
    width: number;
    height: number;
    duration: string;
}>;
