interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Line3D {
    start: Point3D;
    end: Point3D;
}
/**
 * @description 判断线段是否相交
 * @todo ai写的一些变量名起的比较怪，懒得改了
 */
export declare function isIntersecting(line1: Line3D, line2: Line3D | Line3D[]): boolean;
export {};
