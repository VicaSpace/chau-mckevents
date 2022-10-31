import moment from 'moment';
import React from 'react';
import './EventCard.css';
import EventCardFooter from './EventCardFooter';
import EventCardHeader from './EventCardHeader';

interface EventCardProps {
  name: string;
  date: string;
  organizer: string;
  time: string;
  location: string;
  office: string;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  date,
  organizer,
  time,
  location,
  office,
}) => {
  return (
    <div className="event-card">
      <EventCardHeader name={name} organizer={organizer} office={office} />
      <div className="event-mid">
        <div className="event-date">
          <div className="event-date-month">
            {moment(date).format('MMMM Do').toString()}
          </div>
          <div className="event-year">
            {moment(date).format('YYYY').toString()}
          </div>
        </div>
        <div className="event-time">
          Time: {moment(time).format('HH:MM').toString()}
        </div>
        <div className="event-location">Location: {location}</div>
      </div>
      <EventCardFooter />
    </div>
  );
};

export default EventCard;
