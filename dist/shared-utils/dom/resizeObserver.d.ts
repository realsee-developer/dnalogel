export declare function resizeObserver(func: () => void, element?: HTMLElement): {
    observe: () => void;
    unobserve: () => void;
};
