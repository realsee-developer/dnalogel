export default function createResizeObserver(element: Element, resizeHandler: (width: number, height: number) => any, fireImmediately?: boolean): {
    observe: () => void;
    unobserve: () => void;
};
