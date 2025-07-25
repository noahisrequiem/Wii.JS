import React from 'react';
import ChannelIcon from './ChannelIcon';
import { Channel, SplashData } from '../types';

interface ChannelGridProps {
  onChannelClick: (channelData: SplashData, event: React.MouseEvent<HTMLDivElement>) => void;
}

const ChannelGrid: React.FC<ChannelGridProps> = ({ onChannelClick }) => {
  // Sample channel data - in a real app this would come from props or state
  const channels: Channel[] = [
    { id: 1, image: 'assets/images/miichannel.jpg', occupied: true },
    { id: 2, image: 'assets/images/miichannel.jpg', occupied: true },
    { id: 3, occupied: false },
    { id: 4, image: 'assets/images/miichannel.jpg', occupied: true },
    { id: 5, occupied: false },
    { id: 6, occupied: false },
    { id: 7, image: 'assets/images/miichannel.jpg', occupied: true },
    { id: 8, occupied: false },
    { id: 9, occupied: false },
    { id: 10, image: 'assets/images/miichannel.jpg', occupied: true },
    { id: 11, occupied: false },
    { id: 12, occupied: false },
  ];

  const renderColumn = (startIndex: number, isFirst: boolean = false): JSX.Element => (
    <div className={`col ${isFirst ? 'first' : ''}`}>
      {channels.slice(startIndex, startIndex + 3).map((channel) => (
        <ChannelIcon
          key={channel.id}
          channel={channel}
          onChannelClick={onChannelClick}
        />
      ))}
    </div>
  );

  return (
    <div className="channels">
      {renderColumn(0, true)}
      {renderColumn(3)}
      {renderColumn(6)}
      {renderColumn(9)}
    </div>
  );
};

export default ChannelGrid;