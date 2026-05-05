'use client';

import { useEffect, useState } from 'react';
import { Eye } from '@phosphor-icons/react';

type VisitStats = {
  totalUV: string;
  dailyUV: string;
}

export default function VisitData() {
  const [stats, setStats] = useState<VisitStats>({
    totalUV: '-',
    dailyUV: '-',
  });

  useEffect(() => {
    // 每次会话只计一次
    if (typeof window !== 'undefined' && !sessionStorage.getItem('visit-counted')) {
      sessionStorage.setItem('visit-counted', '1');
      fetch('/api/visit-stats', { method: 'POST' }).catch(() => {});
    }

    const fetchVisitStats = async () => {
      try {
        const response = await fetch('/api/visit-stats');
        const data = await response.json();
        setStats(data);
      } catch {
        // ignore
      }
    };

    fetchVisitStats();
    const interval = setInterval(fetchVisitStats, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-2 text-sm text-gray-500 mt-2">
      <Eye size={16} weight="duotone" />
      总访问量: {stats.totalUV} / 今日访问量: {stats.dailyUV}
    </div>
  );
}
