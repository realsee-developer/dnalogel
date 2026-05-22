/**
 * Object3DHelper 渲染顺序常量
 * 数值越大，渲染优先级越高
 */
export declare const RENDER_ORDER: {
    readonly ROTATE_HELPER: 9992;
    readonly MOVE_HELPER: 9993;
    readonly SCALE_HELPER_LINE: 9994;
    readonly SCALE_HELPER_SPHERE: 9995;
    readonly MOVE_HELPER_ARROW: 10001;
    readonly MOVE_HELPER_CENTER: 10002;
    readonly DRAG_GUIDE_LINE: 10003;
    readonly DRAG_FACE_PATCH: 10004;
};
export type RenderOrderType = (typeof RENDER_ORDER)[keyof typeof RENDER_ORDER];
