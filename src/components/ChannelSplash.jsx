import React, { useState, useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';

const ChannelSplash = ({ splashData, onBackToMenu }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { playBack, playSelect } = useAudio();

  useEffect(() => {
    // Trigger splash animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleMenuClick = () => {
    playBack();
    setIsVisible(false);
    setTimeout(() => {
      onBackToMenu();
    }, 500);
  };

  const handleStartClick = () => {
    playSelect();
    // In a real implementation, this would launch the channel
  };

  const splashStyle = splashData?.transformOrigin ? {
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
            onMouseOver={() => useAudio().playHover()}
            onClick={handleMenuClick}
          >
            Wii Menu
          </button>
          <button 
            className="btn"
            onMouseOver={() => useAudio().playHover()}
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