import type { PanoTagPluginController, TagInstance } from '../index';
import type * as BasePlugin from '../../base/BasePlugin';
import type { Writable } from 'svelte/store';
import type { TagId } from './tag/Utils';
import type { TagContentType } from './tag/TagData';
export type TagHooks = InstanceType<typeof PanoTagPluginController>['hooks'];
export interface State extends BasePlugin.State {
}
export interface TemporaryState {
    visible?: boolean;
}
export type TagClickParams = {
    event: Event;
} & ({
    target: 'TagPoint';
    tag: PointTagInstance;
} | {
    target: 'TagContent';
    tag: TagInstance;
} | {
    target: 'AudioTagPlayIcon';
    tag: TagInstance;
    audioInstance: HTMLAudioElement;
} | {
    target: 'TagModel';
    tag: TagInstance<'Model', 'Model'> | TagInstance<'MediaModel', 'Model'>;
} | {
    target: 'TagPopoverViewMore';
    tag: TagInstance;
} | {
    target: 'TagPopoverShare';
    tag: TagInstance;
} | {
    target: 'TagPopoverContent';
    tag: TagInstance;
});
export interface PluginEventMap extends BasePlugin.EventMap<State> {
    loaded: () => void;
    tagsLengthChange: () => void;
    click: (params: TagClickParams) => void;
    playStateChange: (params: {
        event: Event;
        state: 'playing' | 'paused';
        tag: TagInstance;
        mediaInstance: HTMLMediaElement;
    }) => void;
    exposure: (params: {
        id: TagId;
        type: 'start' | 'end';
    }) => void;
    show: (options: {
        userAction: boolean;
    }) => void;
    hide: (options: {
        userAction: boolean;
    }) => void;
    enable: (options: {
        userAction: boolean;
    }) => void;
    disable: (options: {
        userAction: boolean;
    }) => void;
    loadVideoFirstFrame: () => void;
}
export type TagEvents<C extends TagContentType = TagContentType> = {
    unfolded: () => void;
    folded: () => void;
    enable: () => void;
    disable: () => void;
    show: () => void;
    hide: () => void;
    dataChanged: (data: TagInstance<C>['data']) => void;
    hover: (params: {
        event: Event;
        tag: TagInstance;
    }) => void;
    showPopover: () => void;
    hidePopover: () => void;
};
export interface TagCacheInterface {
    visible?: boolean;
    unfolded?: boolean;
    minimumDistanceResult?: boolean;
    distance?: number;
    angle?: number;
    /** MedialModelTag 中，多媒体的隐藏 & 展示 */
    modelMedialVisible?: boolean;
    __debug_visible_reason__?: {
        value: boolean;
        reason?: any;
        checkedList?: string[];
    } & {
        [key: string]: any;
    };
}
export type MediaStore = Writable<{
    currentMediaElement: HTMLMediaElement | null;
}>;
export type PointTagInstance<C extends TagContentType = TagContentType> = TagInstance<C, '3DPoint' | '2DPoint'>;
