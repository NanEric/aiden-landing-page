
export const HERO_CONTENT = {
  badge: 'System Status: High Fidelity (v4.2.0-stable)',
  title: 'The Pro-Grade Monitoring Engine',
  description: 'Full-stack observability with sub-millisecond telemetry precision.',
  primaryCta: 'Download',
};

export const METRICS = [
  {
    label: 'Total Tokens',
    value: '2.0M',
    change: '↗ 12%',
    changeColor: 'text-emerald-400',
    subtext: 'IN: 1.2M OUT: 0.8M',
    icon: 'data_saver_on'
  },
  {
    label: 'Estimated Cost',
    value: '$42.50',
    change: '↗ 5.2%',
    changeColor: 'text-emerald-400',
    progressBar: true,
    icon: 'payments'
  },
  {
    label: 'Context Window',
    value: '1.0M',
    change: '↘ 2%',
    changeColor: 'text-orange-400',
    subtext: 'LTM Efficiency: 98.4%',
    icon: 'token'
  },
  {
    label: 'Active Days',
    value: '156',
    change: '★ UPTIME',
    changeColor: 'text-primary',
    progressBars: 4,
    icon: 'calendar_today'
  }
];

export const CHART_DATA = {
  value: '1,240,000',
  label: 'Peak Throughput',
  title: '24h Token Consumption Trend',
  subtitle: 'Aggregated throughput across all active endpoints'
};

export const LOG_ENTRIES = [
  { time: '[08:42:01]', type: 'INFO:', message: 'Kernel established secure handshake', color: 'text-emerald-500' },
  { time: '[08:42:05]', type: 'INFO:', message: 'Context window synchronized (1.0M)', color: 'text-emerald-500' },
  { time: '[08:42:10]', type: 'DEBUG:', message: 'Loading vector cache... 100% complete', color: 'text-primary' },
  { time: '[08:42:12]', type: 'WARN:', message: 'Latent spike detected in node-4b', color: 'text-orange-500' },
  { time: '[08:42:15]', type: 'SUCCESS:', message: 'API Request 200 OK - Processed 4.2k tokens', color: 'text-emerald-500', messageColor: 'text-emerald-400' },
  { time: '[08:42:18]', type: 'INFO:', message: 'Automatic garbage collection routine started', color: 'text-emerald-500' },
  { time: '[08:42:22]', type: 'INFO:', message: 'System refresh heartbeat received', color: 'text-emerald-500' },
];

export const FEATURES = [
  {
    title: 'Live Telemetry',
    description: 'Nanosecond-scale event streaming with zero-buffer ingestion for high-traffic nodes.',
    icon: 'query_stats',
    color: 'primary',
    footer: 'Active Tracking'
  },
  {
    title: 'ML Diagnostics',
    description: 'Neural networks identify drift patterns before they impact your service availability.',
    icon: 'analytics',
    color: 'secondary',
    footer: 'Pattern Locked'
  },
  {
    title: 'Global Heartbeat',
    description: 'Distributed probes across 14 global regions ensure 99.999% reliability benchmarks.',
    icon: 'pulse_alert',
    color: 'emerald-400',
    footer: 'Probes Online'
  },
  {
    title: 'Hardened Security',
    description: 'AES-256 encrypted telemetry with automated vaulting and intrusion detection.',
    icon: 'shield_lock',
    color: 'amber-400',
    footer: 'Encrypted Core'
  },
];


