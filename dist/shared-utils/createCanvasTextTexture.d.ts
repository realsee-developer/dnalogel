import { CanvasTexture } from 'three';
export default function createCanvasTextTexture(text: string, config?: {
    size?: number;
    fontSize?: number;
    backgroundColor?: string;
    fontColor?: string;
    textAlign?: CanvasTextAlign;
}): CanvasTexture;
