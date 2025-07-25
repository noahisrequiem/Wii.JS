import React, { useEffect, useRef } from 'react';

const AudioManager = ({ currentView, previousView }) => {
  const startupRef = useRef(null);
  const bgMusicRef = useRef(null);
  const hoverRef = useRef(null);
  const selectRef = useRef(null);
  const zipRef = useRef(null);
  const backRef = useRef(null);

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

  return (
    <div className="sfx" style={{ display: 'none' }}>
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