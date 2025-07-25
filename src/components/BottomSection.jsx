import React from 'react';
import { useAudio } from '../hooks/useAudio';

const BottomSection = ({ currentDate, onViewChange }) => {
  const { playHover } = useAudio();

  const handleSettingsClick = () => {
    playHover();
    onViewChange('settings-main', 'fade');
  };

  const handleMailClick = () => {
    playHover();
  };

  return (
    <div className="bottom-section">
      <div className="bottom-title"></div>

      <div className="left-button-container">
        <div className="left-button"></div>
        <div 
          className="wii-button corner-button"
          onMouseOver={playHover}
          onClick={handleSettingsClick}
        />
      </div>

      <div className="date">
        <span>{currentDate}</span>
      </div>

      <div className="right-button-container">
        <div className="right-button"></div>
        <div 
          className="mail-button corner-button"
          onMouseOver={playHover}
          onClick={handleMailClick}
        />
      </div>
    </div>
  );
};

export default BottomSection;