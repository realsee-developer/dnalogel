import { Five } from '@realsee/five';
import * as THREE from 'three';
/**
 * @description 模拟 Five 行为的 canvas，与 Five 唯一区别是 scene 是空的
 * @usecase
 * 当需 five 的 canvas 上层有一些额外的 Dom 元素比如平面图时，希望在这些 Dom 元素上层再绘制一些三维物体，可以
 * 使用 FivePuppet，将要渲染的物体加入到 FivePuppet 的 scene 中即可。甚至可以是原本在 five 中的物体，可以使
 * 用 `.clone()` 将物体克隆一份然后加入到 FivePuppet 的 scene 中。
 * @example react
    ```typescript
    import { Util } from '@realsee/dnalogel'

    function App() {
      const fivePuppet = React.useRef<Util.FivePuppet>()
      const five = unsafe__useFiveInstance()

      React.useEffect(() => {
        fivePuppet.current = new Util.FivePuppet(five, { zIndex: 20 })

        const object = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
        fivePuppet.current.scene.add(object)

        return () => {
          fivePuppet.current?.destory()
        }
      }, [five])
    }
    ```
 * @example javascript
    ```typescript
    import { Util } from '@realsee/dnalogel'

    const five = new Five({
      plugins: [
        [(five) => new Util.FivePuppet(five), 'fivePuppet']
      ],
    })

    const object = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
    five.plugins.fivePuppet.scene.add(object)
    ```
 */
export declare class FivePuppet {
    scene: THREE.Scene;
    private five;
    private renderer;
    private cancelRequestAnimationFrameId;
    private camera;
    private domInited;
    private canvasWrapper?;
    private params?;
    private _rendererCache;
    private _cameraCache;
    constructor(five: Five, params?: {
        /**
         * @description canvas 的 zIndex
         * @default 1
         */
        zIndex: number;
    });
    animate: () => void;
    stopAnimate: () => void;
    destory: () => void;
}
