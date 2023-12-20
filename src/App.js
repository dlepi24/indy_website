// App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/ActivitiesSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
};

export default App;
