import type { Five } from '@realsee/five';
/** 等待 five changeMode 结束 */
export default function changeMode(five: Five, changeModeParams: Parameters<Five['changeMode']>): Promise<boolean>;
