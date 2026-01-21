
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface VersionInfo {
  tag: string;
  downloads: string;
  lastUpdate: string;
}

// Added missing ThoughtStep interface used in ThoughtStream component
export interface ThoughtStep {
  id: string;
  stage: 'PARSING' | 'SEARCHING' | 'DECIDING' | 'EXECUTING' | 'REPAIRING';
  status: 'active' | 'error' | 'completed';
  timestamp: string;
  content: string;
}

// Added missing TimeSeriesPoint interface used in PerformanceChart component
export interface TimeSeriesPoint {
  time: string;
  tokens: number;
}
