# CHANGELOG


## 3.66.2

- fix(PanoTagPlugin): 修复虚拟屏幕标签(panelTag)视频播放暂停未触发playStateChange事件的问题


## 3.66.1

- fix(MeasurePlugin): 修复MeasurePlugin创建多个mesh时，第偶数个mesh没有onclick/onhover的问题

## 3.66.0

- feat(PanoTagPlugin): 新增鼠标`hover`事件支持，当发生`hover`时，加载`TagPopover`组件

## 3.65.9

- fix(MeasurePlugin): 修复测量 label 重新创建后 onclick 事件丢失的问题

## 3.65.8

- feat(Sculpt, PanoMeasurePlugin, MeasurePlugin): 在测量值上添加背景以及显隐开关和单位切换开关

## 3.65.7

- fix(PointTag): 修改标签近大远小的缩放范围

## 3.65.6

- fix(MissingFloor): 修改 Missing 页出现条件

## 3.65.5

- fix(MissingFloor): 修改占位符异常问题

## 3.65.4

- fix(FiveDomEvents): 没有点位时点击事件容错处理。

## 3.65.3

- fix(PanoTagPlugin): tag 渲染方式是 CSS3DRender 时，闪缩 blink 的 target 不正确的问题

## 3.65.2

- fix(GuideLinePlugin): 增加起点和终点标签的 zIndex 1 => 10
- fix(PanoTagPlugin): 修改平面图下标签的显隐状态 平面图时 data-infive=1 都会隐藏,改为根据状态动态设置

## 3.65.1

- fix(Util): `Util.reblink`: 修复将 dom 的 opacity 主动设置为 0 时，闪烁动画没有透明度问题。

## 3.65.0

- [BREAKING CHANGE] feat(PanoTagPlugin): 标签点圆环样式修改 && 修改音频标签和全景标签样式

## 3.64.31

- fix(floorplan): 修复户型图插件 MapviewFloorplanPlugin、ModelFloorplanPlugin、TopviewFloorplanPlugin 在沙盘中 observers 取值

## 3.64.30

- fix(modelMarkerPlugin): 修复 2d 标注初始没有 enable

## 3.64.29

- fix(PanoTagPlugin): 优化营销标签渲染和性能逻辑

## 3.64.28

- chore(ModelMakerPlugin): 支持修改标注的透明度
- feat(ModelMakerPlugin): 增强模型透明度控制和类型定义
- fix(ModelMakerPlugin): 简化标签透明度控制逻辑

## 3.64.27

- fix(MapviewFloorplanPlugin): 修正其他类型名称展示逻辑

## 3.64.26

- fix(MapviewFloorplanPlugin): 修正区域三角 viewBox 起始点

## 3.64.25

- chore(Sculpt): 重构删除按钮的 UI 实现。
- fix(MeasurePlugin): 修复点击事件在 Safari 中不生效的问题。

## 3.64.24

- feat(PanoTagPlugin)：恢复被删除的部分函数来兼容 SaaS-C 的标签样式升级
- fix(Sculpt): 修改测量工具的英制面积单位

## 3.64.23

- chore(Sculpt): 修改测量工具的标签文字大小

## 3.64.22

- fix(PanoDoorLabelPlugin): 修复代码报错问题

## 3.64.21

- feat(MapviewFloorplanPlugin): 新增分间三角标识

## 3.64.20

- fix(GuildLinePlugin): 修复沙盘 vr 路线不展示的问题

## 3.64.19

- feat(MapviewFloorplanPlugin): 新增 `roomNameOtherTypeEnable` 参数，支持隐藏分间 `其他` 类型。

## 3.64.18

- fix(MapviewFloorplanPlugin): 修复 loadItems 没有使用家具的 rotate 参数。

## 3.64.17

- feat(MapviewFloorplanPlugin): 新增 loadItems 方法。

## 3.64.16

- fix(ModelMakerPlugin): 修复 多 work 场景 点击事件不生效的问题。

## 3.64.15

- chore(MeasurePlugin): 距离的 字号/透明度 样式调整。

## 3.64.14

- fix(MeasurePlugin): 一些问题修复。

## 3.64.13

- fix(MeasurePlugin): 一些问题修复。

## 3.64.12

- fix(PanoVideoPlugin): 全景视频适配多 work 场景。

## 3.64.11

- fix(MeasurePlugin): 一些问题修复。

## 3.64.10

- fix(PanoDoorLabelPlugin): 修复重复添加分间的问题。
- fix(ModelMakerPlugin): 修复一些复杂图形的绘制问题。
- fix(MeasurePlugin): 一些问题修复。

## 3.64.9

- fix(MeasurePlugin): 一些问题修复。

## 3.64.8

- fix(ModelMakerPlugin): 修复 3.64.6 新增功能在多 vr 场景中的问题。
- fix(MeasurePlugin): 一些问题修复。

## 3.64.7

- chore(ModelMakerPlugin): 调整了一个点击后判断全景点时的内部参数值。

## 3.64.6

- fix(FiveDomEvents): 修复 3.64.5 导致的点击事件会触发两次的问题。
- feat(ModelMakerPlugin): 当标注挡住了全景点时，仍然可以通过精准点击全景点来走点。

## 3.64.5

- fix(MeasurePlugin): 修复测量插件的一些问题。
- fix(PointSelector): 修复移动端设备坐标有可能不正确的问题。
- refactor(\*): 重构物体附带的 dom 的实现方式，解决频繁发生的显隐不同步的 bug。

## 3.64.4

- chore(PanoMeasurePlugin): enable 时，自动执行 appendTo。

## 3.64.3

- fix(PanoMeasurePlugin): 修复一个测量工具容器的问题。

## 3.64.2

- fix(Sculpt): 修复 theme 配置不生效的问题。

## 3.64.1

- fix(Sculpt): 修复绘制时长度不显示的问题。

## 3.64.0

- BREAKING CHANGE(GuideLinePlugin): 移除 `autoDepthTestEffectDistance` 和 `useAutoDepthTest` 配置，采用 `route_standing_positions` 和 `node_pair_to_route_points` 预跑数据来优化路线生成效果。
- fix(SculptPlugin): 使用函数调用方式来初始化时支持传入 Theme。

## 3.63.3

- fix(MeasurePlugin): 修复一些问题。

## 3.63.2

- fix(\*): 修复删除按钮的样式兼容性问题。

## 3.63.1

- fix(PointSelector): 修复一些运行时报错。

## 3.63.0

- feat(PanoTagPlugin): 标签 icon 支持添加背景色。

## 3.62.0

- feat(MeasurePlugin): 新版测量插件。
- feat(Sculpt): 支持设置 item 的高亮色。
- feat(Sculpt): 绘制矩形时添加了一些吸附效果。
- feat(Util.PointSelector): 支持设置吸附面/吸附线，按`shift`取消吸附。
- fix(PanoTagPlugin): 标签支持 five lod。
- fix(Util.PointSelector): 修复放大镜在 umd 包中的 bug。

## 3.61.15

- fix(PanoTagPlugin): 标签位于打标签时的位置时，跳过射线检测。

## 3.61.14

- fix(ModelMakerPlugin): 2D 标注（triangle）不开启 depthTest。

## 3.61.13

- update(Sculpt): tip 支持 HTMLElement。

## 3.61.12

- chore(Util): 导出 `Util.initialCSS3DRender`。

## 3.61.11

- fix(ModelViewPlugin): 修复模型 bounding 计算错误的问题。

## 3.61.10

- chore(ModelViewPlugin): 导出 Hooks 类型。
- fix(Util.PointSelector): 修复部分安卓设备上长按不生效的问题。

## 3.61.9

- fix(ModelViewPlugin): 修复插件初始化时机比较晚时，模型没有加载的问题。

## 3.61.8

- chore(ModelViewPlugin): 模型材质 256 -> 128。

## 3.61.7

- fix(PanoTagPlugin): 修复 3.50.4 中的 bug，在一些特殊性情况下标签 hide 不会立即生效的问题。

## 3.61.6

- fix(CSS3DRenderer): 每次渲染时检测并删除不在 scene 中的 CSS3DObject。

## 3.61.5

- chore(PanoMeasurePlugin): 支持直接加载开放平台数据。

## 3.61.4

- fix(PanoMeasurePlugin): 'View' 模式 bug 修复。

## 3.61.3

- chore(Util.PointSelector): 字段更新。

## 3.61.2

- fix(ModelViewPlugin): 开始加载时机提前。

## 3.61.1

- fix(ModelViewPlugin): 添加模型小窗加载完成事件。

## 3.61.0

- feat(ModelViewPlugin): 模型小窗实现变更。

## 3.60.3

- fix(PanoTagPlugin): 修复模型没展示的问题。

## 3.60.2

- fix(ObjectHelper): 修复 当设置不显示某条移动轴 时，报错的问题。

## 3.60.1

- fix(PanoTagPlugin): 修复 dom 渲染的虚拟屏幕有黑边的问题。
- fix(ObjectHelper): 修复和 css3DObject 的配合使用问题。
- fix(Util.LightTag): wrapper 不再设置兜底值，无 wrapper 时不加载。

## 3.60.0

- chore(\*): 打包优化

## 3.59.13

- fix(PanoTagPlugin): 修复 enable 在某些特殊情况下没有立即生效的问题。

## 3.59.12

- chore(PanoTagPlugin): 修复一个报错。

## 3.59.11

- fix(PanoTagPlugin): 修复虚拟屏幕 创建、修改、销毁过程中的 bug。

## 3.59.10

- fix(PanoFloorplanRadarPlugin): 还原 hoverEnable 默认值 false。
- fix(Sculpt): 修复某些特殊情况下，tip 没有展示的问题。

## 3.59.9

- fix(GuideLinePlugin): 兼容低版本 webgl，修复 ios14 上 fragmentShader 渲染异常的问题。

