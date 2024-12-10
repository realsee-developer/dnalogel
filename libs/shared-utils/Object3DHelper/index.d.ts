import type { Object3DHelperEventMap, Object3DHelperState } from './typings';
import type { ObjectHelperControllers } from './typings';
import { Subscribe } from '../Subscribe';
export declare class Object3DHelper {
    controllers: ObjectHelperControllers;
    state: Object3DHelperState;
    hooks: Subscribe<Object3DHelperEventMap>;
    private eventListener;
    constructor(controllers?: ObjectHelperControllers);
    /**
     * @description Show guide line
     */
    show(options?: {
        userAction?: boolean;
    }): Promise<void>;
    /**
     * @description Hide guide line
     */
    hide(options?: {
        userAction?: boolean;
    }): Promise<void>;
    /**
     * @description Enable
     */
    enable(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Disable
     */
    disable(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Dispose
     */
    dispose(): void;
    setState(state: Partial<Object3DHelperState>, options?: {
        userAction?: boolean;
    } & Record<string, any>): void;
    addControllers(controllers: ObjectHelperControllers): void;
    /**
     * @description 初始化 helpers 的位置
     */
    initialHelperMatrix(): void;
    getCurrentState(): Object3DHelperState;
    private handleEnable;
    private handleVisible;
    private everyControllerDo;
    private handleDispose;
    private actionIfStateIsEnabled;
}
