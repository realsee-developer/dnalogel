interface RenderData {
    [key: string]: string;
}
export default function render(template: string, data: RenderData): string;
export {};
