export const DOWNLOAD_CONFIG = {
  mac: {
    url: 'https://unsplash.com/photos/JUivXruBs2U/download?force=true',
    fileName: 'aiden-mac.dmg'
  },
  windows: {
    url: 'https://unsplash.com/photos/JUivXruBs2U/download?force=true',
    fileName: 'aiden-windows.exe'
  }
};

export type Platform = 'mac' | 'windows';

export const trackDownload = async (platform: Platform) => {
  try {
    const response = await fetch('/api/downloads/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ platform }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(`Download tracked for ${platform}:`, data.stats);
      return data.stats;
    } else {
      console.error('Failed to track download');
    }
  } catch (error) {
    console.error('Error tracking download:', error);
  }
};

// 获取下载统计数据的函数
export const getDownloadStats = async () => {
  try {
    const response = await fetch('/api/downloads/track');
    if (response.ok) {
      return await response.json();
    } else {
      console.error('Failed to fetch download stats');
      return { mac: 0, windows: 0, total: 0 };
    }
  } catch (error) {
    console.error('Error fetching download stats:', error);
    return { mac: 0, windows: 0, total: 0 };
  }
};
