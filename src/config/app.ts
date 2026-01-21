/**
 * 应用配置
 * 集中管理应用级别的配置项
 */

export const APP_CONFIG = {
  /**
   * 应用版本号
   * 从环境变量 NEXT_PUBLIC_APP_VERSION 获取，如果未设置则使用默认值 'v1.0.2'
   */
  version: process.env.NEXT_PUBLIC_APP_VERSION || 'v1.0.2',
  
  /**
   * 获取版权年份
   * @returns 当前年份，格式如 "2023"
   */
  get copyrightYear() {
    return new Date().getFullYear();
  }
};
