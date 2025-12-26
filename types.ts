
export enum AppStatus {
  WORKING = 'WORKING',
  LIVE = 'LIVE',
  OFFLINE = 'OFFLINE'
}

export interface VideoCard {
  id: string;
  title: string;
  views: string;
  isLive: boolean;
  timestamp: string;
  imageUrl: string;
}

export interface AIInsight {
  id: string;
  title: string;
  match: number;
  location: string;
  comment: string;
  type: 'crop' | 'livestock';
  imageUrl: string;
}

export interface QuickAction {
  id: string;
  icon: string;
  label: string;
}
