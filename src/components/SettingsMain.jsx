import React, { useState, useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';
import '../styles/settings.css';

const SettingsMain = ({ onViewChange }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { playHover } = useAudio();

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 300);
  }, []);

  const handleBackClick = () => {
    onViewChange('menu', 'fade');
  };

  const handleLicensesClick = () => {
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