// ActivitiesSection.js
import React from 'react';

const activitiesData = {
  food: [
    { name: 'Milktooth', details: 'Milktooth is a fine diner opened in 2014 by Jonathan Brooks, utilizing the beautiful produce and agriculture of Indiana to serve world-inspired breakfast and lunch fare.', url: 'https://www.milktoothindy.com/', thumbnail: 'https://images.squarespace-cdn.com/content/v1/5a68dc5b12abd9985b7138e9/1523629231653-1PKUZFL8CJ1E19Y03FN7/MilktoothGRCHEESE-1.jpg?format=1500w' },
    { name: 'Example Restaurant 2', details: 'Details about the restaurant...', url: 'https://example.com/restaurant2', thumbnail: 'https://placehold.co/300x200/666/fff?text=Thumbnail' },
    // Add more food-related activities
  ],
  drinks: [
    { name: 'Example Bar 1', details: 'Details about the bar...', url: 'https://example.com/bar1', thumbnail: 'https://placehold.co/300x200/666/fff?text=Thumbnail' },
    { name: 'Example Bar 2', details: 'Details about the bar...', url: 'https://example.com/bar2', thumbnail: 'https://placehold.co/300x200/666/fff?text=Thumbnail' },
    // Add more drink-related activities
  ],
  entertainment: [
    { name: 'Example Entertainment 1', details: 'Details about the entertainment venue...', url: 'https://example.com/entertainment1', thumbnail: 'https://placehold.co/300x200/666/fff?text=Thumbnail' },
    { name: 'Example Entertainment 2', details: 'Details about the entertainment venue...', url: 'https://example.com/entertainment2', thumbnail: 'https://placehold.co/300x200/666/fff?text=Thumbnail' },
    // Add more entertainment-related activities
  ],
  lodging: [
    { name: 'Example Hotel 1', details: 'Details about the hotel...', url: 'https://example.com/hotel1', thumbnail: 'https://placehold.co/300x200/666/fff?text=Thumbnail' },
    { name: 'Example Hotel 2', details: 'Details about the hotel...', url: 'https://example.com/hotel2', thumbnail: 'https://placehold.co/300x200/666/fff?text=Thumbnail' },
    // Add more lodging-related activities
  ],
};

const ActivitiesSection = () => {
  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank'); // Open URL in a new tab
    }
  };

  return (
    <section className="activities">
      <div className="activities-header">
        <h2>Visit Indy Today!</h2>
        <p>Discover the vibrant attractions in Indianapolis</p>
      </div>
      <div className="activities-container">
        {Object.keys(activitiesData).map(category => (
          <div key={category} className="activity-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            {activitiesData[category].map(activity => (
              <div
                key={activity.name}
                className="activity-card"
                onClick={() => handleCardClick(activity.url)}
              >
                {activity.thumbnail ? (
                  <img
                    src={activity.thumbnail}
                    alt={`Thumbnail for ${activity.name}`}
                    className="thumbnail"
                  />
                ) : (
                  <div className="placeholder-thumbnail" />
                )}
                <h4>{activity.name}</h4>
                <p className="activity-details">{activity.details}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
