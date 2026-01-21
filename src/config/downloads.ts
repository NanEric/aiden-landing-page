export const DOWNLOAD_CONFIG = {
  mac: {
    url: process.env.NEXT_PUBLIC_DOWNLOAD_URL_MAC || 'https://unsplash.com/photos/JUivXruBs2U/download?force=true',
    fileName: 'aiden-mac.dmg'
  },
  windows: {
    url: process.env.NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS || 'https://unsplash.com/photos/JUivXruBs2U/download?force=true',
    fileName: 'aiden-windows.exe'
  }
};

export type Platform = 'mac' | 'windows';

export const trackDownload = (platform: Platform) => {
  // 这里可以添加下载跟踪逻辑
  console.log(`Download started for ${platform}`);
  // 可以在这里添加 Google Analytics 或其他分析工具的事件
};
