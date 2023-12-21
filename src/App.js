// App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/ActivitiesSection';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox'; // Import the ChatBox component
import './App.css';

const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <ActivitiesSection />
      <ChatBox /> {/* Add the ChatBox component here */}
      <Footer />
    </div>
  );
};

export default App;
