import EventList from '../components/EventList';
import React from 'react';

import './EventContainer.css';

const EventContainer: React.FC<{}> = () => {
  return (
    <div className="event-container">
      <div className="event-container-header">Upcoming events</div>
      <EventList />
    </div>
  );
};

export default EventContainer;
