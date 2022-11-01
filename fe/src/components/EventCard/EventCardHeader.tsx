import React from 'react';
import './EventCardHeader.css';

const EventCardHeader: React.FC<{
  name: string;
  organizer: string;
  office: string;
}> = ({ name, organizer, office }) => {
  return (
    <div className="card-head" data-testid="test-card-head">
      <div className="event-name" data-testid="test-event-name">
        {name}
      </div>
      <div className="event-organizer" data-testid="test-event-organizer">
        Organizer: {organizer}
      </div>
      <div className="event-office" data-testid="test-event-office">
        {office}
      </div>
    </div>
  );
};

export default EventCardHeader;
