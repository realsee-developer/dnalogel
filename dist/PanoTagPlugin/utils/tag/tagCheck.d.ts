import type { TagContentType, TagInstance } from '../../typings';
import type { ModelTagInterface } from '../../controller/Tag/ModelTag';
import type { PlaneTagInterface } from '../../controller/Tag/PlaneTag';
export declare function isPlaneTag<T extends TagContentType>(tag: TagInstance<T>): tag is PlaneTagInterface<T>;
export declare function isPoint3DTag<T extends TagContentType>(tag: TagInstance<T>): tag is TagInstance<T, '3DPoint'>;
export declare function is3DTag<T extends TagContentType>(tag: TagInstance): tag is TagInstance<T, '3DPoint'> | TagInstance<T, 'Plane'>;
export declare function isMediaModelTag(tag: TagInstance): tag is ModelTagInterface<'MediaModel'>;
export declare function isModelTag(tag: TagInstance): tag is ModelTagInterface<'Model'>;
export declare function isMediaPlaneTag(tag: TagInstance): tag is PlaneTagInterface<'MediaModel'>;
