import EventList from '../components/EventList';
import React, { useState } from 'react';

import './EventContainer.css';
import EventForm from './EventForm';

const EventContainer: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="event-container">
      <div className="event-container-header">Upcoming events</div>
      <EventList />
      <button className="create-event-button" onClick={() => setIsOpen(true)}>
        Create new event
      </button>
      {isOpen && <EventForm setIsOpen={setIsOpen} />}
    </div>
  );
};

export default EventContainer;
