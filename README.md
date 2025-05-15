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
  <a href="https://github.com/realsee-developer/dnalogel/blob/main/TERMS.txt">
    <img src="https://img.shields.io/npm/l/@realsee/dnalogel.svg" alt="license">
  </a>
</p>

<h1 align="center">@realsee/dnalogel</h1>

# 👀 Overview

@realsee/dnalogel 将 [如视(realsee.com)](https://realsee.com) **VR 空间交互** 常用能力沉淀，并以 `Five Plugins` 形式进行抽象。
结合[如视三维空间重建渲染引擎 Five](https://open-platform.realsee.com/developer/docs/five/intro/)
与 [如视开放 API](https://open-platform.realsee.com/developer/openapi/?id=1001) ,可以制作出丰富多彩的三维空间应用。不论是经过线上环境千锤百炼的刚需功能，还是灵感一现的炫酷尝试，所有已经落地的功能我们均毫无保留的开源至github [realsee-developer/dnalogel](https://github.com/realsee-developer/dnalogel) 。

# 🔨 Usage

**1、安装**

```bash
npm install @realsee/dnalogel
```

```bash
yarn add @realsee/dnalogel
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

- [说明文档](https://open-platform.realsee.com/developer/docs/dnalogel/intro/)
- [API 文档](https://open-platform.realsee.com/developer/openapi/?id=1001)
- [demo 源码](https://github.com/realsee-developer/dnalogel)
- [数据依赖来源：open API](https://open-platform.realsee.com/developer/openapi/?id=1001)

# 💡 Preview

我们为每个插件书写了简单的效果示例，您可点击预览：
[@realsee/dnalogel showcase](https://realsee-developer.github.io/dnalogel/)

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

# 可能遇到的问题

1. webpack打包出现以下错误

```bash
Module not found: Error: Can't resolve '@realsee/five/line' in 'xxx/node_modules/@realsee/dnalogel/libs'
Did you mean 'index.js'?
BREAKING CHANGE: The request '@realsee/five/line' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.
```

解决方案：在webpack配置里加以下rule
参考：[resolvefullyspecified](https://webpack.js.org/configuration/module/#resolvefullyspecified)

```js
{
  test: /\.m?js$/,
  resolve: {
    fullySpecified: false, // disable the behaviour
  },
},
```

# License

[TERMS](https://github.com/realsee-developer/dnalogel/blob/main/TERMS.txt)
