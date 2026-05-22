import type { StickType, Tag } from '../../typings';
export declare function getTagStickType(tag: Tag): StickType;
export default function formatTag<T extends Tag>(tag: T): tag is T & {
    stickType: StickType;
};
