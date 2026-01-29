import { useState, useEffect } from 'react';

interface DownloadStats {
  mac: number;
  windows: number;
}

export function useDownloadStats() {
  const [stats, setStats] = useState<DownloadStats>({ mac: 0, windows: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/downloads/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch download stats');
        }
        const data = await response.json();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching download stats:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
}
