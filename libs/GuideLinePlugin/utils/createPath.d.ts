import type { Work } from '@realsee/five';
import type { CatmullRomCurve3, ExtraRouteData } from '../typing';
export declare function createPath(panoIndexList: number[], work: Work, options?: Omit<CatmullRomCurve3, 'type' | 'points'> & ExtraRouteData): CatmullRomCurve3[];
