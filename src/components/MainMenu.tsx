import React, { useState, useEffect } from 'react';
import ChannelGrid from './ChannelGrid';
import BottomSection from './BottomSection';
import { ViewType, TransitionType, SplashData } from '../types';
import '../styles/menu.css';

interface MainMenuProps {
  onChannelClick: (channelData: SplashData) => void;
  onViewChange: (view: ViewType, transition?: TransitionType) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onChannelClick, onViewChange }) => {
  const [isChannelSplash, setIsChannelSplash] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    // Set current date
    const monthNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date();
    const weekday = monthNames[d.getDay()];
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const date = `${weekday} ${month}/${day}`;
    setCurrentDate(date);
  }, []);

  const handleChannelClick = (channelData: SplashData, event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.currentTarget;
    const centerX = target.offsetLeft + target.offsetWidth / 2;
    const centerY = target.offsetTop + target.offsetHeight / 2;
    
    setIsChannelSplash(true);
    
    // Pass channel data with transform origin
    onChannelClick({
      ...channelData,
      transformOrigin: `${centerX}px ${centerY}px 0px`
    });
  };

  return (
    <div className={`main-menu ${isChannelSplash ? 'channel-splash' : ''}`}>
      <div className="top-section">
        <ChannelGrid onChannelClick={handleChannelClick} />
      </div>
      <BottomSection 
        currentDate={currentDate} 
        onViewChange={onViewChange}
      />
    </div>
  );
};

export default MainMenu;