import type { TagContentType } from './TagData';
import type { StickType } from './Utils';
import type { BaseTag } from '../../controller/Tag/BaseTag';
import type { Tag } from '../..';
import type { Overwrite } from '../../../typings/utils.type';
export type TagInstance<C extends TagContentType = TagContentType, S extends StickType = StickType> = Overwrite<Tag<C, S>, BaseTag<C, S>> & {
    [key: string]: any;
};
