import React from 'react';
import { useAudio } from '../hooks/useAudio';

const ChannelIcon = ({ channel, onChannelClick }) => {
  const { playHover, playZip } = useAudio();

  const handleClick = (event) => {
    if (channel.occupied) {
      playZip();
      onChannelClick(channel, event);
    }
  };

  const handleMouseOver = () => {
    if (channel.occupied) {
      playHover();
    }
  };

  return (
    <div className={`channel-icon ${channel.occupied ? 'occupied' : 'blank'}`}>
      {channel.occupied && channel.image && (
        <img src={channel.image} alt="Channel" />
      )}
      <div 
        className="hover" 
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        data-img={channel.image}
      />
    </div>
  );
};

export default ChannelIcon;