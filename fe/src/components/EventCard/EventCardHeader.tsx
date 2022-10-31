import React from 'react';
import './EventCardHeader.css';

const EventCardHeader: React.FC<{
  name: string;
  organizer: string;
  office: string;
}> = ({ name, organizer, office }) => {
  return (
    <div className="card-head">
      <div className="event-name">{name}</div>
      <div className="event-organizer">Organizer: {organizer}</div>
      <div className="event-office">{office}</div>
    </div>
  );
};

export default EventCardHeader;
