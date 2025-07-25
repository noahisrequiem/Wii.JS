import React, { useState, useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';
import { SplashData } from '../types';

interface ChannelSplashProps {
  splashData: SplashData | null;
  onBackToMenu: () => void;
}

const ChannelSplash: React.FC<ChannelSplashProps> = ({ splashData, onBackToMenu }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { playBack, playSelect, playHover } = useAudio();

  useEffect(() => {
    // Trigger splash animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleMenuClick = (): void => {
    playBack();
    setIsVisible(false);
    setTimeout(() => {
      onBackToMenu();
    }, 500);
  };

  const handleStartClick = (): void => {
    playSelect();
    // In a real implementation, this would launch the channel
  };

  const splashStyle: React.CSSProperties = splashData?.transformOrigin ? {
    transformOrigin: splashData.transformOrigin,
    backgroundImage: splashData.image ? `url(${splashData.image})` : 'none'
  } : {};

  return (
    <>
      <div 
        className={`splash-screen ${isVisible ? 'visible' : ''}`}
        style={splashStyle}
      />
      
      <div className={`splash-bar ${isVisible ? 'visible' : ''}`}>
        <div className="splash-buttons">
          <button 
            className="btn menu-btn"
            onMouseOver={playHover}
            onClick={handleMenuClick}
          >
            Wii Menu
          </button>
          <button 
            className="btn"
            onMouseOver={playHover}
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
      </div>

      {isVisible && (
        <>
          <div className="border-topleft border"></div>
          <div className="border-topright border"></div>
          <div className="border-bottomleft border"></div>
          <div className="border-bottomright border"></div>
        </>
      )}
    </>
  );
};

export default ChannelSplash;