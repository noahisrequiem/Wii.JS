import React, { useState, useEffect } from 'react';
import MainMenu from './components/MainMenu';
import SettingsMain from './components/SettingsMain';
import LicensesTemp from './components/LicensesTemp';
import ChannelSplash from './components/ChannelSplash';
import ScreenMessage from './components/ScreenMessage';
import AudioManager from './components/AudioManager';
import BlackTransition from './components/BlackTransition';
import { ViewType, TransitionType, SplashData } from './types';
import './styles/universal.css';

function App(): JSX.Element {
  const [currentView, setCurrentView] = useState<ViewType>('menu');
  const [previousView, setPreviousView] = useState<ViewType>('default');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [splashData, setSplashData] = useState<SplashData | null>(null);
  const [showScreenMessage, setShowScreenMessage] = useState<boolean>(false);

  // Check screen compatibility on mount
  useEffect(() => {
    const checkScreenCompatibility = (): void => {
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

  const changeView = (newView: ViewType, transition: TransitionType = 'fade'): void => {
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

  const handleChannelClick = (channelData: SplashData): void => {
    setSplashData(channelData);
    setCurrentView('channel-splash');
  };

  const handleBackToMenu = (): void => {
    setSplashData(null);
    setCurrentView('menu');
  };

  const renderCurrentView = (): JSX.Element => {
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