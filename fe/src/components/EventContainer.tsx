import EventList from '../components/EventList';
import React, { useState } from 'react';

import './EventContainer.css';
import EventForm from './EventForm';
import PopUp from './Popup';

const EventContainer: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="event-container">
      <div className="event-container-header">Upcoming events</div>
      <EventList />
      <button className="create-event-button" onClick={() => setIsOpen(true)}>
        Create new event
      </button>
      {isOpen && (
        <PopUp heading="Event Create Form" setIsOpen={setIsOpen}>
          <EventForm setIsOpen={setIsOpen} />
        </PopUp>
      )}
    </div>
  );
};

export default EventContainer;
