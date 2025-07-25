import React, { useState, useEffect } from 'react';
import MainMenu from './components/MainMenu';
import SettingsMain from './components/SettingsMain';
import LicensesTemp from './components/LicensesTemp';
import ChannelSplash from './components/ChannelSplash';
import ScreenMessage from './components/ScreenMessage';
import AudioManager from './components/AudioManager';
import BlackTransition from './components/BlackTransition';
import './styles/universal.css';

function App() {
  const [currentView, setCurrentView] = useState('menu');
  const [previousView, setPreviousView] = useState('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [splashData, setSplashData] = useState(null);
  const [showScreenMessage, setShowScreenMessage] = useState(false);

  // Check screen compatibility on mount
  useEffect(() => {
    const checkScreenCompatibility = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (height <= 469 || width <= 1220 || (width === 1280 && height === 1024)) {
        setShowScreenMessage(true);
      }
    };

    checkScreenCompatibility();
    window.addEventListener('resize', checkScreenCompatibility);
    
    return () => window.removeEventListener('resize', checkScreenCompatibility);
  }, []);

  const changeView = (newView, transition = 'fade') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setPreviousView(currentView);
    
    if (transition === 'fade') {
      setTimeout(() => {
        setCurrentView(newView);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300);
    } else {
      setCurrentView(newView);
      setIsTransitioning(false);
    }
  };

  const handleChannelClick = (channelData) => {
    setSplashData(channelData);
    setCurrentView('channel-splash');
  };

  const handleBackToMenu = () => {
    setSplashData(null);
    setCurrentView('menu');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'menu':
        return <MainMenu onChannelClick={handleChannelClick} onViewChange={changeView} />;
      case 'settings-main':
        return <SettingsMain onViewChange={changeView} />;
      case 'licenses-temp':
        return <LicensesTemp onViewChange={changeView} />;
      case 'channel-splash':
        return <ChannelSplash splashData={splashData} onBackToMenu={handleBackToMenu} />;
      default:
        return <MainMenu onChannelClick={handleChannelClick} onViewChange={changeView} />;
    }
  };

  return (
    <div className="app">
      {renderCurrentView()}
      <BlackTransition isActive={isTransitioning} />
      <ScreenMessage 
        show={showScreenMessage} 
        onClose={() => setShowScreenMessage(false)} 
      />
      <AudioManager 
        currentView={currentView} 
        previousView={previousView} 
      />
    </div>
  );
}

export default App;