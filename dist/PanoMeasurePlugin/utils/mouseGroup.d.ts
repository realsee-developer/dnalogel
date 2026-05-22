import { Group } from 'three';
export interface MouseGroupParameter {
    isMobile?: boolean;
    useNormalVector?: boolean;
    ballColor?: number;
}
export declare function getMouseGroup(params: MouseGroupParameter): Group;
