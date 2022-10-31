import React from 'react';
import './EventCard.css';
import EventCardFooter from './EventCardFooter';
import EventCardHeader from './EventCardHeader';
import EventContent from './EventContent';

interface EventCardProps {
  name: string;
  date: string;
  organizer: string;
  time: string;
  location: string;
  office: string;
  timeSuggestions: any[];
  status: string;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  date,
  organizer,
  time,
  location,
  office,
  timeSuggestions,
  status,
}) => {
  return (
    <div className="event-card">
      <EventCardHeader name={name} organizer={organizer} office={office} />
      <EventContent
        date={date}
        time={time}
        timeSuggestions={timeSuggestions}
        location={location}
        status={status}
      />
      <EventCardFooter status={status} />
    </div>
  );
};

export default EventCard;
