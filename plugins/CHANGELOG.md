# CHANGELOG

## 2.0.0-alpha.11
- 1.fix: 修复 ModelRoomLabelPlugin 未监听多楼层切换 rerender 问题。
- 2.feat: ModelFloorplanPlugin & TopviewFloorplanPlugin 新增 `northDesc?: string` 配置项，支持用户修改指北针名称。

## 2.0.0-alpha.10
- 1.feat: 新增空间三维标签插件 PanoSpatialTagPlugin
- 2.feat: 新增轻量 ejs 渲染模板函数 shared-utils/tinyEJSrender.js

## 2.0.0-alpha.9
- 1.refactor: 增加插件独立 js 输出及对 svelte 的编译。

## 2.0.0-alpha.8
- 1.fix: 修复 ModelViewPlugin 实景 VR 模型不居中问题；
- 2.fix: 修复 ModelRoomLabelPlugin fov 更新未 rerender 问题；
- 2.fix: 修复 ModelRoomLabelPlugin enable 判断问题；
- 4.fix: 修改 ModelFloorplanPlugin 在全景态满足户型图的俯仰角时会自动切换户型图问题。

## 2.0.0-alpha.7
- 1.fix: PanoCompassPlugin 向下兼容；
- 2.feat: 新增 PC 全景测量插件：PanoMeasurePlugin；
- 3.docs: 修改 README.md；

## 2.0.0-alpha.6
- 1.fix: 标尺插件 PanoRulerPlugin 所有标尺仅展示一次问题；
- 2.fix: TopviewFloorplanPlugin && ModelFloorplanPlugin 插件小雷达位置显示不正确问题；
- 3.feat: 为 TopviewFloorplanPlugin && ModelFloorplanPlugin 插件新增线框图吸附位置配置选项。 
  - 可选地板、天花板、模型中心，默认吸附选项为模型中心。

## 2.0.0-alpha.5
1.修复全景指南针插件 PanoCompassPlugin 默认导出 name

## 2.0.0-alpha.4
1.新增全景标尺插件 PanoRulerPlugin

## 2.0.0-alpha.3
1.新增全景指南针插件 PanoCompassPlugin
