import React from 'react';

interface BlackTransitionProps {
  isActive: boolean;
}

const BlackTransition: React.FC<BlackTransitionProps> = ({ isActive }) => {
  return (
    <div className={`black ${isActive ? 'animate' : ''}`} />
  );
};

export default BlackTransition;