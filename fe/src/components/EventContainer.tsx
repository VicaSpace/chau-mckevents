import EventList from '../components/EventList';
import React from 'react';

import './EventContainer.css';

const EventContainer: React.FC<{}> = () => {
  return (
    <div className="event-container">
      <div className="event-container-header">Upcoming events</div>
      <EventList />
      <button className="create-event-button">Create new event</button>
    </div>
  );
};

export default EventContainer;
