# CHANGELOG

## [v1.0.0]

### BugFix
- 修复户型图展示时，轻微滑动模型后，模型可能与户型图错位的问题。
- 修复户型图在 iOS & MacOS 系统上，存在某些房间渲染不出来的情况。
- 修复户型图房间材质 UI。
- 修复带看过程中户型图放大和位移操作不能同步的问题。
- 修复 attachedTo 不为 BOUNDING_CENTER 时，拖动户型图过程中户型图与模型有位置偏差。

---

### Feature
#### 优化房间标间展示交互：
- 当房屋标签与当前房间边缘发生碰撞时，隐藏房屋标签。
- 放大户型图时，重新计算碰撞关系。
- 鼠标 hover 房间时，展示当前房间的标签。

#### 插件标准化
- ***public member property*** `state`，包括 `state.visible` 和 `state.enabled`。
- ***public member function*** `show`，展示插件 UI。
- ***public member function*** `hide`，隐藏插件 UI。
- ***public member function*** `enable`，开启插件。
- ***public member function*** `disable`，禁用插件。
- ***public member function*** `setState`，允许用户动态更改插件 State。
- ***hook*** `show: (event: ViewEvent) => void`，visible 从 false 到 true 的回调
- ***hook*** `hide: (event: ViewEvent) => void`，visible 从 true 到 false 的回调
- ***hook*** `enable: (event: { userAction: boolean }) => void`，enabled 从 false 到 true 的回调
- ***hook*** `disable: (event: { userAction: boolean }) => void`，enabled 从 true 到 false 的回调

---
---