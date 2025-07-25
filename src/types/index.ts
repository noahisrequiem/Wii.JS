export interface Channel {
  id: number;
  image?: string;
  occupied: boolean;
  transformOrigin?: string;
}

export interface SplashData extends Channel {
  transformOrigin?: string;
}

export type ViewType = 'menu' | 'settings-main' | 'licenses-temp' | 'channel-splash' | 'default';

export type TransitionType = 'fade' | 'none';

export interface AudioHook {
  playHover: () => void;
  playSelect: () => void;
  playZip: () => void;
  playBack: () => void;
  playAudio: (audioId: string) => void;
}