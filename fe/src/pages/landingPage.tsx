import React from 'react';
import EventContainer from '../components/EventContainer';
import Header from '../components/Header';

const LandingPage: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <EventContainer />
    </>
  );
};

export default LandingPage;
