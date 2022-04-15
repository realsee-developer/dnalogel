# 注意
2.x 版本依赖 `svelte`， 使用时请同时安装 
```bash
npm install svelte 
```

# 如视 -- "Dnalogel"

[如视(realsee.com)](https://realsee.com) 提供了在浏览器环境中的渲染三维空间 [VR 看房 SDK Five](https://open-platform.realsee.com/developer/docs/front/3d-space/get-started/rendering-engine/) 。
通过 [如视开放 API](https://open-platform.realsee.com/developer/open/api/#/) 并结合 Five 的渲染能力可以制作丰富多彩的三维空间应用。

除了 Five 强大的三维空间渲染能力之外，我们也积累了大量的 **VR 看房** 常用功能，并以 `Five Plugins` 的形式进行抽象。

无论是经过线上环境千锤百炼的刚需功能，还是灵感一现的炫酷尝试，凡是最终落地的功能我们均毫无保留的开源至 github [realsee-developer](https://github.com/realsee-developer) 空间。

如果插件满足您的需求，`npm install @realsee/dnalogel`一键安装使用。

如果不满足需求，没关系，把我们当作代码示例，我们抛砖引玉。

我们也很期待您基于 [Three.js](https://threejs.org/) 、[Five.js](https://www.npmjs.com/package/@realsee/five) 等这类渲染库做出有意思的功能。


### 插件列表
- ModelViewPlugin：模型小窗插件
- PanoFloorplanRadarPlugin：全景户型雷达图插件
- ModelRoomLabelPlugin：模型态房屋标签插件
- TopviewFloorplanPlugin：俯视模型户型图插件
- ModelChassisCompassPlugin：模型底盘指南针插件
- ModelEntryDoorGuidePlugin：模型入户门引导插件
- CSS3DRenderPlugin：CSS3D渲染插件
- CameraMovementPlugin：相机运镜插件
- ModelFloorplanPlugin：模型户型图插件
- PanoRulerPlugin：全景标尺插件
- PanoCompassPlugin：全景指南针插件
- ... 待补充

### 使用方式

```js
import { Five } from '@realsee/five'
import Plugin from '@realsee/dnalogel/plugins/Plugin'
const five = new Five({
  plugins: [[Plugin, 'PluginName', initOptions]],
})

// 不同插件提供的方法可能存在差异,请参考各插件 API 文档
five.plugins.PluginName.load(data)
five.plugins.PluginName.enable()
five.plugins.PluginName.disable()
```
