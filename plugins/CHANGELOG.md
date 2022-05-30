# CHANGELOG

## 2.0.0-alpha.24
- 1.feat: PanoRulerPlugin 支持数据 reload。

## 2.0.0-alpha.23
- 1.fix: 修复 PanoFloorplanRadarPlugin reload 数据时报错
- 2.fix: 修复 PanoFloorplanRadarPlugin reload 户型图数据后雷达图标位置没有适配

## 2.0.0-alpha.22
- 1.fix: 修复 PanoMeasurePlugin disable 状态下仍有背景色占位问题。

## 2.0.0-alpha.21
- 1.fix: 修复 PanoMeasurePlugin 仅初始化 UI 面板仍占位为题。

## 2.0.0-alpha.20
- 1.fix: 修复 PanoMeasurePlugin hide 时 UI 面板仍占位为题。

## 2.0.0-alpha.19
- 1.fix: 修复在模型中切换全部楼层，切换回户型图，展示的是上一次展示时的楼层；
- 2.fix: 修复户型图界面切换楼层时，图片与SVG渲染有时间差导致闪烁的问题；
- 3.feat: TopviewFloorplanPlugin 插件支持放大缩小；
- 4.feat: ModelFloorplanPlugin 插件，autoShowEnable 和 hoverEnable 能同时支持；
- 5.chore: 设置 tsconfig.json importsNotUsedAsValues 为 error，在引用类型时，必须显示写为 import type。

## 2.0.0-alpha.18
- 1.fix: 修复 PanoMeasurePlugin 使用时 hammerjs 报错问题。

## 2.0.0-alpha.17
- 1.fix: 修复构建输出 px2rem 失效问题。

## 2.0.0-alpha.16
- 1.fix: 修复 z-index 问题；
- 2.fix: 修复 ModelItemLabelPlugin 事件监听问题。

## 2.0.0-alpha.15
- 1.refactor: 优化 ModelItemLabelPlugin 在调用 five.setState() 时的动画显示。

## 2.0.0-alpha.14
- 1.feat: 新增 ModelTVVideoPlugin 插件；
- 2.fix: 修复 ModelItemLabelPlugin disable & enable 方法逻辑；
- 3.refactor: 增加 ModelItemLabelPlugin 类型导出。

## 2.0.0-alpha.13
- 1.chore: 修改 tsconfig.json target 配置项为 es6。

## 2.0.0-alpha.12
- 1.feat: 新增 ModelItemLabelPlugin

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
