export interface Room {
    id: string;
    name: string;
    localName: string;
    area: number;
}
export interface Rooms {
    [key: string]: Room;
}
export type RoomObservers = string[];
export interface RoomInfo {
    rooms: Rooms;
    observers: RoomObservers;
}
export interface RoomRules {
    [key: string]: {
        x: number;
        z: number;
        observers: number[];
    }[];
}
