import type * as THREE from 'three';
import type { Merge, UnknownArray } from 'type-fest';
import type { ConditionalSimplifyDeep } from 'type-fest/source/conditional-simplify';
import type { IsNull, NonRecursiveType } from 'type-fest/source/internal';
export type SimplifyDeep<T> = ConditionalSimplifyDeep<T, THREE.Color | THREE.Vector3 | Function | Iterable<unknown>, object>;
export type ImportDataToExportData<T> = Merge<JsonData<T>, {
    id: string | number;
}>;
export type JsonVector3<T> = ReplaceDeep<T, THREE.Vector3, number[]>;
export type JsonColor<T> = ReplaceDeep<T, THREE.Color>;
export type JsonData<T> = JsonColor<JsonVector3<T>>;
type SafeType<T, SourceType, TargetType = null> = IsNull<TargetType> extends true ? Exclude<T, SourceType> : TargetType;
export type ReplaceDeep<T, SourceType, TargetType = null> = T extends SourceType ? SafeType<T, SourceType, TargetType> : T extends THREE.Vector3 | THREE.Color | NonRecursiveType ? T : T extends UnknownArray ? T[number] extends SourceType ? SafeType<T[number], SourceType, TargetType>[] : T : T extends object ? {
    [K in keyof T]: T[K] extends SourceType ? SafeType<T[K], SourceType, TargetType> : SourceType extends T[K] ? SafeType<T[K], SourceType, TargetType> : ReplaceDeep<T[K], SourceType, TargetType>;
} : T;
export {};
