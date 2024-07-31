import type { Tag } from './Tag';
import type TagContentSvelte from '../../Components/Tag/index.svelte';
import type { TagContentType } from './TagData';
import type { StickType, TagGLTFObject } from './Utils';
import type { Create3DDomContainerReturnType } from '../../../CSS3DRenderPlugin';
import type { Vector3 } from 'three';
import type { ImagePlane, VideoPlane } from '../../utils/model/mediaPlane';
import type { TagEvents } from '../controller';
import type { TagConfig } from './TagConfig';
import type { Mode, Subscribe } from '@realsee/five';
import type { SetRequired } from 'type-fest';
import type { PartialObjectDeep } from '../../../typings/typings';
import type anime from 'animejs';
type RequiredTag<C extends TagContentType = TagContentType, S extends StickType = StickType> = SetRequired<Tag<C, S>, 'id' | 'data' | 'enabled' | 'config' | 'stickType' | 'contentType'>;
export type TagInstance<C extends TagContentType = TagContentType, S extends StickType = StickType> = RequiredTag<C, S> & Partial<{
    screenPosition: {
        leftPercent: number;
        topPercent: number;
    } | null;
    zIndex?: number;
    temporaryState: {
        visible: boolean;
    };
    tag3DContentSvelte: {
        svelteApp: TagContentSvelte;
        /** @deprecated rename to css3DInstance */
        domContainer: NonNullable<Create3DDomContainerReturnType>;
        css3DInstance: NonNullable<Create3DDomContainerReturnType>;
        initialNormal: Vector3;
        currentNormal: Vector3;
        dispose: () => void;
    };
    initialConfig: TagConfig<C>;
    mediaPlane: ImagePlane | VideoPlane;
    model: {
        promise: Promise<TagGLTFObject>;
        object?: TagGLTFObject;
    };
    loading: boolean;
    play: () => void;
    pause: () => void;
    dom?: HTMLDivElement;
    contentDom?: HTMLDivElement;
}> & {
    state: {
        visible?: boolean;
        unfolded: boolean;
    };
    config: TagConfig<C>;
    computedConfig: TagConfig<C> & {
        configWithFiveMode?: {
            [key in Mode]?: TagConfig<C>;
        };
    };
    originPosition: Tag<C, S>['position'];
    hooks: Subscribe<TagEvents<C>>;
    unfold: () => void;
    fold: () => void;
    enable: () => void;
    disable: () => void;
    destroy: () => void;
    changeData: (data: PartialObjectDeep<TagInstance<C>['data']>) => void;
    changePosition: (position: TagInstance<C>['position']) => void;
    blink: (animeConfig?: Partial<anime.AnimeParams>) => Promise<void>;
};
export {};
