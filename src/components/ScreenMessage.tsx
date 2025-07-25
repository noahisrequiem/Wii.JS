import React from 'react';

interface ScreenMessageProps {
  show: boolean;
  onClose: () => void;
}

const ScreenMessage: React.FC<ScreenMessageProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="screen-message" onClick={onClose}>
      <p>
        It has been detected that your screen resolution may not be compatible with this project. 
        This project is very experimental and as a result, does not scale to some smaller screens. 
        If you're alright with the layout looking a little off, click anywhere to close this message.
      </p>
    </div>
  );
};

export default ScreenMessage;