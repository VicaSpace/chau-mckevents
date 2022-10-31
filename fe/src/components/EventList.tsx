import EventCard from './EventCard/EventCard';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../lib/apis/events';
import './EventList.css';

const EventList: React.FC<{}> = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    getAllEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="event-list">
      {events.map((event, i) => (
        <EventCard
          key={i}
          name={event.eventName}
          date={event.startDate}
          organizer={event.ownerId}
          time={event.startTime}
          location={event.location}
          office={event.office.name}
          timeSuggestions={event.timeSuggestions}
          status={event.status}
        />
      ))}
    </div>
  );
};

export default EventList;
