import React, { useEffect, useRef } from 'react';
import { ViewType } from '../types';

interface AudioManagerProps {
  currentView: ViewType;
  previousView: ViewType;
}

const AudioManager: React.FC<AudioManagerProps> = ({ currentView, previousView }) => {
  const startupRef = useRef<HTMLAudioElement>(null);
  const bgMusicRef = useRef<HTMLAudioElement>(null);
  const hoverRef = useRef<HTMLAudioElement>(null);
  const selectRef = useRef<HTMLAudioElement>(null);
  const zipRef = useRef<HTMLAudioElement>(null);
  const backRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Play startup sound and background music when entering menu for the first time
    if (currentView === 'menu' && previousView === 'default') {
      if (startupRef.current) {
        startupRef.current.play().catch(console.warn);
      }
      setTimeout(() => {
        if (bgMusicRef.current) {
          bgMusicRef.current.play().catch(console.warn);
        }
      }, 1000);
    } else if (currentView === 'menu' && previousView !== 'default') {
      // Resume background music when returning to menu
      if (bgMusicRef.current) {
        bgMusicRef.current.play().catch(console.warn);
      }
    } else {
      // Pause background music when leaving menu
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
      }
    }
  }, [currentView, previousView]);

  const containerStyle: React.CSSProperties = { display: 'none' };

  return (
    <div className="sfx" style={containerStyle}>
      <audio ref={startupRef} id="startup" src="assets/audio/startup.mp3" />
      <audio ref={bgMusicRef} id="bg-music" src="assets/audio/bg-music.mp3" loop />
      <audio ref={hoverRef} id="hover" src="assets/audio/button-hover.mp3" />
      <audio ref={selectRef} id="select" src="assets/audio/button-select.mp3" />
      <audio ref={zipRef} id="zip" src="assets/audio/zip.mp3" />
      <audio ref={backRef} id="back" src="assets/audio/back.mp3" />
    </div>
  );
};

export default AudioManager;