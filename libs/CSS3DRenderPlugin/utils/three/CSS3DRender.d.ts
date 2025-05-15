import type * as THREE from 'three';
import { type AnyPosition } from '../../../shared-utils/positionToVector3';
import { ICSS3DRenderer as CSS3DRenderer } from './CSS3DRenderer';
import { Subscribe } from '../../../shared-utils/Subscribe';
import { CSS3DObjectPlus } from './CSS3DObject';
import { CSS3DBehindScene, CSS3DFrontScene } from './CSS3DScene';
import { CSS3DBehindGroup, CSS3DFrontGroup } from './CSS3DGroup';
export declare const PLUGIN: string;
export interface CSS3DRenderState {
    enabled: boolean;
    visible: boolean;
    disposed: boolean;
}
export type CSS3DRenderEventMap = {
    show: (options?: {
        userAction?: boolean;
    }) => void;
    hide: (options?: {
        userAction?: boolean;
    }) => void;
    enable: (options?: {
        userAction?: boolean;
    }) => void;
    disable: (options?: {
        userAction?: boolean;
    }) => void;
    render: () => void;
    dispose: () => void;
    /**
     * 插件状态变化
     * @param params.state      最新的State
     * @param params.prevState  上一个State
     * @param params.userAction 是否是用户触发
     */
    stateChange: (params: {
        state: CSS3DRenderState;
        prevState?: CSS3DRenderState;
        userAction: boolean;
    }) => void;
};
export interface Create3DDElementParamsType {
    points: AnyPosition[];
    config?: {
        ratio?: number;
        devicePixelRatio?: number;
        autoRender?: boolean;
        container?: HTMLElement;
        pointerEvents?: 'none' | 'auto';
        wrapperStyle?: Partial<CSSStyleDeclaration>;
        scene?: THREE.Scene;
    } & ({
        mode?: 'front';
    } | {
        mode: 'behind';
        scene: THREE.Scene;
    });
}
export declare const globalStore: {
    frontModeResizeObserver?: {
        observe: () => void;
        unobserve: () => void;
    };
    behindModeResizeObserver?: {
        observe: () => void;
        unobserve: () => void;
    };
    css3DObjects: CSS3DObjectPlus[];
    frontModeStore: {
        css3DScene?: CSS3DFrontScene;
        css3DRenderer: CSS3DRenderer;
        container?: HTMLElement;
    };
    behindModeStore: {
        css3DScene?: CSS3DBehindScene;
        css3DRenderer: CSS3DRenderer;
        container?: HTMLElement;
        scene?: THREE.Scene;
        camera?: THREE.Camera;
    };
};
declare function setFrontModeContainer(container: HTMLElement): void;
declare function setBehindModeContainer(container: HTMLElement): void;
export declare class CSS3DRender {
    static setFrontModeContainer: typeof setFrontModeContainer;
    static setBehindModeContainer: typeof setBehindModeContainer;
    hooks: Subscribe<CSS3DRenderEventMap>;
    state: CSS3DRenderState;
    get scene(): THREE.Scene;
    private _scene?;
    private store;
    static get frontModeCSS3DRenderer(): CSS3DRenderer;
    static get behindModeCSS3DRenderer(): CSS3DRenderer;
    get frontModeCSS3DRenderer(): CSS3DRenderer;
    get behindModeCSS3DRenderer(): CSS3DRenderer;
    constructor(scene?: THREE.Scene);
    setScene(scene: THREE.Scene): void;
    getCurrentState(): CSS3DRenderState;
    setState(state: Partial<CSS3DRenderState>, options?: {
        userAction: boolean;
    }): void;
    dispose(): void;
    show({ userAction }?: {
        userAction: boolean;
    }): Promise<void>;
    hide({ userAction }?: {
        userAction: boolean;
    }): Promise<void>;
    enable({ userAction }?: {
        userAction: boolean;
    }): void;
    disable({ userAction }?: {
        userAction: boolean;
    }): void;
    /**
     * @description 根据传入的四个点位创建一个 3d dom容器，可以通过ReactDom.render()的方式将react组件放到容器中
     * @param { Vector3Position[] } points 矩形四个点坐标
     * @param params 均为可选值
     * @config_document `params` 均为可选值
     *  | key                   | type                       | defaultValue        | comment |
     *  | -                     | -                          | -                   | -       |
     *  | `ratio`               | *`number`*                 | `0.00216`           | 1px对应多少米，默认为 0.00216，即1px对应2.16mm |
     *  | `devicePixelRatio`    | *`number`*                 | `1`                 | 设备的物理像素分辨率与CSS像素分辨率的比值 |
     *  | `container`           | *`HTMLElement`*            | `undefined`         | 自定义 return 中的 `container`
     *  | `pointerEvents`       | *`'none'\|'auto'`*         | `'none'`            | container 的 css属性：`pointer-events` 的值 |
     *  | `autoRender`          | *`boolean`*                | `true`              | 是否自动渲染，通常为true |
     *  | `mode`                | *`'front'\|'behind'`*      | `front`             | 两种模式:|
     *  |                                                                          | | | `front`  模式：DOM 处于 five Canvas 上方，所以无法模拟遮挡效果，需要手动检测是否可见去设置显隐 |
     *  |                                                                          | | | `behind` 模式：DOM 处于 five Canvas 下方，可以模拟真实的遮挡效果，但是 DOM 必须是非透明的 |
     *  | `scene`               | *`THREE.Scene`*            | `undefined`         | 如果 mode 为 `behind`，需要传入 |
     *
     * @return
     * ```typescript
     *    {
     *      id: string,                             // id
     *      container: HTMLDIVElement               // dom容器
     *      dispose: () => void                     // 销毁
     *      css3DObject: CSS3DObject                // THREE.CSS3DObject 实例
     *      render?: () => void                     // 渲染函数，当 config.autoRender = true || undefined 时为 undefined
     *      setVisible: (visible: boolean) => void  // 设置显隐, 同 setVisibleById(id, visible)
     *      show: () => void                        // 同 setVisible(true)
     *      hide: () => void                        // 同 setVisible(false)
     *      setEnabled: (enabled: boolean) => void   // 添加/移除 container, 同 setEnabledById(id, enabled)
     *      enable: () => void                      // 同 setEnabled(true)
     *      disable: () => void                     // 同 setEnabled(false)
     *    } | void
     * ```
     */
    create3DElement: (camera: THREE.Camera, points: Create3DDElementParamsType['points'], params?: Create3DDElementParamsType['config']) => void | {
        id: string;
        container: HTMLElement;
        css3DObject: CSS3DObjectPlus<HTMLElement>;
        render: () => void;
        show: () => void;
        hide: () => void;
        setVisible: (visible: boolean) => void;
        enable: () => void;
        disable: () => void;
        setEnabled: (enabled: boolean) => void;
        dispose: () => boolean;
        appendToElement: (element: Element) => CSS3DRenderer;
    };
    getFrontCSS3DScene({ createSceneIfNotExists }?: {
        createSceneIfNotExists?: boolean;
    }): CSS3DFrontScene;
    getBehindCSS3DScene({ createSceneIfNotExists }?: {
        createSceneIfNotExists?: boolean;
    }): CSS3DBehindScene;
    getFrontCSS3DObjectGroup({ addGroupIfNotExists }?: {
        addGroupIfNotExists?: boolean;
    }): CSS3DFrontGroup;
    getBehindCSS3DObjectGroup({ addGroupIfNotExists }?: {
        addGroupIfNotExists?: boolean;
    }): CSS3DBehindGroup;
    setVisibleById: (id: number, visible: boolean) => void;
    setEnabledById: (id: number, enabled: boolean) => void;
    render(camera: THREE.Camera): void;
    private createObject;
    private handleShow;
    private handleHide;
    private handleEnable;
    private handleDisable;
    private handleDispose;
}
export {};
