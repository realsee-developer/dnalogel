/**
 * 字号尺寸断点配置
 */
export declare const FONT_SIZE_BREAKPOINTS: {
    readonly sm: {
        readonly min: 0;
        readonly max: 499;
    };
    readonly md: {
        readonly min: 500;
        readonly max: 929;
    };
    readonly lg: {
        readonly min: 930;
        readonly max: 1365;
    };
    readonly xl: {
        readonly min: 1366;
        readonly max: 2549;
    };
    readonly xxl: {
        readonly min: 2550;
        readonly max: number;
    };
};
/**
 * 字号尺寸类型
 */
export type FontSizeType = keyof typeof FONT_SIZE_BREAKPOINTS;
/**
 * 字号映射配置
 */
export declare const FONT_SIZE_MAP: {
    readonly sm: {
        readonly name: 10;
        readonly area: 8;
        readonly padding: {
            readonly room: readonly [6, 3];
            readonly guide: readonly [0, 0];
            readonly distance: readonly [4, 2];
        };
        readonly lineHeight: 14;
        readonly default: 10;
    };
    readonly md: {
        readonly name: 10;
        readonly area: 8;
        readonly padding: {
            readonly room: readonly [6, 3];
            readonly guide: readonly [0, 0];
            readonly distance: readonly [4, 2];
        };
        readonly lineHeight: 14;
        readonly default: 10;
    };
    readonly lg: {
        readonly name: 12;
        readonly area: 10;
        readonly padding: {
            readonly room: readonly [8, 4];
            readonly guide: readonly [0, 3];
            readonly distance: readonly [6, 3];
        };
        readonly lineHeight: 16;
        readonly default: 12;
    };
    readonly xl: {
        readonly name: 14;
        readonly area: 12;
        readonly padding: {
            readonly room: readonly [8, 4];
            readonly guide: readonly [0, 3];
            readonly distance: readonly [6, 3];
        };
        readonly lineHeight: 20;
        readonly default: 14;
    };
    readonly xxl: {
        readonly name: 14;
        readonly area: 12;
        readonly padding: {
            readonly room: readonly [8, 4];
            readonly guide: readonly [0, 3];
            readonly distance: readonly [6, 3];
        };
        readonly lineHeight: 20;
        readonly default: 14;
    };
};
/**
 * 根据屏幕宽度判断字号尺寸级别
 * @param screenWidth 屏幕宽度（像素）
 * @returns 字号尺寸级别：'sm' | 'md' | 'lg' | 'xl' | 'xxl'
 */
export declare const getFontSizeByScreenWidth: (screenWidth: number) => FontSizeType;
/**
 * 获取当前窗口的字号尺寸级别
 * @returns 当前窗口对应的字号尺寸级别
 */
export declare const getCurrentFontSize: () => FontSizeType;
/**
 * 全局单例响应式字体大小管理器
 */
declare class GlobalFontSizeManager {
    private fontSize;
    private subscribers;
    private debounceTimer;
    private isInitialized;
    constructor();
    private initialize;
    private handleResize;
    private notifySubscribers;
    subscribe(callback: (fontSize: FontSizeType) => void): () => void;
    get current(): "md" | "sm" | "lg" | "xl" | "xxl";
    destroy(): void;
}
/**
 * 获取全局单例的响应式字号管理器
 * 可用于 TypeScript 类、函数式组件和 Svelte 组件
 * @returns 全局响应式字号管理器（具有 subscribe 方法，兼容 Svelte store 接口）
 */
export declare const getGlobalResponsiveFontSize: () => "md" | GlobalFontSizeManager;
/**
 * 根据字号类型获取字号配置对象
 * @param fontSizeType 字号尺寸类型
 * @returns 字号配置对象，包含 default 属性
 */
export declare const getFontSize: (fontSizeType: FontSizeType) => {
    readonly name: 10;
    readonly area: 8;
    readonly padding: {
        readonly room: readonly [6, 3];
        readonly guide: readonly [0, 0];
        readonly distance: readonly [4, 2];
    };
    readonly lineHeight: 14;
    readonly default: 10;
} | {
    readonly name: 10;
    readonly area: 8;
    readonly padding: {
        readonly room: readonly [6, 3];
        readonly guide: readonly [0, 0];
        readonly distance: readonly [4, 2];
    };
    readonly lineHeight: 14;
    readonly default: 10;
} | {
    readonly name: 12;
    readonly area: 10;
    readonly padding: {
        readonly room: readonly [8, 4];
        readonly guide: readonly [0, 3];
        readonly distance: readonly [6, 3];
    };
    readonly lineHeight: 16;
    readonly default: 12;
} | {
    readonly name: 14;
    readonly area: 12;
    readonly padding: {
        readonly room: readonly [8, 4];
        readonly guide: readonly [0, 3];
        readonly distance: readonly [6, 3];
    };
    readonly lineHeight: 20;
    readonly default: 14;
} | {
    readonly name: 14;
    readonly area: 12;
    readonly padding: {
        readonly room: readonly [8, 4];
        readonly guide: readonly [0, 3];
        readonly distance: readonly [6, 3];
    };
    readonly lineHeight: 20;
    readonly default: 14;
};
/**
 * 根据字号类型获取默认字号数值
 * @param fontSizeType 字号尺寸类型
 * @returns 默认字号数值（像素）
 */
export declare const getFontSizeValue: (fontSizeType: FontSizeType) => number;
export {};
