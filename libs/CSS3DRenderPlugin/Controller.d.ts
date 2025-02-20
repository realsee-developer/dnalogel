import type { Five } from '@realsee/five';
import { CSS3DRender } from './utils/three/CSS3DRender';
import type { AnyPosition } from './utils';
export declare const PLUGIN_NAME: string;
export interface Create3DDomContainerParamsType {
    points: AnyPosition[];
    config?: {
        ratio?: number;
        /** @deprecated dpr renamed as devicePixelRatio */
        dpr?: number;
        devicePixelRatio?: number;
        autoRender?: boolean;
        container?: HTMLElement;
        pointerEvents?: 'none' | 'auto';
        wrapperStyle?: Partial<CSSStyleDeclaration>;
    } & ({
        mode?: 'front';
    } | {
        mode: 'behind';
        behindFiveContainer?: HTMLElement;
    });
}
export default class Controller extends CSS3DRender {
    five: Five;
    behindFiveContainer?: Element;
    frontFiveContainer?: Element;
    readonly VERSION = "v2.0.1";
    readonly staticPrefix: string;
    private created3DElementResults;
    constructor(five: Five);
    /** @deprecated disposeAll() renamed as dispose() */
    disposeAll(): void;
    setState(...params: Parameters<InstanceType<typeof CSS3DRender>['setState']>): void;
    /**
     * @description 根据传入的四个点位创建一个 3d dom容器，可以通过ReactDom.render()的方式将react组件放到容器中
     * @param { Vector3Position[] } points 矩形四个点坐标
     * @param config 均为可选值
     * @config_document `config` 均为可选值
     *  | key                   | type                       | defaultValue        | comment |
     *  | -                     | -                          | -                   | -       |
     *  | `ratio`               | *`number`*                 | `0.00216`           | 1px对应多少米，默认为 0.00216，即1px对应2.16mm |
     *  | ~~`dpr`~~             | ~~*`number`*~~             | ~~`undefined`~~     | ~~**已改名**，请使用~~ `devicePixelRatio` |
     *  | `devicePixelRatio`    | *`number`*                 | `1`                 | 设备的物理像素分辨率与CSS像素分辨率的比值 |
     *  | `container`           | *`HTMLElement`*            | `undefined`         | 自定义 return 中的 `container`
     *  | `pointerEvents`       | *`'none'\|'auto'`*         | `'none'`            | container 的 css属性：`pointer-events` 的值 |
     *  | `autoRender`          | *`boolean`*                | `true`              | 是否自动渲染，通常为true |
     *  | `mode`                | *`'front'\|'behind'`*      | `front`             | 两种模式:|
     *  |                                                                          | | | `front`  模式：DOM 处于 five Canvas 上方，所以无法模拟遮挡效果，需要手动检测是否可见去设置显隐 |
     *  |                                                                          | | | `behind` 模式：DOM 处于 five Canvas 下方，可以模拟真实的遮挡效果，但是 DOM 必须是非透明的 |
     *  | `behindFiveContainer` | *`HTMLElement`*            | `undefined`         | 如果 mode 为 `behind`，需要传入容器，并确保此容器位five下方，且中间无其他不透明的dom元素遮挡 |
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
     *      setEnabled: (enabled: boolean) => void  // 添加/移除 container, 同 setEnabledById(id, enabled)
     *      enable: () => void                      // 同 setEnabled(true)
     *      disable: () => void                     // 同 setEnabled(false)
     *    } | void
     * ```
     */
    create3DDomContainer: (points: Create3DDomContainerParamsType['points'], config?: Create3DDomContainerParamsType['config']) => {
        render: () => void;
        id: string;
        container: HTMLElement;
        css3DObject: import("./utils/three/CSS3DObject").CSS3DObjectPlus<HTMLElement>;
        show: () => void;
        hide: () => void;
        setVisible: (visible: boolean) => void;
        enable: () => void;
        disable: () => void;
        setEnabled: (enabled: boolean) => void;
        dispose: () => boolean;
        appendToElement: (element: Element) => import("./utils/three/CSS3DRenderer").ICSS3DRenderer;
    };
    appendToFrontFiveContainer(container: Element): void;
    appendToBehindFiveContainer(container: Element): void;
    getBehindFiveElement(): Element;
    /**
     * @description: 获取静态资源的url
     */
    absoluteUrl(url: string): string;
    clear(): void;
}
