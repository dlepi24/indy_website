import React, { useState, useEffect } from 'react';
import EclipseCountdownTimer from './EclipseCountdownTimer';
import activitiesData from './ActivityData'; // Import the activity data component
import './ActivitiesSection.css';

const ActivitiesSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleCardSelect = (index, activity) => {
    setSelectedCard((prevSelected) => (prevSelected === index ? null : index));
    handleCardClick(activity.url);
  };

  const renderCardContent = (activity, index, isSelected) => {
    return (
      <>
        {activity.thumbnail ? (
          <img
            src={activity.thumbnail}
            alt={`Thumbnail for ${activity.name}`}
            className={`thumbnail ${isSelected ? 'selected' : ''}`}
          />
        ) : (
          <div className={`placeholder-thumbnail ${isSelected ? 'selected' : ''}`} />
        )}
        <h4>{activity.name}</h4>
        <p className="activity-details">{activity.details}</p>
        {isSelected && (
          <button className="website-button" onClick={() => handleCardClick(activity.url)}>
            Visit Website
          </button>
        )}
      </>
    );
  };

  return (
    <section className="activities">
      <EclipseCountdownTimer />
      <div className="activities-header">
        <h2>Explore Indianapolis</h2>
        <p>Discover the vibrant attractions in Indy and make the most of your visit!</p>
      </div>
      <div className="activities-container">
        {isMobile ? (
          <>
            <div className="category-header">
              {Object.keys(activitiesData).map((category) => (
                <h3
                  key={category}
                  className={selectedCategory === category ? 'selected' : ''}
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
              ))}
            </div>
            {selectedCategory && (
              <div className="activity-cards">
                {activitiesData[selectedCategory].map((activity, index) => (
                  <div
                    key={activity.name}
                    className={`activity-card ${index === selectedCard ? 'selected' : ''}`}
                    onClick={() => handleCardSelect(index, activity)}
                  >
                    {renderCardContent(activity, index, index === selectedCard)}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          // Render for non-mobile layout
          <>
            {Object.keys(activitiesData).map((category) => (
              <div key={category} className="activity-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                {activitiesData[category].map((activity, index) => (
                  <div
                    key={activity.name}
                    className={`activity-card ${index === selectedCard ? 'selected' : ''}`}
                    onClick={() => handleCardSelect(index, activity)}
                  >
                    {renderCardContent(activity, index, index === selectedCard)}
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ActivitiesSection;
