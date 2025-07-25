import { useCallback } from 'react';
import { AudioHook } from '../types';

export const useAudio = (): AudioHook => {
  const playAudio = useCallback((audioId: string): void => {
    const audio = document.getElementById(audioId) as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(console.warn);
    }
  }, []);

  const playHover = useCallback((): void => {
    playAudio('hover');
  }, [playAudio]);

  const playSelect = useCallback((): void => {
    playAudio('select');
  }, [playAudio]);

  const playZip = useCallback((): void => {
    playAudio('zip');
    playAudio('select');
    const bgMusic = document.getElementById('bg-music') as HTMLAudioElement;
    if (bgMusic) {
      bgMusic.pause();
    }
  }, [playAudio]);

  const playBack = useCallback((): void => {
    playAudio('back');
  }, [playAudio]);

  return {
    playHover,
    playSelect,
    playZip,
    playBack,
    playAudio
  };
};