/**
 * 视频URL处理辅助函数
 * 用于处理YouTube和Vimeo视频URL的解析和格式化
 */
/**
 * 从YouTube URL中提取视频ID
 * @param url YouTube视频URL
 * @returns 视频ID或null（如果不是有效的YouTube URL）
 */
export declare function getYouTubeId(url: string): string;
/**
 * 从Vimeo URL中提取视频ID
 * @param url Vimeo视频URL
 * @returns 视频ID或null（如果不是有效的Vimeo URL）
 */
export declare function getVimeoId(url: string): string;
/**
 * 判断URL是否为YouTube视频链接
 * @param url 要检查的URL
 * @returns 是否为YouTube链接
 */
export declare function isYouTube(url: string): boolean;
/**
 * 判断URL是否为Vimeo视频链接
 * @param url 要检查的URL
 * @returns 是否为Vimeo链接
 */
export declare function isVimeo(url: string): boolean;
/**
 * 格式化视频URL为嵌入格式
 * @param url 原始视频URL
 * @param config 配置选项，如自动播放、开始时间等
 * @returns 格式化后的嵌入URL
 */
export declare function formatVideo(url: string, config?: {
    start?: number;
    autoplay?: 0 | 1;
}): string;
/**
 * 获取视频缩略图URL
 * @param url 视频URL
 * @param type 视频类型 ('youtube' | 'vimeo')
 * @returns 缩略图URL或null
 */
export declare function getVideoThumbnail(url: string, type?: 'youtube' | 'vimeo'): string;
