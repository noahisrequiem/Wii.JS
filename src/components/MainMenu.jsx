import React, { useState, useEffect } from 'react';
import ChannelGrid from './ChannelGrid';
import BottomSection from './BottomSection';
import '../styles/menu.css';

const MainMenu = ({ onChannelClick, onViewChange }) => {
  const [isChannelSplash, setIsChannelSplash] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

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

  const handleChannelClick = (channelData, event) => {
    const centerX = event.currentTarget.offsetLeft + event.currentTarget.offsetWidth / 2;
    const centerY = event.currentTarget.offsetTop + event.currentTarget.offsetHeight / 2;
    
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