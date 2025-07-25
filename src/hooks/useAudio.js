import { useCallback } from 'react';

export const useAudio = () => {
  const playAudio = useCallback((audioId) => {
    const audio = document.getElementById(audioId);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(console.warn);
    }
  }, []);

  const playHover = useCallback(() => {
    playAudio('hover');
  }, [playAudio]);

  const playSelect = useCallback(() => {
    playAudio('select');
  }, [playAudio]);

  const playZip = useCallback(() => {
    playAudio('zip');
    playAudio('select');
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
      bgMusic.pause();
    }
  }, [playAudio]);

  const playBack = useCallback(() => {
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