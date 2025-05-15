import type { FivePlugin } from '@realsee/five';
import Controller from './Controller';
export declare const CSS3DRenderPlugin: FivePlugin<void, InstanceType<typeof Controller>>;
export { CSS3DRender } from './utils/three/CSS3DRender';
export * from './typing';
export default CSS3DRenderPlugin;
