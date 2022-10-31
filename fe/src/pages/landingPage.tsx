import React from 'react';
import CalendarContainer from '../components/CalendarContainer';
import EventContainer from '../components/EventContainer';
import Header from '../components/Header';

const LandingPage: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <CalendarContainer />
      <EventContainer />
    </>
  );
};

export default LandingPage;
