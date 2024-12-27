import type { Five } from '@realsee/five';
import { Cursor } from './Cursor';
import { Object3DHelperController } from '../../../Object3DHelperPlugin';
import { FiveDomEvents } from '../../../shared-utils/five/FiveDomEvents';
import { PointSelector } from '../../../shared-utils/three/PointSelector';
declare class GlobalModules {
    five: Five;
    _cursor?: Cursor;
    _pointSelector?: PointSelector;
    _fiveDomEvents?: FiveDomEvents;
    _object3DHelper?: Object3DHelperController;
    inited: boolean;
    get cursor(): Cursor;
    get pointSelector(): PointSelector;
    get fiveDomEvents(): FiveDomEvents;
    get object3DHelper(): Object3DHelperController;
    init: (five: Five) => void;
}
declare const globalModules: GlobalModules;
export { globalModules };
