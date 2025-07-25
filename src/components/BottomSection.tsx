import React from 'react';
import { useAudio } from '../hooks/useAudio';
import { ViewType, TransitionType } from '../types';

interface BottomSectionProps {
  currentDate: string;
  onViewChange: (view: ViewType, transition?: TransitionType) => void;
}

const BottomSection: React.FC<BottomSectionProps> = ({ currentDate, onViewChange }) => {
  const { playHover } = useAudio();

  const handleSettingsClick = (): void => {
    playHover();
    onViewChange('settings-main', 'fade');
  };

  const handleMailClick = (): void => {
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