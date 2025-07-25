import React from 'react';

const BlackTransition = ({ isActive }) => {
  return (
    <div className={`black ${isActive ? 'animate' : ''}`} />
  );
};

export default BlackTransition;