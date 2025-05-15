import { Magnifier } from '../../shared-utils';
export default Magnifier;
export interface MagnifierParameter {
    width?: number;
    height?: number;
    scale?: number;
    /** 允许拖动放大镜 */
    dragEnabled?: boolean;
    /** renderWithPoint 时，是否应该自动更新放大镜的位置 */
    autoFixPCPosition?: boolean;
    /** 放大镜初始位置应该设置在容器的哪个位置 */
    initialPosition?: {
        left: string;
        top: string;
    };
}
export interface MagnifierState {
    enabled: boolean;
}
