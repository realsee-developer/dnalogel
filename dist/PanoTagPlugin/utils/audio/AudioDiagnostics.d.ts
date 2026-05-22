/**
 * 音频诊断工具
 * 用于检测和诊断音频播放问题
 */
export declare class AudioDiagnostics {
    /**
     * 检查浏览器音频支持
     */
    static checkBrowserSupport(): {
        browser: string;
        version: string;
        supportedFormats: string[];
        warnings: string[];
    };
    /**
     * 测试音频URL的可访问性
     */
    static testAudioUrl(url: string): Promise<{
        accessible: boolean;
        status?: number;
        error?: string;
        contentType?: string;
        contentLength?: number;
    }>;
    /**
     * 尝试创建和测试音频元素
     */
    static testAudioElement(url: string): Promise<{
        success: boolean;
        error?: string;
        canPlay?: string;
        duration?: number;
        networkState?: number;
        readyState?: number;
    }>;
    /**
     * 完整的音频诊断
     */
    static diagnoseAudio(url: string): Promise<void>;
    private static getNetworkStateDescription;
    private static getReadyStateDescription;
}
