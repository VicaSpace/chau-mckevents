import moment from 'moment';
import React from 'react';
import './EventContent.css';

const EventContent: React.FC<{
  date: string;
  time: string;
  location: string;
  timeSuggestions: any[];
  status: string;
}> = ({ date, time, location, timeSuggestions, status }) => {
  const renderTime = () => {
    if (status === 'CONFIRMED') {
      return <>Time: {moment(time).format('HH:MM').toString()}</>;
    } else if (status === 'NOT_CONFIRMED') {
      return (
        <>
          Time suggestions:{' '}
          {timeSuggestions
            .map((suggestion) =>
              moment(suggestion.time).format('HH:MM').toString()
            )
            .join(' / ')}
        </>
      );
    }
  };

  return (
    <div className="card-content" data-testid="test-card-content">
      <div className="event-date">
        <div className="event-date-month">
          {moment(date).format('MMMM Do').toString()}
        </div>
        <div className="event-year">
          {moment(date).format('YYYY').toString()}
        </div>
      </div>
      <div className="event-time" data-testid="test-event-time">
        {renderTime()}
      </div>
      <div className="event-location" data-testid="test-event-location">
        Location: {location}
      </div>
    </div>
  );
};

export default EventContent;
