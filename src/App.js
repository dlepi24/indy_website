// App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/ActivitiesSection';
import ChatBox from './components/ChatBox';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <ActivitiesSection />
      <ChatBox />
    </div>
  );
};

export default App;
