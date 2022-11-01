import React from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './CalendarContainer.css';

const CalendarContainer: React.FC<{}> = () => {
  return (
    <div className="calendar-container">
      <Calendar />
    </div>
  );
};

export default CalendarContainer;
