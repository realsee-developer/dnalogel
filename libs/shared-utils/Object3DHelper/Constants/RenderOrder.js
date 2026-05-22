const E = {
  // 基础几何体（如Box）的渲染顺序通常在 0-100 之间
  // 所以Helper的渲染顺序需要远大于这个范围
  // 旋转辅助器 - 最低优先级
  ROTATE_HELPER: 9992,
  // 移动辅助器
  MOVE_HELPER: 9993,
  // 缩放辅助器的连接线
  SCALE_HELPER_LINE: 9994,
  // 缩放辅助器的球体
  SCALE_HELPER_SPHERE: 9995,
  // 移动辅助器的箭头 - 确保高于所有透明对象
  MOVE_HELPER_ARROW: 10001,
  // 移动辅助器的中心手柄 - 应该盖住箭头，优先响应事件
  MOVE_HELPER_CENTER: 10002,
  // 拖拽引导线
  DRAG_GUIDE_LINE: 10003,
  // 拖拽面片 - 最高优先级
  DRAG_FACE_PATCH: 10004
};
export {
  E as RENDER_ORDER
};
