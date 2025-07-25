import React from 'react';
import { useAudio } from '../hooks/useAudio';
import { Channel, SplashData } from '../types';

interface ChannelIconProps {
  channel: Channel;
  onChannelClick: (channelData: SplashData, event: React.MouseEvent<HTMLDivElement>) => void;
}

const ChannelIcon: React.FC<ChannelIconProps> = ({ channel, onChannelClick }) => {
  const { playHover, playZip } = useAudio();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (channel.occupied) {
      playZip();
      onChannelClick(channel, event);
    }
  };

  const handleMouseOver = (): void => {
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