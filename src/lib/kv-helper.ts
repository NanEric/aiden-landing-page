/**
 * KV 键名辅助函数
 * 在非生产环境中为所有 KV 键添加 "dev:" 前缀
 */

/**
 * 获取带环境前缀的 KV 键名
 * @param key 原始键名
 * @returns 带前缀的键名
 */
export function getKVKey(key: string): string {
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? key : `dev:${key}`;
}
