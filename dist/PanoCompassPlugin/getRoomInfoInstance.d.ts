import type { FloorplanServerRoomItem } from '../floorplan/typings/floorplanServerData';
export declare function getRoomInfoInstance(): {
    appendTo(element: Element): void;
    dispose(): void;
    setRoom(room: FloorplanServerRoomItem): void;
    show(): void;
    hide(): void;
};