## 3.59.8

- fix(PanoTagPlugin): 重构 css3DRender, 修复 five react 切换 work 后，模型广告牌内容可能会消失的问题。
- fix(PanoTagPlugin): 修复 five react 切换 work 后，模型点击事件不会触发的问题。
- fix(PanoTagPlugin): 修复 setDataById, setTagById 等方式切换 tag 数据后没有立即更新的问题。

## 3.59.7

- fix(PanoMeasurePlugin): 修复测面积撤销完所有点后会报错的问题。

## 3.59.6

- fix(GuideLinePlugin): 修复路线为空时报错的问题。

## 3.59.5

- fix(\*): zFightting 统一调大至 1mm。

## 3.59.4

- fix(Util.lookObject): 保证每次转动角度最小。

## 3.59.3

- fix(ObjectHelper): 修复正交视角下操作不平行于水平面的拖动轴时，结果可能会错误的问题。

## 3.59.2

- fix(ObjectHelper): 正交视角下，与正交方向一致的移动轴不显示。
- fix(PointSelector): select 事件现在只有精准点击（500ms 内鼠标按下并在同一个位置抬起）会触发。
- fix(\*): 修复一个底层错误，该错误可能会导致 拖动、绘制 等操作不正常。

## 3.59.1

- chore(ModelMakerPlugin): fix type。

## 3.59.0

- feat(Sculpt): load 时可以指定 defaultAction，选择是否启用默认行为（点击选中等）。默认为 true。

## 3.58.7

- chore(Sculpt): 缩放操作时，隐藏其他缩放块。

## 3.58.6

- chore(FloorplanPlugin): 点击事件现在可以获取到点击的房间信息。

## 3.58.5

- fix(Sculpt): 修复部分 item.setData 结果不正确的问题。

## 3.58.4

- fix(ModelMakerPlugin): 2D 标注只在指定 panoIndex 上展示。
- chore(PanoDoorLabelPlugin): 重构，修复 bug。

## 3.58.3

- change(Sculpt): 当通过 `stopCreate()` 或 `clear()` 主动中断绘制时，createXXX promise 现在会返回 reject。

## 3.58.2

- fix(Sculpt): 修复绘制矩形时，预览线会显示长度的问题。

## 3.58.1

- fix(Sculpt): 修复使用 editor 移动物体后，setData 设置数据后物体位置不正确的问题。
- fix(Sculpt): 修复使用 setData 设置物体位置后 editor 方向不正确的问题。
- fix(Util.FiveDomEvent): 修复一个代码报错。

## 3.58.0

- change(PanoTagPlugin): 走点时默认不隐藏标签。
- fix(PanoTagPlugin): 修复标签闪烁(tag.blink())可能会卡顿的问题。

## 3.57.1

- fix(FiveDomEvent): 当射线上靠前的物体因为一些配置原因不触发事件时，顺延至后面的物体。

## 3.57.0

- feat(ModelMakerPlugin): 优化区域标注的标签效果。
- fix(Sculpt): 移除 item 时，如果在绘制中，停止绘制。

## 3.56.1

- fix(\*): 修复面的颜色有色差的问题。

## 3.56.0

- feat(PanoTagPlugin)：变更标签的优化策略，以支持低版本浏览器以及 safari。
- fix(ModelMakerPlugin): 修复部分标注点击后名称没有显示的问题。

## 3.55.0

- feat(Sculpt): 支持设置边框线的透明度 `lineOpacity`, 默认为 1。
- fix(Sculpt): 修复 editor 启用时，通过 `setData` 更新物体位置后，editor 位置没有更新的问题。
- fix(ModelMakerPlugin): 支持多楼层场景，仅在当前楼层展示。

## 3.54.2

- chore(Sculpt): 优化绘制 `Sculpt` 线的方式。

## 3.54.1

- fix(Sculpt): 修复凹多边形的绘制问题

## 3.54.0

