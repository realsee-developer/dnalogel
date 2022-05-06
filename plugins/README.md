<p align="center">
	<a href="https://realsee.js.org/"><img src="https://vrlab-public.ljcdn.com/common/file/web/ea031fa5-ad82-46b3-86c8-7b20ec1e635a.jpg" width="60" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@realsee/dnalogel">
    <img src="https://img.shields.io/npm/v/@realsee/dnalogel.svg" alt="npm version" >
  </a>
  <a href="https://packagephobia.now.sh/result?p=@realsee/dnalogel">
    <img src="https://packagephobia.now.sh/badge?p=@realsee/dnalogel" alt="install size" >
  </a>
  <a href="https://github.com/realsee-developer/dnalogel/blob/main/plugins/TERMS.txt">
    <img src="https://img.shields.io/npm/l/@realsee/dnalogel.svg" alt="license">
  </a>
</p>

<h1 align="center">@realsee/dnalogel</h1>

# 👀 Overview

@realsee/dnalogel 将 [如视(realsee.com)](https://realsee.com) **VR 看房** 常用能力沉淀，并以 `Five Plugins` 形式进行抽象。
结合[如视 VR 看房 SDK Five](https://open-platform.realsee.com/developer/docs/front/3d-space/get-started/rendering-engine/) 
与 [如视开放 API](https://open-platform.realsee.com/developer/open/api/#/) ,可以制作出丰富多彩的三维空间应用。不论是经过线上环境千锤百炼的刚需功能，还是灵感一现的炫酷尝试，所有已经落地的功能我们均毫无保留的开源至github [realsee-developer/dnalogel](https://github.com/realsee-developer/dnalogel) 。

# 🔨 Usage

**1、安装**

```bash
npm install @realsee/dnalogel
```

```bash
yarn add @realsee/dnalogel
```

2.x 版本依赖 `svelte`， 使用时请同时安装:
```bash
npm install svelte 
```

```bash
yarn add svelte 
```

**2、插件注册**

```js
import { Five } from '@realsee/five'
import { Plugin } from '@realsee/dnalogel'
const five = new Five({
  plugins: [[Plugin, 'PluginName', initOptions]],
})
```

**3、插件方法使用**

```js
// 不同插件提供的方法可能存在差异,请参考各插件 API 文档
five.plugins.PluginName.load(data)
five.plugins.PluginName.enable()
five.plugins.PluginName.disable()
five.plugins.PluginName.dispose()
```

**4、插件依赖数据获取**

您可以通过 [open API](https://open-platform.realsee.com/developer/open/api#/) 查看数据获取方式及相关 open API 。

# 📖 Documents

- [说明文档](https://open-platform.realsee.com/developer/docs/front/3d-space/advanced/dnalogel/ModelViewPlugin/)
- [API 文档](https://unpkg.com/@realsee/dnalogel/docs/index.html)
- [demo 源码](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
- [数据依赖来源：open API](https://open-platform.realsee.com/developer/open/api/)
- [CHANGELOG](https://github.com/realsee-developer/dnalogel/blob/main/plugins/CHANGELOG.md)

# 💡 Preview

我们为每个插件书写了简单的效果示例，您可点击预览：
[@realsee/dnalogel showcase](https://realsee.js.org/dnalogel/)


# 🧾 Lists

- 🔌 ModelViewPlugin：模型小窗插件
- 🔌 PanoFloorplanRadarPlugin：全景户型雷达图插件
- 🔌 ModelRoomLabelPlugin：模型态房屋标签插件
- 🔌 TopviewFloorplanPlugin：俯视模型户型图插件
- 🔌 ModelChassisCompassPlugin：模型底盘指南针插件
- 🔌 ModelEntryDoorGuidePlugin：模型入户门引导插件
- 🔌 CSS3DRenderPlugin：CSS3D渲染插件
- 🔌 CameraMovementPlugin：相机运镜插件
- 🔌 ModelFloorplanPlugin：模型户型图插件
- 🔌 PanoRulerPlugin：全景标尺插件
- 🔌 PanoCompassPlugin：全景指南针插件
- 其他插件持续更新中...

# License
[TERMS](https://github.com/realsee-developer/dnalogel/blob/main/plugins/TERMS.txt)
