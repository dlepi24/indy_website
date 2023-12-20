// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
          <iframe
            title="Indy Video"
            src="https://app.visla.us/embed/1187024405595688960"
            frameBorder="0"
            allowFullScreen
            style={{ display: '-ms-flexbox', border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
