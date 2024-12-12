export * from '../shared-utils/Object3DHelper/typings';
export * from './Controller';
import type { FivePlugin } from '@realsee/five';
import { Object3DHelperController } from './Controller';
export declare const Object3DHelperPlugin: FivePlugin<void, InstanceType<typeof Object3DHelperController>>;
export default Object3DHelperPlugin;