- fix(Util.FivePuppet): 兼容 vapor。
- feat(Sculpt): 添加 `item.setData` 方法，参数为 [SculptData](https://open-platform.realsee.com/developer/docs/dnalogel/Sculpt/#data)。
- feat(Sculpt): 添加 `item.editor.hooks.on('objectUpdate')`，当 editor 开启时，物体被移动/缩放/旋转时触发。
- chore(Sculpt): 取消编辑 scale 距离限制；体的绘制高度限制由 10m 改为 100m。

## 3.53.4

- fix(Sculpt): 关闭 depthWrite，修复不显示被透明面遮挡的线的问题，修复部分面看起来颜色要淡的问题。
- fix(Sculpt): 物体的 opacity 不再修改边框线的透明度。

## 3.53.3

- fix(GuideLinePlugin): 修复 `GuideLinePlugin` 在 `hide` 后切换至 `Mapview` 视角时，偶现显示出起点终点标签的问题。

## 3.53.2

- fix(GuildLinePlugin): 修复 load 后立即获取 item.modelItem 或 item.panoramaItem 的 visible 不正确的问题。

## 3.53.1

- fix(Util.FivePuppet): 修复 `FivePuppet` 的 `destory` 清除不完全的问题。

## 3.53.0

- feat(Util): 新增 `Util.FivePuppet`

## 3.52.3

- fix(tag): 没有点的情况下不做碰撞检测。

## 3.52.2

- fix(ModelMakerPlugin): 修复字号会跟随字符长度变化的问题。

## 3.52.1

- fix(Sculpt): 修复导出数据不准确的问题。

## 3.52.0

- fix(ModelMakerPlugin): 修复 hide 后标签没有隐藏的问题（使用 display 代替 visibility）。
- fix(Object3DHelper): 修复正交相机视角下拉近摄像机时，helper 没有缩放的问题；修复位移操作结束时，helper 没有缩放的问题。
- feat(Sculpt):
  1. 优化 boxMesh 的 geometry；
  2. 长方体绘制支持锁定平面，支持选择绘制方式，api 同 矩形绘制；
  3. 长方体支持六个面的缩放；
  4. 矩形支持四边的缩放；
  5. 优化缩放块的透视视觉效果；
  6. 撤销快捷键兼容 mac；
  7. 修复先拖动再缩放时，结果不正确的问题；

## 3.51.0

- feat(modelMakerPlugin): 模型标注的标签增加元素间的遮挡检测。

## 3.50.16

- fix(Util.PointSelector): 支持屏幕支持触摸的 pc 设备。

## 3.50.15

- chore(Util): 导出工具函数。

## 3.50.14

- fix(ModelMakerPlugin): 修复碰撞检测计算错误的问题。

## 3.50.13

- fix(PanoTagPlugin): 修复 load 完后立即 clearTags 时，虚拟屏幕没有被清除的问题。

## 3.50.12

- chore(Sculpt): fix typo `createline`

## 3.50.11

- fix(PanoTagPlugin): 修复 3.42.0 导致的 hide 后没有隐藏 css3D 渲染的 Dom 的问题。

## 3.50.10

- chore(floorplan): 修改户型图标尺透明度。

## 3.50.9

- fix(PointSelector): 修复 disable 时，坐标点外围圆环没有隐藏的问题。
- fix(CrusePlugin): 进一步修复点位自动漫游中，非常频繁的切换速度时，偶现漫游暂停的问题。

## 3.50.8

- fix(CrusePlugin): 修复点位自动漫游中，非常频繁的切换速度时，偶现漫游暂停的问题。

## 3.50.7

- chore(Sculpt): 3.50.6 中的 feature 添加默认参数。

## 3.50.6

- change(Sculpt): 距离和 tip 颜色默认和 mesh 颜色一致。

## 3.50.5

- fix(measure): 兼容 five react。

## 3.50.4

- change(floorplan): 户型图展示/隐藏时，除之前设置 five canvas 透明度的逻辑外，同步设置 five 相关 dom 的透明度（使用 dataset-infive 标识）

## 3.50.3

- fix(ObjectHelper): 修复 helper 起始位置可能错误的问题。

## 3.50.2

- fix(Sculpt): 修复 `Sculpt` 连续绘制多个平面矩形时，边框长度错误的问题。
- fix(Sculpt): 修改 `PointMesh` 和 `LineMesh` 的 `visible` 时，tip 或者 长度也会被修改。

## 3.50.1

- fix(Sculpt): 3.49.11 的 tip 在 ios 设备上支持中文。

## 3.50.0

- feat(PointSelector): 取消 Hammer 依赖，Hammer 在安卓设备上与 vapor 不兼容。

## 3.49.13

- fix(Sculpt): 修复 3.49.11 中 point 的 tip 没有在 point 被 remove 时销毁的问题。

## 3.49.12

- fix(Sculpt): 3.49.11 的 tip 支持中文。

## 3.49.11

- fix(Sculpt): 绘制点时，实时预览点的位置；点和线 支持设置 tip。

## 3.49.10

- fix(Sculpt): 优化触摸屏绘制。

## 3.49.9

- fix(ModelMakerPlugin): 修复页面 resize 后，标签没有更新位置的问题。

## 3.49.8

- chore(sculpt): 导出工具函数。

## 3.49.7

- fix(PanoTagPlugin): 修复 360 浏览器 69 版本下标签插件不显示的问题。
- fix(ModelMakerPlugin): 修复区域标注标签被缩小的问题。

## 3.49.6

- feat(Sculpt): 支持点击出现删除按钮。

## 3.49.5

- chore(Sculpt): 优化 `Theme` 类型。

## 3.49.4

- chore(Sculpt): 修改 `theme` 属性访问权限。

## 3.49.3

- fix(PanoTagPlugin): 修复插件 hide 的情况下，在页面 resize 后可见状态错误的问题。

## 3.49.2

- fix(Sculpt): 修复页面 resize 后 距离的 dom 层级问题。

## 3.49.1

- fix(Sculpt): 修复触摸屏手势操作结束时，有可能触发 five 事件的问题。
- fix(Sculpt): 修复触摸屏绘制折线时，折线的第一个点没有显示的问题。
- fix(PanoTagPlugin): 优化 `tag.destroy()` 逻辑。

## 3.49.0

- feat(ObjectHelper): 支持触摸屏手势操作。
- feat(Sculpt): 支持触摸屏手势操作。

## 3.48.7

- fix(PanoMeasurePlugin)：修复 `enable({mode: 'View'})` 时 可能会显示不应展示的标尺的问题。

## 3.48.6

- fix(PanoMeasurePLugin)：修复在未来家墙面上测量面积时，偶现无法正常绘制的问题。
- feat(Sculpt)：优化绘制多边形时的实时预览效果。

## 3.48.5

- fix(PanoTagPlugin): 修复部分场景下，标签无法闪烁的问题。

## 3.48.4

- fix(PanoTagPlugin): 修复部分标签禁用后再闪烁，闪烁完成后没有消失的问题。

## 3.48.3

- fix(PanoTagPlugin): 修复 `3.48.0` 导致的图文标签 UI 错误的问题。

## 3.48.2

- feat(Sculpt): 折线（Polyline）多边形（Polygon）支持撤销/重做。

## 3.48.1

- feat(Sculpt): 线段（Line）支持撤销/重做。

## 3.48.0

- feat:(PanoTagPlugin): 带视频的标签，支持 `play` / `pause`

## 3.47.16

- chore(\*): 优化代码。

## 3.47.15

- fix(\*): 修复一个循环引用问题。
- fix(PanoTagPlugin): 修复 `requestIdleCallbackId` polyfill 问题。

## 3.47.14

- fix(Sculpt): 修复移动多边形时，距离/面积 dom 没有跟随移动的问题。
- fix(Sculpt): 修复清空时，面积没有被删除的问题。

## 3.47.13

- fix(Sculpt): 修复多次绘制对角线矩形时，距离显示的问题。

## 3.47.12

- feat(Sculpt): 支持展示面积。

## 3.47.11

- fix(Sculpt): 修复矩形绘制时的距离不显示的问题。

## 3.47.10

- fix(Sculpt): 修复 box 绘制；修复距离显示问题。

## 3.47.9

- fix(Sculpt): 优化矩形绘制代码。

## 3.47.8

- fix(PanoTagPlugin): 修复 `tag.destroy()` 和 `plugin.clearTags()`。

## 3.47.7

- fix(Sculpt): 优化点云中的长度标签的碰撞检测。

## 3.47.6

- fix(Sculpt): 修复长度标签的倾斜角度没有更新的问题。

## 3.47.5

- fix(Sculpt): 优化点云中的长度标签的碰撞检测；UI 优化。

## 3.47.4

- chore(\*): 优化放大镜性能。

## 3.47.3

- fix(Sculpt): 优化垂直绘制方式。

## 3.47.2

- chore(PanoSelector): 类型优化。

## 3.47.1

- change(PanoTagPlugin): 移除默认最大距离配置

## 3.47.0

- feat(PanoMeasurePlugin): 支持通过 `config.pointSelectorConfig.actionIfNoIntersection` 来配置当鼠标处无模型时的行为。
- feat(Sculpt): 绘制中遇到鼠标处无模型时的情况时更加智能。

## 3.46.1

- fix(Sculpt): 修复删除 item 时，距离 dom 没有被删除的问题。

## 3.46.0

- feat(Sculpt): 支持设置 item 的 `lengthEnable` 来开启距离显示。

## 3.45.0

- feat(Sculpt): 支持创建线段；支持创建 线段、折线、多边形时，锁定垂直/水平面

## 3.44.5

- chore(PanoTagPlugin): 开启 `debug` 时，控制台输出函数调用日志。

## 3.44.4

- fix(PointSelector): 修复缩放 fov 时，放大镜没有更新位置的问题。
- fix(PointSelector): 修复 `disable` 时，坐标点外围圆环没有隐藏的问题。

## 3.44.3

- fix(currentPanoImagePlugin): 支持多 work 场景。

## 3.44.2

- fix(PanoTagPlugin): 修复偶先走点后没有立即显示标签的问题。

## 3.44.1

- fix(PanoTagPlugin): 标签的模型态入口开启时，在模型态下禁止自动展开。

## 3.44.0

- feat(PanoMeasurePlugin): 新增一种坐标选择器样式，初始化插件时，可以使用 `config.pointSelectorConfig.helper.pointHelper` 配置来设置坐标选择器的样式。
- feat(PanoMeasurePlugin): 支持通过 `config.pointSelectorConfig.virtualPoint` 来配置当鼠标处无模型时，是否生成虚拟点。

## 3.43.0

- feat(PanoTagPlugin): 可通过 `globalConfig.entryFromModel` 启用标签在模型态上的入口，点击后可进入全景态查看标签。

## 3.42.0

- feat(PanoTagPlugin)
  1. 优化 fov 变化时标签位置的计算。
  2. 可通过 `globalConfig.simulate3D` 启用模拟 3d 的近大远小的效果，默认关闭。
  3. 添加 `tag.find()` 方法，移动至适当位置找到此标签。
  4. 添加 `loaded` 事件，load 完成后触发。
  5. 添加 `tagsLengthChange` 事件，调用`addTag()`, `clearTags()`, `tag.destroy()` 等方法 使标签数量发生变化时触发。
  6. 移除方法中的 `withAnimation` 参数，现在默认 `show`, `hide`, `enable` 全部带 fade 动画。
  7. 展示性能优化，加载速度优化。
- feat(Util):
  1. `Util.lookObject`,模型态下以最佳视角查看一个物体。
  2. `Util.lookPoint`: 模型态下以最佳视角查看一个坐标点。
  3. `Util.reblink`: 修复将 dom 的 opacity 主动设置为 0 时，反向闪烁动画不生效的问题。
- chore(Object3DHelperPlugin): 优化一些代码。

## 3.41.7

- chore(\*): update `BasePlugin`

## 3.41.6

- fix(PanoTagPlugin): 修复模型未加载完成时，手动调用 `changeConfig` 会报错的问题。

## 3.41.5

- fix(GuideLinePlugin): dom 闪烁动画修复

## 3.41.4

- fix(PanoMeasurePlugin): 修复走点后没有更新放大镜位置的问题。

## 3.41.3

- fix(\*): 修复众多插件在沙盘 vr 中的碰撞检测的目标错误的问题。

## 3.41.2

- fix(GuideLinePlugin): dom 闪烁动画修复

## 3.41.1

- fix(GuideLinePlugin): 闪烁动画修复
- feat(blink): 支持闪烁 `ShaderMaterial`

## 3.41.0

- feat(GuideLinePlugin): 优化路线转弯处的显示效果

## 3.40.4

- fix(ModelMakerPlugin): 修复 plugin `disable()` 后，依旧可以点击到物体的偶现问题。

## 3.40.3

- fix(GuideLinePlugin): 修复一个报错问题

## 3.40.2

- fix(GuideLinePlugin): 修复初始态为模型态时，路线引导标签不显示的问题。
- feat(GuideLinePlugin): 没有标签数据时，不生成多余的 PanoTagPlugin 实例。

## 3.40.1

- 忽略此版本，等同于 3.40.0

## 3.40.0

- change(blink): 现在返回值为 `animeInstance`，可以通过 `animeInstance.preComplete()` 来提前结束动画。

## 3.39.0

- feat(GuideLinePlugin): 支持设置 `useAutoDepthTest` 来选择是否动态开启深度测试

## 3.38.0

- feat(ModelMakerPlugin): 支持通过 `Plugin(five, { occlusionMode?: 'depthTest' | 'translucence' })` 设置当 occlusionVisibility 开启时的显示效果

## 3.37.2

- fix(ModelMakerPlugin): 修复区域标注 `load` 后 `occlusionVisibility` 可能不立即生效的问题。

## 3.37.1

- fix(PanoTagPlugin): 修复贴片标签 `disable` 后执行闪烁动画时不生效的问题。

## 3.37.0

- feat(ModelMakerPlugin): 支持通过 `Plugin(five, { occlusionVisibility?: boolean | Mode[] })` 设置是否展示标注被 five 模型遮挡的部分。
- fix(ModelMakerPlugin): 修复 区域标注(prism) 少了画一个面的问题。

## 3.36.11

- fix(PanoTagPlugin): 优化标签 `tag.enable` 性能。

## 3.36.10

- fix(PanoMeasurePlugin): 修复测量插件在特定条件下 `visibleFiveMode` 不生效的问题。

## 3.36.9

- fix(PanoMeasurePlugin): 修复沙盘场景下，标尺插件的 dom 部分 第一次加载时的初始位置不正确的问题。

## 3.36.8

- fix(PanoRulerPlugin): 修复标尺插件在沙盘 vr 中报错的问题。

## 3.36.7

- fix(PanoMeasurePlugin): 测量插件 view 模式 支持沙盘 VR。

## 3.36.6

- fix(ModelMakerPlugin): 标注 dom 部分 支持沙盘 VR。

## 3.36.5

- chore(\*): 一些导出修改

## 3.36.4

- fix(ModelMakerPlugin): 标注支持沙盘 VR。

## 3.36.3

- fix(PanoTagPlugin): 模型广告牌（MediaModel）支持沙盘 VR。

## 3.36.2

- feat(PanoVideoPlugin): 全景视频新增 `click` 事件，使用 `e.preventDefault()` 可以阻止默认点击行为

## 3.36.1

- fix(PanoTagPlugin) : 修复标签 disable 时，修改标签坐标后再 enable 不会更新标签 visible 的问题。

## 3.36.0

- feat(PanoTagPlugin): 优化标签性能。

## 3.35.2

- fix(PanoTagPlugin): 修复 dom 贴片在 disable 后调用 `blink` 不生效的问题。

## 3.35.1

- fix(PanoVideoPlugin): 修复在视频结束的瞬间调用 `disable` 时有一定概率不生效的问题。

## 3.35.0

- feat(PanoMeasurePlugin): 每条线可以通过数据中的 `visibleFiveMode: FiveMode[]` 来限制此条线在哪些 FiveMode 下可见
- feat(PanoVideoPlugin): 新增 `dataLoaded` 事件

## 3.34.6

- chore(PanoVideoPlugin): 修改 controllerMap 访问权限

## 3.34.5

- fix(ModelMakerPlugin): 修复插件 disable 后，item 执行 enable 依然生效的问题。

## 3.34.4

- fix(ModelMakerPlugin): 修复区域标注（prism）高度计算错误的问题。

## 3.34.3

- fix(PanoTagPlugin): `whyHide` 支持所有场景
- change(PanoTagPlugin): `__PANOTAGPLUGIN_DEBUG__` 现在会返回标签数最多的插件实例

## 3.34.2

- fix(ModelMakerPlugin): plugin config 问题修复

## 3.34.1

- fix(ModelMakerPlugin): 支持设置标签容器的 `zIndex` 属性；修复标签显隐问题。

## 3.34.0

- feat(PanoTagPlugin):
  - 支持设置标签容器的 `zIndex` 属性。
  - 兼容 five react，并回滚 3.29.5 和 3.27.10 中的 five react 兼容方式。此方式可能会引发一些其他问题。
  - 如果遇到浏览器 resize 时标签不可见的问题时，请在插件初始化时设置 zIndex 为大于 0 的值，例: `PanoTagPlugin(five, { containerZIndex: 1 })`，或者使用 `plugin.appendTo(element)` 将插件放入稳定的容器中。

## 3.33.0

- feat(CSS3DRenderPlugin): 支持设置 wrapper 容器。

## 3.32.1

- style(PanoTagPlugin): 优化 `Panorama` 标签 UI 效果。

## 3.32.0

- feat(PanoTagPlugin): 新增 `plugin.appendTo` 方法，支持将标签容器放入到指定的 dom 中，默认与 five canvas dom 同级。
- fix(PanoTagPlugin): 优化 `clearTags` 方法，现在会一起清除标签容器。

## 3.31.1

- fix(PanoTagPlugin): 回滚 3.24.0 中引入的标签 filter 缓存

## 3.31.0

- change(PanoTagPlugin): five 模型更新时，重新计算所有标签状态

## 3.30.6

- fix(Object3DHelper): 修复 正交相机 下无法正确移动物体的问题
- fix(FiveDomEvent): 修复 `removeEventListener` 不传事件名时，无法移除所有事件监听的问题

## 3.30.5

- fix(PanoTagPlugin): 支持闪烁禁用的标签
- fix(PanoTagPlugin): 优化标签不可见时闪烁的效果

## 3.30.4

- fix(blink): 修复标签闪烁问题

## 3.30.3

- doc(blink): 添加 example

## 3.30.2

- doc(blink): 添加注释

## 3.30.1

- fix(ModelMakerPlugin): typing 优化

## 3.30.0

- feat(\*): 兼容 five@6.0.0-alpha.74 及大于 74 的版本

## 3.29.9

- fix(ModelMakerPlugin): 修复 3.28.9 更新导致的 3D 标注（box）的标签位置有可能不准确的问题

## 3.29.7

- fix(blink): 支持闪烁不可见的物体

## 3.29.6

- fix(\*): 导出 animejs 类型

## 3.29.5

- fix(CSS3DRender): 兼容 five/react

## 3.29.4

- fix(PanoTagPlugin): 导出 `tag.blink` 类型

## 3.29.3

- fix(blink): 修复闪烁函数 blink 在处理一些有透明度的复杂模型时，第二次闪烁异常的问题

## 3.29.2

- fix(ModelMakerPlugin): 修复 item 的各种事件没有触发的 bug

## 3.29.1

- chore(ModelMakerPlugin): 修改属性访问权限。

## 3.29.0

- feat(PanoTagPlugin): 支持标签闪烁：`plugin.blinkTagById(id, animeParams)` 和 `tag.blink(animeParams)`

## 3.28.11

- fix(PanoTagPlugin): 修复部分标签无法加载的 bug（我是啥比

## 3.28.10

- fix(ModelMakerPlugin): 修复区域标注（prism）的 z-fighting 问题

## 3.28.9

- fix(ModelMakerPlugin): 修复包含旋转数据的 3D 标注（box）加载位置不准确的问题

## 3.28.8

- fix(PointSelector): 优化点击逻辑

## 3.28.7

- fix(PanoTagPlugin): 兼容 tag.stickType 没有时标签 config 的计算逻辑。

## 3.28.6

- fix(PointSelector): 修复 enable 时，一些状态没有重置的问题。

## 3.28.5

- fix(Object3DHelper): 修复一个 `Cannot read properties of undefined` 的报错

## 3.28.4

- fix(PanoTagPlugin): 修复 tag 的一些 events 没有触发的问题。

## 3.28.3

- fix(PanoTagPlugin): 修复 tag.id 改变后，tag 上的方法无法执行的问题

## 3.28.2

- chore: 发布 CHANGELOG

## 3.28.1

- change(PointSelector): 修改射线碰撞半径 0.01 => 0.02

## 3.28.0

- feat(PanoTagPlugin): 新增 `plugin.changePositionById(id, position)` 和 `tag.changePosition(position)`

## 3.27.10

- fix(PanoTagPlugin): 兼容 five/react

## 3.27.9

- fix(Sculpt): 修复 `item.off()` 不生效的问题
- fix(Sculpt): 修复 `plugin.clear()` 清除不干净的问题
- feat(FiveDomEvents): 支持设置不在场景中的物体不触发事件

## 3.27.8

- change(PanoMeasurePlugin): 右键不退出测量

## 3.27.7

- fix(PointSelector): 兼容点云场景

## 3.27.6

- fix(PanoTagPlugin): 优化&修复标签自动展开时，其他标签被动收起的逻辑。

## 3.27.5

- fix(PanoTagPlugin): 修复 `destroyTagById` 执行后，视图没有更新的 bug

## 3.27.4

- fix(PanoTagPlugin): 修复 `destroyTagById` 执行后，标签数组缓存没有更新的 bug

## 3.27.3

- fix(PanoTagPlugin): 修复 contentTypeConfig 中，`ModelLike` 和 `Mapview` 等模型态 mode 配置同时存在时，会出现配置相互覆盖而不合并的问题。

## 3.27.2

- fix(PanoTagPlugin): 回滚 3.27.0 中的第二个 feature

## 3.27.1

- fix(PanoTagPlugin): 修复 3.27.0 中 `initialState` 的 bug

## 3.27.0

- feat(PanoTagPlugin): 支持移动屏幕时自动收起标签
- feat(PanoTagPlugin): `initialState`支持不同 five mode

## 3.26.0

- change(PanoTagPlugin): contentTypeConfig 移除对自定义标签类型的 Mixin-[type] 支持，直接使用 type 作为 key 即可

## 3.25.10

- fix(PanoTagPlugin): contentTypeConfig 支持任意自定义标签。

## 3.25.9

- fix(PanoTagPlugin): 修复 `changeConfig`, `changeContentTypeConfig` 修改影响标签展示的配置时，可能不会立即生效的问题。
- fix(ObjectHelper): `ScaleController` 添加 `setScale` 方法。

## 3.25.8

- fix(PanoTagPlugin): 兼容 tailwind

## 3.25.7

- fix(PanoVideoPlugin): shader 修复
- chore(PanoTagPlugin): `Tag` 类型优化

## 3.25.6

- chore(PanoTagPlugin): 导出 `ContentTypeMapInterface` 类型

## 3.25.5

- chore(Sculpt): 优化 `Sculpt` ts 类型

## 3.25.4

- fix(Object3DHelper): 修复模型位移组件在特殊边界条件下位移不准确的问题。

## 3.25.3

- fix(\*): 修复插件 `load()` 时，数据校验检测不准确的问题。

## 3.25.2

- chore(Sculpt): 导出 type `SculptData`

## 3.25.1

- chore(Sculpt): 导出 SculptPlugin

## 3.25.0

- feat(MovePlugin): 模型漫游插件支持 `show()` `hide()` 路线
- fix(ModelMakerPlugin): `load()`后立即应用当前`state`
- fix(ModelMakerPlugin): 修复`clear()`没有清除干净的 bug

## 3.24.3

- fix(ModelMakerPlugin): 修复区域标注 prism 在特殊情况下走点后 标签会隐藏的问题

## 3.24.2

- fix(ModelMakerPlugin): 修复模型隐藏时，仍然可以点击的问题

## 3.24.1

- fix(ModelMakerPlugin): 修复 Box 名称无法显示的问题 以及 没有 name 字段时会显示 undefined 的问题

## 3.24.0

- feat(PanoTagPlugin): 滑动屏幕时的性能优化，当前点位不可能看到的标签不会有任何多余的计算。
- fix(PanoTagPlugin): 修复 3.23.3 中手贱引入的 bug。
- fix(ModelMakerPlugin): 修复 disable 函数报错问题。

## 3.23.3

- fix(ModelMakerPlugin): 修复循环引用的问题。
- feat(ModelMakerPlugin): 添加函数`getItemById()`用来获取模型 Item。

## 3.23.2

- fix(ModelMakerPlugin): 多边形支持 hover 态。
- fix(FiveDomEvent): 修复 unHover 不会触发的问题。

## 3.23.1

- fix(ModelMakerPlugin): 模型态标注标签支持碰撞检测。

## 3.23.0

- feat(ModelMakerPlugin): 新增默认 UI, 使用 `plugin.registerTagRenderer` 可自定义 UI。

## 3.22.0

- feat: add `ModelMakerPlugin`

## 3.21.2

- fix(PanoMeasurePlugin): 修复`disable()`后仍能点击的问题。

## 3.21.1

- fix(\*): audio.js 支持 SSR

## 3.21.0

- feat: 新增 `Sculpt`, [文档](../plugins/src/Sculpt/README.md)

## 3.20.7

- fix(PanoMeasurePlugin): 彻底修复插件在序列化时会报错的问题 [相关 issue](https://github.com/mrdoob/three.js/issues/26598)。

## 3.20.6

- fix(PanoMeasurePlugin): 修复插件`disable`后，再次`enable`时，新手引导不展示的问题。
- fix(PanoMeasurePlugin): 修复插件在序列化时会报错的问题 [相关 issue](https://github.com/mrdoob/three.js/issues/26598)。
- chore(PanoMeasurePlugin): 移除废弃的类型声明。

## 3.20.5

- fix(GuideLinePlugin): 修复数据中没有 id 时，无法生成多条路线的 bug
- change(GuideLinePlugin): dispose 后可以正常调用 load 函数
- feat(GuideLinePlugin): 内置默认箭头图片

## 3.20.4

- feat(MovePlugin): load 参数 data.path 支持传入坐标点数组。

## 3.20.3

- fix(PanoTagPlugin): 修复部分手机(oppo reno 9)的火狐浏览器中，视频贴片黑屏的问题

## 3.20.2

- fix(PanoTagPlugin): 修复一些特殊情况下，走点后标签点可见性判断错误的问题

## 3.20.1

- fix(PanoTagPlugin): 之前由于性能问题，去除了标签的 zIndex 策略。现在使展开后的标签的 zIndex 生效，以解决展开后的标签被其他标签遮挡的问题。

## 3.20.0

- feat(floorplan): 添加 `roomDimensionEnable` 参数, 控制是否展示分间长宽。用`getRoomDimensionText`自定义分间尺寸文案

## 3.19.1

- fix(PanoTagPlugin): 移除视频贴片不可见时的多余逻辑

## 3.19.0

- feat(PanoVideoPlugin): 添加 `unmuteByRenderID(id: string)` 方法来取消静音。

## 3.18.0

- feat(ObjectHelperPLugin): `moveController.moveByMouse()`参数`useFaceNormal`开启时，新增 `fixedFaceNormal` 参数用来设置修正后的用来做重合的 face 法向量

## 3.17.1

- feat(ObjectHelperPLugin): `moveController.moveByMouse()`参数`useFaceNormal`开启时，新增 `alignmentVector` 参数用来设置需要和面片法向重合的物体本地向量，默认使用 Y 轴重合。

## 3.17.0

- feat(ObjectHelperPLugin): `moveController.moveByMouse()` 新增 `{ useFaceNormal?: boolean }` 参数用来控制物体放置时，是否考虑面片的法线方向，默认为 `false`
- update(ObjectHelperPLugin): BoundingBox 边框线关闭 `depthTest`
- fix(ObjectHelperPLugin): 修复 controller 是否启用的判断逻辑错误的问题

## 3.16.2

- fix(ObjectHelperPLugin): 修复关闭 rotateHelper 时，放置物体会触发走点的问题

## 3.16.1

- fix(GuildLinePlugin): `skip_group` 配置移动到 `panorama_style` 中

## 3.16.0

- feat(GuildLinePlugin): 支持设置 `skip_group: boolean` 来选择是否跳过全景点位，默认为 `true`

## 3.15.0

- feat(ObjectHelperPLugin): 支持设置 `moveHelper` x/y/z 轴是否开启

## 3.14.2

- chore(ObjectHelperPLugin): 优化`addObject3DHelper`方法的返回类型

## 3.14.1

- fix(GuildLinePlugin): 修复路线箭头颜色混合不正确的问题

## 3.14.0

- feat(GuildLinePlugin): 支持修改 `backgroundClip`，默认为 `border-box`

## 3.13.0

- feat(GuildLinePlugin): 支持修改边框宽度
- fix(GuildLinePlugin): 修复箭头黑边问题

## 3.12.7

- fix(PanoTagPlugin): 修复低版本浏览器非透明图片的黑屏问题

## 3.12.6

- revert: 回滚 svelte 版本

## 3.12.5

- fix(PanoTagPlugin): 修复商品标签性能问题

## 3.12.4

- fix(PanoTagPlugin): 修复一个内存泄漏的问题

## 3.12.3

- fix(AreaMaker): 优化 `tagShow` / `tagHide` 触发时机

## 3.12.2

- fix(ModalFloorplanPlugin): 修复模型户型图插件实例化时可能会错过设置 wrapper 时机的问题

## 3.12.1

- fix(FloorplanRanderPlugin): 修复户型雷达图多次调用 `appendTo` 时不生效的 bug

## 3.12.0

- feat(CruisePlugin): 支持 `five@6.0` 多 work 数据
- feat(GuildPlugin): 支持 `five@6.0` 多 work 数据
- feat(GuildPlugin): 路线默认图片支持低版本浏览器
- feat(PanoTagPlugin): 提供 debug 方法来关闭碰撞检测: `plugin.debugUtil.closeIntersectRaycaster()`
- fix(PanoTagPlugin): 修复 `changeGlobalConfig` 后 config 计算错误的 bug

## 3.11.0

- feat(AreaMakerPlugin): item 新增事件 `tagShow` / `tagHide`，在标注标签被模型遮挡/不遮挡时触发

## 3.10.3

- fix(CruisePlugin): 修复续播问题

## 3.10.2

- chore(AreaMakerPlugin): resize 使用 `resizeObserver` 的实现方案替代 `iframe` 的实现方案

## 3.10.1

- chore: 兼容 five@6.0.0-alpha.56

## 3.10.0

- feat(AreaMakerPlugin): object_data 新增 `{ visible?: boolean }` 属性，用于控制模型的可见性，默认为 true

## 3.9.0

- feat(PanoVideoPlugin): 添加渐现效果

## 3.8.11

- fix(PanoTagPlugin): 提升在点云场景下的性能

## 3.8.10

- fix(PanoTagPlugin): 兼容 Five 5.x 版本

## 3.8.9

- fix(AreaMakerPlugin): load 时之前的数据没有销毁干净的问题

## 3.8.8

- chore(PanoTagPlugin): 修改默认配置

## 3.8.7

- fix(AreaMakerPlugin): 修复 load 可能不生效的问题

## 3.8.6

- fix(MovePlugin): 修复不能重复播放的问题

## 3.8.5

- fix(PanoTagPlugin): 修复 usePoint 影响到了非自定义标签的问题

## 3.8.4

- fix(PanoTagPlugin): 修复标签在初始化过程中就妄图拿到初始化结果的问题，会导致一些设置了 visibleFiveMode 的标签无法按照预期显示

## 3.8.3

- fix(MovePlugin): 修复一些 hook 没有正常触发的问题；修复 开始播放/续播 时有延迟的的问题

## 3.8.2

- fix(CruisePlugin): 修复 CruisePlugin 和 MovePlugin 初始化参数无法设置的问题

## 3.8.1

- fix(Object3DHelperPlugin): 修复 MoveHelper 没有销毁的问题，更改 boundingBox 计算的逻辑

## 3.8.0

- feat(PanoTagPlugin): registerRenderer 新增 usePoint 参数，用于设置自定义标签是否使用标签点

## 3.7.0

- feat(MovePlugin): 新增 MovePlugin，支持按照指定的路径移动相机

## 3.6.0

- feat(AreaMakerPlugin): 支持通过设置`itemRenderer`属性来自定义标签渲染器

## 3.5.1

- fix(PanoTagPlugin): 修复修改标签 position 后没有重新计算标签可见性的问题

## 3.5.0

- feat(PanoTagPlugin): 添加 `bindRenderer(currentCententType: string, targetContentType: TagContentType)` 方法，当标签的 ContentType 为 currentCententType 时，会使用 targetContentType 的渲染器来渲染标签
- fix(PanoTagPlugin): 修复 tag.config 在处理多种 five mode 时 config 会被覆盖的问题

## 3.4.1

- style(PanoTagPlugin): 标签样式修复

## 3.4.0

- feat(PanoTagPlugin): 添加全景标签

## 3.3.6

- fix(PanoTagPlugin): 修复走点时可能报错的问题

## 3.3.5

- feat(PanoTagPlugin): 2d 标签按需加载 dom，优化性能问题

## 3.3.4

- fix(Floorplan): 复户型图在少数情况下,第一次从模型态展示户型图时展示失败。

## 3.3.3

- fix(PanoTagPlugin): 修复 3.3.2 中可能会出现报错的问题

## 3.3.2

- fix(PanoTagPlugin): 如果 config keep 值存在，强制修改 initialState

## 3.3.1

- fix(PanoTagPlugin): 修复报错

## 3.3.0

- feat(PanoTagPlugin): 标签在`Mapview`态时，支持按距离显示。
- feat(PanoTagPlugin): 标签位置计算支持多 Work 场景下的标签位置偏移量。
- fix(PanoTagPlugin): 修复了标签在消失动画过程中时不会更新位置的问题。
- fix(PanoTagPlugin): 图片贴片兼容低版本 Chrome。

## 3.2.4

- fix(CurrentPanoImage): texture.minFilter 改为 THREE.LinearFilter，用于修复在部分设备下渲染图片异常。

## 3.2.3

- fix(GuideLinePlugin): 修复设置 tag 为空时再修改别的属性报错。

## 3.2.2

- fix(GuideLinePlugin): 修复 tag.data 为 null 时报错。

## 3.2.1

- fix(GuideLinePlugin): 修复配置路线引导位移时标签没有变化。

## 3.2.0

- feat(GuideLinePlugin): 路线引导支持配置位移。

## 3.1.3

- fix(PanoTagPlugin): 修复带帧动画的标签在低版本浏览器中显示异常的问题。

## 3.1.2

- fix(PanoTagPlugin): 视频贴片 autoplay 为 true 时，在微信场景下允许一直尝试自动播放。

## 3.1.1

- fix(floorplan-radar): 修复雷达图参数为空时报错的问题。

## 3.1.0

- feat(floorplan): 户型图支持缺失楼层配置。可以配置一张占位图片和文字。
- feat(floorplan): 雷达图图支持缺失楼层配置占位图。

## 3.0.1

- fix(PanoTagPlugin): 修复 safari 中模型态标签 hide 时，opacity 不会立即生效的问题

## 3.0.0

- feat(\*): 插件支持 Five 6.x 版本
- fix(CSS3DRenderPlugin): 嵌套 object 的 show/hide 修复
- fix(PanoTagPlugin): 修复 renderType 为 Mesh 时，MediaPlane 标签 无法正常显示 gif 的问题
- fix(PanoTagPlugin): 修复 changeConfig 性能问题；其他 bug 修复
- fix(PanoMeasurePlugin): 设置放大镜容器为传入的 container 而不是 body
- fix(PanoMeasurePlugin): 修复 Five 不为全屏时，测量时的辅助坐标点计算错误的问题
- chore(floorplan): 兼容 five changeMode 时, 传入 0, 得到的可能是 Math.PI \* 2 的问题
- 优化 FiveDomEvents 性能

## 2.31.0

- PanoTagPlugin:
  - feat: 更好的支持`2D标签`在模型态下的展示，内置模型态标签的相关配置
  - feat: visibleMode 支持 `Mode | Mode[] | 'PanoramaLike' | 'ModelLike' | 'all' | function`; 默认值为 `tag.fiveState?.mode ?? 'Panorama'`
  - feat: `plugin.config.contentTypeConfig` 支持设置标签在不同 FiveMode 下的展示行为。 具体值参照 `type ContentTypeConfigKey`
  - feat: 使用 2.27.3 相似方式 优化 `tag.contentType` 的类型推断
  - fix: 修复部分情况下标签的渐显动画失效的问题
  - fix: 修复`2D标签`远近距离判断错误的问题
  - fix: 使用 `five.model.uuid` 代替 `five.work.workCode` 作为标签点位缓存的 key, 修复加载其他 five 后，缓存依然生效的问题
  - chore: `FiveDomEvents` 代码优化

## 2.30.3

- fix(MapviewFloorplanPlugin): 修复移动端缩放失效。

## 2.30.2

- fix(AreaMakerPlugin): 修复 initialState 不生效。

## 2.30.1

- fix(CurrentPanoImagePlugin): 修复 five initialState.mode 不为 Panorama 且 Plugin initialState.enabled 为 false 时，先 changeMode 到 Panorama 再调用 Plugin.enable() 在首点位模型没有正常展示的问题。
- feat(CurrentPanoImagePlugin): 提供 \_\_whyCantSeeMesh 方法，用于 debug 时查找为什么无法看到模型。

## 2.30.0

- feat(CurrentPanoImagePlugin): 新增 CurrentPanoImagePlugin。

## 2.29.0

- feat(PanoTagPlugin): 添加函数 `tag.whyHide(tagId)`，会告诉你为什么看不到标签
- fix(PanoTagPlugin): 重构物体点击判断逻辑，修复 bug；减少射线检测次数，提升性能

## 2.28.6

- fix(CruisePlugin): 后置 load 函数中的 `clearPauseData()` 调用时机，修复 play 过程中执行 load 导致暂停的情况下，记录了暂停数据的问题

## 2.28.5

- fix(PanoCompassPlugin): 支持配置 logoURL

## 2.28.4

- fix(PipelinePLugin): typo
- update github action

## 2.28.3

- fix(AreaMakerPlugin): 修复屏幕 Resize 时，标签位置错误。

## 2.28.2

- fix(AreaMakerPlugin): 修复调用 plugin.hide 时，标注标签没有隐藏。
- fix(AreaMakerPlugin): 修复 Five 初始状态不是全景时，没有正确加载。
- fix(AreaMakerPlugin): 修复插件参数没有正确传入。

## 2.28.1

- fix(PanoTagPlugin): 修复透明图片贴片的黑边问题

## 2.28.0

- feat(AreaMakerPlugin): 添加 AreaMakerPlugin。

## 2.27.4

- fix(PanoTagPlugin): 修复安卓小程序中，视频贴片无法自动播放的问题

## 2.27.3

- feat(PanoTagPlugin): 优化 tag.data 的类型
  1. 对于未知类型的 tag 如 `tag: Tag`，现在可以使用 tag.data.my_any_property 而不报 ts 错误, 而之前版本需要使用`tag: Tag<any>`
  2. 对于已知类型的 tag 如 `tag: Tag<'Text'>`, 现在可以使用 tag.data.my_any_other_property 而不报 ts 错误

## 2.27.2

- fix(PanoTagPlugin): 修复 tag 没有处理模型标签的 clickable。

## 2.27.1

- fix(PanoTagPlugin): 修复在部分 IOS 微信场景中，虚拟视频自动播放时播放按钮没有消失的 bug

## 2.27.0

- feat(PanoTagPlugin): 碰撞检测支持更精细的检测配置，默认检测所有 tag.position，默认任意一点检测通过则视为碰撞检测通过
- fix(PanoTagPlugin): 修复 MediaPlane 标签的 `tag.disable()` / `tag.enable()` 方法不生效的 bug
- fix(PanoTagPlugin): MediaPlane visible 状态变化为 false 时，立即销毁图片资源
- fix(PanoTagPlugin): TextTag 支持换行符

## 2.26.2

- fix(PanoTagPlugin): 修复模型 loaded 判断。

## 2.26.1

- fix(MeasurePlugin): 修复测量撤销时线段删除有问题 & 修复报错。

## 2.26.0

- fix(Floorplan): 修复户型图插件连续调用两次 show() 展示失败。
- feat(Pipeline): 添加 Pipeline 插件。

## 2.25.0

- feat(MapviewFloorplanPlugin): Mapview Floorplan 支持惯性滚动。

## 2.24.2

- fix(PanoTagPlugin): fix ImagePlane z-fighting

## 2.24.1

- fix(PanoMeasurePlugin): 测面积支持自定义单位转换，使用方法 `changeConfigs(getAreaText: (area: number) => string`

## 2.24.0

- feat(PanoTagPlugin): MediaPlane visible 状态变化为 false 时，立即销毁视频资源

## 2.23.1

- fix(PanoCompassPlugin): 支持 i18n 函数

## 2.23.0

- feat(PanoTagPlugin): textTag 的 plane 样式下新增 data.titleMaxRows 和 data.descriptionMaxRows，用于控制最大显示行数，默认显示全部
- fix(PanoTagPlugin): 修复 textTag.data.edit 的 placeholder 为空字符串时不显示插入符的问题

## 2.22.0

- feat(PanoMeasurePlugin): 新增测面积功能，使用 editParams.allowMeasureType: ['line', 'area'] 开启

## 2.21.1

- fix(PanoCompassPlugin): 修复 config.staticPrefix 不生效的问题

## 2.21.0

- fix(MeasurePlugin): 为了优化性能，测量插件去除「吸附」功能，将不会在模型初始化时计算模型边界。
- fix(ModelChassisCompassPlugin): 修复模型底盘在模型改变时，没有更新位置。

## 2.20.9

- chore(\*): 插件图片转为 base64 或支持 staticPrefix 参数

## 2.20.8

- fix(GuideLinePlugin): 路线标签距离使用 Math.round。

## 2.20.7

- fix(GuideLinePlugin): 更改路线标签线条宽度。

## 2.20.6

- fix(GuideLinePlugin): 修复路线标签样式。

## 2.20.5

- feat(GuideLinePlugin): 标签展示路线长度。

## 2.20.4

- fix(PanoTagPlugin): 修复图片贴片没有根据 config.clickable 来设置点击事件的问题

## 2.20.3

- fix(\*): fix Lint。
- fix(FloorplanRadarPlugin): 修复鼠标 hover 报错。
- feat(GuideLinePlugin): 支持距离计算。

## 2.20.2

- fix(GuideLinePlugin): 修复旧版本数据无法展示。

## 2.20.0

- feat(PanoTagPlugin):

  - Typescript 类型优化
  - 新增方法 `tag.changeData(data: PartialObjectDeep<TagData>): void`，用于修改标签的 `data`
  - 新增方法 `registerRenderer(contentType: string, renderer: ElementRenderer): void`，插件会按照传入的 `renderer` 来渲染相应的 `ContentType`

- fix(PanoTagPlugin): 使用 `PartialObjectDeep` 代替 `PartialDeep`, 修复复杂场景下的类型推断问题
- fix(\*): 修复 eslint 失效问题

- chore(\*): 修改 load 日志级别为 `Verbose`

## 2.19.3

- fix(PanoTagPlugin): 使用 z-index 代替 dom 排序，解决标签数量较多时的卡顿问题

## 2.19.2

- fix(PanoTagPlugin): 修复多媒体标签没有自动轮播的问题。

## 2.19.1

- fix(PanoMeasure): 修复移动端测量工具没有触发 editedPolylineChange。

## 2.19.0

- feat(PanoTagPlugin): 添加 Model 类型。
- feat(PanoTagPlugin): 允许自动转向。
- feat(PanoTagPlugin): 添加 MediaModel 和 Model 的点击行为。
- fix(PanoTagPlugin): 修复标签插件初始化时合并 config 没有深度合并。
- fix(PanoTagPlugin): 修复 MediaModel renderType 不为 Mesh 时，非 Panorama 态展示异常。
- fix(PanoMeasure): 修复移动端删除测量线段报错。

## 2.18.5

- fix(PanoTagPlugin): 修复标签 style.point 报错。

## 2.18.4

- fix(GuideLinePlugin): 修复历史数据默认展示逻辑。

## 2.18.3

- fix(GuideLinePlugin): 修复标签控制判断。

## 2.18.2

- feat(GuideLinePlugin): 允许通过传入空值动态删除标签。

## 2.18.1

- fix(GuideLinePlugin): 加载标签插件时，不使用 followModelVisibility。修复自定义标签楼层显示错误。

## 2.18.0

- feat(GuideLinePlugin): 路线引导插件支持自定义路径。
  - 支持添加模型 & 全景两种不同的路线。
  - 支持配置路径背景、贴图颜色、边框、缩放。
  - 支持模型态时添加起点、终点标签。
  - 支持路径闪烁动画。
  - 支持路径流动动画。
- refactor(\*): 优化打包：
  - 支持 CJS 库的引用。
  - 优化 ESLint，在引用 TS 声明时，需要显示表明 import type。

## 2.17.1

- fix(PanoTagPlugin): 修复微信场景中的视频贴片不能自动播放的问题
- change(PanoTagPlugin): 修复一个拼写错误, autoUnfoldWhenHide -> autoFoldWhenHide

## 2.17.0

- feat(PanoTagPlugin): tag config 新增 initialData 字段，可以设置标签中的 data 的初始值。tag.mergeConfig.initialData 会深度合并入 tag.data 中
- feat(PanoTagPlugin): tag config 新增 followModelVisibility 字段，用于控制当标签在 Floorplan、MapView 可见时，是否仅在当前高亮的楼层显示。默认值为 false
- feat(PanoTagPlugin): 视频贴片支持通过 `tag.config.initialData.autoplayConfig.autoplayVideo` 或 `tag.data.autoplayConfig.autoplayVideo` 设置默认是否播放，默认值为 false
- fix(PanoTagPlugin): 修复以 Mesh 形式渲染的图片贴片没有 emit 点击事件的 bug
- fix(PanoTagPlugin): 修复以 Mesh 形式渲染的贴片的 ObjectFit 没有生效的 bug
- fix(PanoTagPlugin): 将 five.panoIndex 改为 five.getCurrentState().panoIndex，保证 panoIndex 不为 undefined

## 2.16.1

- fix(PanoTagPlugin): 视频贴片隐藏/禁用时，不再监听播放按钮 Mesh 的点击事件
- fix(PanoTagPlugin): 修复视频被动播放时封面图的展示逻辑

## 2.16.0

- feat(PanoTagPlugin): 视频贴片支持以 Mesh 方式渲染
- feat(PanoTagPlugin): 优化 Five 焦点环在不透明图片贴片上的效果
- fix(PanoTagPlugin): 修复 getRenderType 有可能返回 undefined 的 bug，这个 bug 会导致部分含有 mediadata 的 3DPoint 标签无法显示
- fix(PanoTagPlugin): 修复广告牌中的图片以 css3d behind 模式渲染时, 调用 disable 时没有删除 css3dObject.opacityMesh 的问题
- fix(PanoTagPlugin): 修复广告牌中的图片以 css3d behind 模式渲染时, 调用 enable 时没有同步 css3dObject 的 matrix 的问题

## 2.15.0

- change(PanoTagPlugin): 单张的视频贴片不再支持以 behindDom 模式渲染，因为目前会有黑边问题；后续会直接使用 Mesh 实现
- change(threex): 监听到 touch 相关事件后不再执行 preventDefault()
- feat(PanoTagPlugin): 自定义标签（customTag）取消了展开/收起时的默认样式
- feat(PanoTagPlugin): 标签添加 className 属性，可以在标签的父元素上添加自定义的 className
- fix(PanoTagPlugin): 修复视频贴片播放时没有声音的问题
- fix(PanoTagPlugin): 修复视频贴片以 Dom 形式渲染时无法播放的问题

## 2.14.3

- fix(PanoTagPlugin): 虚拟屏幕标签存在多张图片的时候不以 behind 模式渲染
- fix(PanoTagPlugin): 单张的视频贴片支持以 behind 模式渲染
- fix(CruisePlugin): 修复 CruisePlugin 解析数据时可能计算出错误 longitude/latitude 的问题

## 2.14.2

- fix(PanoFloorplanRadarPlugin): 修复 PanoFloorplanRadarPlugin 配置 hoverEnable 为 true 报错的问题

## 2.14.1

- fix(ModelChassisCompassPlugin): 替换模型底盘文件使用的贴图宽高为 2 的整数次幂

## 2.14.0

- feat(PanoTagPlugin): MediaModel（虚拟广告牌）新增 `config.renderType: 'Mesh' | 'Dom'` 配置，默认值为`Dom`
- chore(\*): 通过 loadTexture 函数加载的 texture 的 wrapS/wrapT 默认值设置为 ClampToEdgeWrapping

## 2.13.2

- refactor(floor & tag & roomLabel): 更改 dom resize 监听。从 iframe 改成了 resizeObserver。

## 2.13.1

- fix(\*): 修复 ios16.4 上 texture 使用默认 mipmap 的方式插值时导致 texture 变黑的问题

## 2.13.0

- feat(PanoTagPlugin): 三维图片标签（贴片标签）新增 `config.renderType: 'Mesh' | 'Dom'` 配置，默认值为`Dom`，当数据中只有一张图片时,可以选择 Mesh 或 CSS3DRender 形式渲染。

## 2.12.0

- feat(PanoMeasurePlugin): 支持国际化配置。

## 2.11.2

- feat(TopviewFloorplanPlugin ModelFloorplanPlugin MapviewFloorplanPlugin): 支持 highlight 高亮 支持 去掉 Camera

## 2.11.1

- feat(ModelRoomLabelPlugin): 支持 Mapview 模式。

## 2.11.0

- fix(PanoTagPlugin): 修复无法被展开/收起的标签可以通过 changeUnfoldedById 方法强制展开/收起的 bug
- feat(\*): BasePlugin 添加 `readonly VERSION: string` 属性，默认值取自 package.json 中的 version 字段
- feat(PanoTagPlugin):
  - 优化帧动画组件，减少不必要的 Dom 和计算
  - 标签点支持帧动画
  - 不再建议通过 size 设置标签点大小，而是通过 ratio 指定输入图片为几倍图，默认为三倍图

## 2.10.8

- fix(panoTagPlugin): 修复当`音频标签A`播放结束后，播放其他`音频标签B`时，`音频标签A`的播放动画会触发的问题。
- fix(PanoTagPlugin): 修复音频标签无法在部分 iPhone `(>= ios 15)` 中播放第二次的问题。
- 相关文档：
  - [github issus](https://github.com/aws/amazon-chime-sdk-js/issues/2394)
  - [webkit bugs](https://bugs.webkit.org/show_bug.cgi?id=241152)
  - [Auto-Play Policy Changes for macOS](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/)

## 2.10.7

- fix(PanoTagPlugin): 修复 hide 未隐藏 MR 标签。

## 2.10.6

- fix(PanoVideoPlugin): 修复 video 事件监听丢失。

## 2.10.5

- fix(PanoVideoPlugin): 修复看向模型时视角错误。
- perf(PanoVideoPlugin): 优化视频添加时机。

## 2.10.4

- fix(PanoVideoPlugin): 修复 load 导致的 enable 失效。

## 2.10.3

- fix(PanoTagPlugin): 修复音频标签在部分 iPhone `(<= ios 15)`上续播失败的问题。原因是浏览器中的 HTMLAudioElement 在设置 currentTime 时，会根据 metadata 信息做校验，所以在 onloadeddata 事件触发前无法成功设置 currentTime。
- 相关文档：
  - [MDN]('https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime')

## 2.10.2

- fix(PanoVideoPlugin): 点位视频支持点击播放时，判断视频 Mesh 是否在场景中。

## 2.10.1

- feat(PanoVideoPlugin): 点位视频支持点击播放。
- feat(PanoVideoPlugin): 点位视频支持点击看向某个视频元素。

## 2.10.0

- feat(PanoVideoPlugin): 添加点位视频融合插件。

## 2.9.2

- fix(PanoTagPlugin): 修复音频标签第二次播放时，点击播放按钮无反应的问题。

## 2.9.1

- feat(PanoMeasurePlugin): 测量工具 DistanceDOM 不再判断端点是否超出屏幕。

## 2.9.0

- feat(PanoTagPlugin): MarketingTag 新增黑色主题： `theme: 'light' | 'dark'`, 默认为 `light`。
- feat(PanoTagPlugin): Media 组件优化，一张图片/视频时不放入轮播组件中。
- fix(PanoTagPlugin): 修复 disable() 无法完全禁用 MediaModelTag 的问题

## 2.8.6

- feat(PanoTagPlugin): 添加 ContentType 为 Sticker 的 Tag
- fix(PanoTagPlugin): 修复 LinkTag 动画帧数为 1 时不显示文字的问题

## 2.8.4

- fix(Object3DHelper): 修复初始化时的一个报错

## 2.8.3

- fix(Object3DHelper): 重构优化部分旋转逻辑，修复绕旋转 z 中心旋转时的 bug

## 2.8.2

- fix(PanoTagPlugin): 修复 MediaModelTag loading 计算错误。

## 2.8.1

- fix(PanoTagPlugin): 修复 MediaModelTag 射线检测。

## 2.8.0

- feat(floorplan): 户型图插件添加配置
  - 分间面积是否展示：roomAreaEnable
  - 分间名称是否展示：roomNameEnable

## 2.7.3

- fix(PanoTagPlugin): 修复部分标签 content 无法点击的问题

## 2.7.2

- fix(Object3DHelperPlugin): 修复 Object3DHelperPlugin 的 CSS3DScaleHelper 的操作框位置错误的问题

## 2.7.1

- fix(PanoTagPlugin): 修复 disable -> load -> enable 路径 MediaModelTag media content 不展示。

## 2.7.0

- feat(PanoTagPlugin): 添加 ContentType 为 MediaModel 的 Tag。

  - 允许加载外部 GLTF 模型。
  - 允许通过 4 个点和多媒体信息，配置模型上应该展示的多媒体。
  - TagConfig 添加 visibleFiveMode，允许配置在哪个模态下展示标签。
  - 允许动态更改 Tag css3D mode。

- feat(Object3DHelper):

  - 新增 BoundingBoxHelper，默认关闭
  - 新增配置可以控制三条旋转轴的显示/隐藏
  - 修复一些 bug

- change(PanoTagPlugin):
  - 使用 svelte-carousel 代替 swiper
  - 标签的 tag.data.objectFit 默认值改为 fill

## 2.6.6

- fix(TagPanoPlugin): 修复 config `clickable` 未生效的情况
- change(TagPanoPlugin): 移除文字 word-break: break-all 的 css 属性

## 2.6.5

- fix(TagPanoPlugin): videoTag disable picture-in-picture

## 2.6.4

- feat(GuidePlugin): fix dispose function

## 2.6.3

- feat(PanoTagPlugin): [changelog: 2.0.8](https://github.com/realsee-developer/dnalogel/blob/main/plugins/src/PanoTagPlugin/Archive/CHANGELOG.md)

## 2.6.2

- fix(CruisePlugin): 漫游插件(CruisePlugin)支持设置路线插件(GuideLinePlugin)的贴图等参数。

## 2.6.1

- fix(PanoMeasurePlugin): 修复先 load 数据再 changeMode：View 时，没有应用 panoIndexes 的问题。

## 2.5.4

- fix(PanoTagPlugin): 修复一个比较严重的报错

## 2.5.3

- fix(PanoTagPlugin): 修复模型状态下仍然可以点击标签点的问题

## 2.5.2

- fix(PanoMeasurePlugin): 修复 View 模式 load 数据时没有应用 visiblePanoIndexes。

## 2.5.1

- fix(PanoTagPlugin): tag-container 添加 `transform: translate3d(0,0,0)`，解决 iPhone13 上标签闪烁的问题，以及可能会影响其他 Dom 元素正常渲染的问题。

## 2.5.0

- feat(PanoTagPlugin): 标签插件升级。 [changelog: 1.2.7 -> 2.0.5](https://github.com/realsee-developer/dnalogel/blob/main/plugins/src/PanoTagPlugin/Archive/CHANGELOG.md)

## 2.4.0

- 1. feat(MeasurePlugin): 测量工具支持标尺功能。

## 2.3.8

- 1. feat(PanoTagPlugin): tag dom 添加 `data-content-type={tag.contentType}` 用来标识标签的 contentType

## 2.3.6

- 1. feat(CruisePlugin): load 添加参数 moveToFirstPanoDuration，可指定移动到漫游初始点时的速度。

## 2.3.5

- 1. feat(model-view-plugin): 支持动态 enable 和 disable。

## 2.3.4

- 1. fix(pano-tag-plugin): 修复空格不展示。

## 2.3.2

- 1. feat(pano-measure-plugin): 支持传入自定义 UI 文案

## 2.2.7

- 1. fix(build:libs): 修复 libs 构建产物异常的问题。

## 2.2.6

- 1. feat(entry-door): 入户门插件支持配置 name。

## 2.2.1

- 1. fix(floorplan-radar): 修复在 panoArrived 之后 loadData 时初始展示楼层只会是一层的问题。

## 2.2.0

- 1. refactor: 开发/构建流程优化

## 2.1.1

- 1. feat: PointHelper 和 PointDomHelper 直径改成 0.4m。

## 2.1.0

- 1. feat: CSS3DRenderPlugin API 支持插件 3.0 标准
- 2. refactor: CSS3DRenderPlugin 重构，提供不依赖 Five 的内部类
- 3. fix: CSS3DRenderPlugin 修复在部分情况下，CSS3DDom 最终渲染结果与传入的四个点的朝向可能不一致的情况
- 4. feat: ModelTVVideoPlugin 视频点击行为由 「静音播放/不静音播放」 改为 「播放/暂停」，且在暂停时显示播放按钮
- 5. feat: 导出 Util

## 2.0.4

- 1. 构建工具优化

## 2.0.3

- 1. fix: ModelRoomLabelPlugin 修复在 Five 模型切换动画过程中改变楼层，没有触发刷新的问题。
- 2. fix: ModelRoomLabelPlugin 修复切换楼层时，没有触发立即刷新的问题。
- 3. refactor: ModelViewPlugin 支持配置锁定视角和点位。

## 2.0.2

- 1. feat: FloorplanPlugin 支持动态修改房间面积展示和房间标尺展示
- 2. feat: PanoRulerPlugin 支持动态修改距离展示
- 3. feat: PanoMeasurePlugin 支持动态修改距离展示
- 4. refactor: FloorplanPlugin 允许 `setState` 传入 `Partial<Config>` 而不是 `Config`

## 2.0.0

- 1. fix: `ModelViewPlugin` 修复模型部分材质不展示的问题
- 2. feat: CruisePlugin 漫游插件
- 3. feat: GuideLinePlugin 地面路线引导插件

## 2.0.0-alpha.57

- 1.fix: PanoRulerPlugin 部分数据情况下 element 未 display: none 问题。

## 2.0.0-alpha.56

- 1.fix: PanoRulerPlugin off 全量事件监听。

## 2.0.0-alpha.55

- 1.fix: PanoRulerPlugin 异常 Dom。
- 2.51 ～ 54 版本为测试阶段，主版本无异常变更。

## 2.0.0-alpha.50

- 1.feat: MapviewFloorplanPlugin: 添加大空间户型图插件

## 2.0.0-alpha.49

- 1.fix: ModelTVVideoPlugin 多点位视频播放。

## 2.0.0-alpha.43

- 1.fix: PanoCompassPluginData 导出

## 2.0.0-alpha.42

- 1.fix: PanoCompassPlugin 未完全 dispose 导致切换 VR 重新加载数据出现异常。
- 2.fix: PanoCompassPlugin 在 five 切换全景与模型，入户门与分间指向错位的问题。

## 2.0.0-alpha.41

- 1.feat: 40 版本漏发。

## 2.0.0-alpha.40

- 1.refactor: PanoMeasurePlugin: 添加 View Mode，支持用户仅预览和点击高亮。

## 2.0.0-alpha.39

- 1.feat: 更新 ItemLabelPlugin 策略，仅在全景模态下展示。

## 2.0.0-alpha.38

- 1.feat: 新增 PanoRulerProPlugin。

## 2.0.0-alpha.37

- 1.feat: 参考 plugins/src/floorplan/CHANGELOG.md v1.0.1

## 2.0.0-alpha.36

- 1.style: PanoMeasurePlugin pc 端 UI 优化
- 2.style: PanoMeasurePlugin 准心优化，支持是否展示法向量和小球颜色可配置
- 3.fix: 修复 ResizeObserver 使用。
- 4.refactor: 参考 plugins/src/floorplan/CHANGELOG.md v1.0.0

## 2.0.0-beta.36

- 1.refactor: 户型图相关插件改造，详情参考 floorplan/CHANGELOGE.md。

## 2.0.0-alpha.35

- 1.style: PanoSpatialTagPlugin 标签样式兼容, 标签阴影背景自适应；
- 2.feat: PanoSpatialTagPlugin 开放可见距离配置参数，此功能不保证最佳 UI 效果）;
- 3.refactor: PanoSpatialTagPlugin 更新中心点位置及事件监听。

## 2.0.0-alpha.34

- 1.feat: 新增 PaintBrush 组件，此版本为实验版，请谨慎使用。

## 2.0.0-alpha.33

- 1.fix: Floorplan Plugins Compass & ModelChassisCompassPlugin 修复对 north_rad 为 0 的处理
- 2.fix: panospatialtagplugin 兼容 nextjs 出现的 text 样式问题

## 2.0.0-alpha.32

- 1.feat: PanoRulerPlugin 修改标尺隐藏策略，线长小于 0.3m 隐藏；
- 2.fix: TopViewFloorplanPlugin & ModelFloorplanPlugin wrapper pointer-events: none。

## 2.0.0-alpha.31

- 1.fix: 修复 ?? 语法在 svelte 中不编译的问题。

## 2.0.0-alpha.30

- 1.feat: PanoMeasurePlugin 新增移动端 UI 交互模式
- 2.feat: PanoMeasurePlugin 点线、标签气泡、删除按钮、三维坐标系 UI 交互优化
- 3.feat: PanoMeasurePlugin 优化放大镜功能，支持可拖拽，新增放大镜开放参数
- 4.fix: TopviewFloorplanPlugin 兼容全局 text-align 使用
- 5.fix: 新增 ItemLabelPlugin 内测版

## 2.0.0-alpha.29

- 1.chore: 删除 react 依赖.

## 2.0.0-alpha.28

- 1.chore: 优化打包输出路径.

## 2.0.0-alpha.27

- 1.feat: PanoSpatialTagPlugin 兼容 bvh 为 false 模式.

## 2.0.0-alpha.26

- 1.fix: ModelRoomLabelPlugin - 修复渲染区域大小改变时，标签位置没有更新
- 2.pref: ModelRoomLabelPlugin - 优化渲染逻辑

## 2.0.0-alpha.25

- 1.refactor: 恢复发版

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
- 2.fix: 修复户型图界面切换楼层时，图片与 SVG 渲染有时间差导致闪烁的问题；
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
