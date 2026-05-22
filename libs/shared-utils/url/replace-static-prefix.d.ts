/**
 * 简单的URL转换器
 */
/**
 * 替换静态资源前缀（仅处理绝对URL）
 * 能够替换资源前缀域名：
 * - 绝对路径：替换域名部分
 * - 相对路径：保持原样不进行替换
 * - 无效URL：返回原始URL
 */
export declare function replaceStaticPrefix(prefix: string, url: string): string;
