import type { Five } from '@realsee/five';
import type { FloorplanData, FloorplanExtraObject, FloorplanExtraObject3D } from '../typings/floorplanData';
import type { FloorplanServerData } from '../typings/floorplanServerData';
export default function formatData(data: FloorplanServerData): Promise<FloorplanData>;
export declare function formatExtraObjects(data: FloorplanExtraObject3D[], five: Five, floorplanData: FloorplanData): FloorplanExtraObject[];
