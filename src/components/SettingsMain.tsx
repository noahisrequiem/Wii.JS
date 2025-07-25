import React, { useState, useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';
import { ViewType, TransitionType } from '../types';
import '../styles/settings.css';

interface SettingsMainProps {
  onViewChange: (view: ViewType, transition?: TransitionType) => void;
}

const SettingsMain: React.FC<SettingsMainProps> = ({ onViewChange }) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const { playHover } = useAudio();

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 300);
  }, []);

  const handleBackClick = (): void => {
    onViewChange('menu', 'fade');
  };

  const handleLicensesClick = (): void => {
    onViewChange('licenses-temp', 'fade');
  };

  return (
    <div className="settings settings-main">
      <div className={`settings-header ${isAnimated ? 'animate' : ''}`} />

      <div className="settings-content">
        <div className={`settings-navcontainer ${isAnimated ? 'animate' : ''}`}>
          <div className="settings-navbtn info left">
            <div className="icon"></div>
            <span className="label">Info/Credits</span>
          </div>
          <div 
            className="settings-navbtn settings right"
            onMouseOver={playHover}
            onClick={handleLicensesClick}
          >
            <div className="icon"></div>
            <span className="label">Wii Settings</span>
          </div>
        </div>
      </div>

      <div className={`settings-footer ${isAnimated ? 'animate' : ''}`}>
        <div 
          className="back"
          onClick={handleBackClick}
        />
      </div>
    </div>
  );
};

export default SettingsMain;