import type { Five } from '@realsee/five';
import { Subscribe, type EventMap } from '../Subscribe';
export declare class BaseUtil<Event extends EventMap = {}> extends Subscribe<Event> {
    five: Five;
    constructor(five: Five);
}
