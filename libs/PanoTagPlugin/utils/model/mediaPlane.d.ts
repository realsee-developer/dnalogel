import * as THREE from 'three';
import { Vector3 } from 'three';
import type { FiveDomEvents } from '../../../shared-utils/five/FiveDomEvents';
import type { ObjectFit } from '../../typings';
import type { Overwrite } from '../../../typings/utils.type';
type Src = string;
type VideoTexture = Overwrite<THREE.VideoTexture, {
    image: HTMLVideoElement;
    metadataLoaded: boolean;
}>;
type ImageTexture = Overwrite<THREE.Texture, {
    image: HTMLImageElement;
}>;
declare abstract class MediaPlane extends THREE.Mesh<THREE.BufferGeometry | THREE.Geometry, THREE.MeshBasicMaterial> {
    name: string;
    src?: string;
    objectFit: ObjectFit;
    /** 获取透明度 */
    get opacity(): number;
    /** 设置透明度 (0-1) */
    set opacity(value: number);
    removeFromParent(): this;
    dispose(): void;
}
declare class ImagePlane extends MediaPlane {
    name: string;
    originRatio?: number;
    constructor(imageSrc: string, cornerPoints: Vector3[], params?: {
        objectFit?: ObjectFit;
        resolveZFighting?: boolean;
        opacity?: number;
    });
    changePointsOrParams(props: {
        cornerPoints: Vector3[];
        params?: {
            objectFit?: ObjectFit;
            resolveZFighting?: boolean;
        };
    }): void;
}
declare class VideoPlane extends MediaPlane {
    readonly isVideoPlane = true;
    name: string;
    videoInstance?: HTMLVideoElement;
    onVideoReady?: (videoInstance?: HTMLVideoElement) => void;
    private buttonSrc;
    private videoCoverSrc?;
    private domEvents?;
    private disposers;
    private cornerPoints;
    private videoMesh?;
    private coverMesh?;
    private buttonMesh?;
    private videoTextureMap;
    private ImageTextureMap;
    private initialOpacity;
    constructor(videoSrc: string, cornerPoints: Vector3[], params?: {
        paused?: boolean;
        playButton?: 'withText' | 'withoutText' | string;
        videoCoverSrc?: string;
        objectFit?: ObjectFit;
        videoTextureMap?: Map<Src, VideoTexture>;
        ImageTextureMap?: Map<Src, {
            texture: ImageTexture;
            transparent: boolean;
        }>;
        domEvents?: FiveDomEvents;
        opacity?: number;
    });
    play(muted?: boolean): Promise<void>;
    pause(): void;
    initialRenderHooks(func: (render: () => void) => () => void): void;
    private showPlayUI;
    private showPauseUI;
    private render;
    private addCoverMesh;
    private addVideoMesh;
    private addButtonMesh;
    private getImageTexture;
    private getVideoTexture;
    changePointsOrParams(props: {
        cornerPoints: Vector3[];
        params?: {
            objectFit?: ObjectFit;
        };
    }): Promise<void>;
    private updateAllMeshes;
    private updateVideoMesh;
    private updateCoverMesh;
    private updateButtonMesh;
}
export { ImagePlane, VideoPlane };
