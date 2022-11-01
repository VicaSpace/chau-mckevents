import {render, screen} from '@testing-library/react'
import React from 'react'
import EventCard from '../EventCard';

const dummyProps = {
    name: 'test',
    date: '2020-02-02 00:00:00',
    organizer: 'test-organizer',
    time: '2020-02-02 08:00:00',
    location: 'test',
    office: 'test',
    timeSuggestions: [
        {
            id: 1,
            time: '2020-02-02 08:00:00',
        },
        {
            id: 1,
            time: '2020-02-02 09:00:00',
        },
    ],
    status: 'CONFIRMED'
}

describe('Test: Event Card component screenshot', () => {
    it('should render the Event Card correctly', () => {
      const { container } = render(
          <EventCard {...dummyProps} status='NOT_CONFIRMED' />
      );
      expect(container).toMatchSnapshot();
    });
  });

describe('Test: Event Card node', () => {
    it('should render header node', () => {
        render(<EventCard {...dummyProps} status='NOT_CONFIRMED' />);
        const eventLocation = screen.getByTestId('test-card-head');
        expect(eventLocation.classList).toContain('card-head');
    });

    it('should render content node', () => {
        render(<EventCard {...dummyProps} status='NOT_CONFIRMED' />);
        const eventLocation = screen.getByTestId('test-card-content');
        expect(eventLocation.classList).toContain('card-content');
    });

    it('should render footer node', () => {
        render(<EventCard {...dummyProps} status='NOT_CONFIRMED' />);
        const eventLocation = screen.getByTestId('test-card-footer');
        expect(eventLocation.classList).toContain('card-footer');
    });
});
