import {render, screen} from '@testing-library/react'
import React from 'react'
import EventContent from '../EventContent';

const dummyProps = {
    date: '2020-02-02 00:00:00',
    time: '2020-02-02 08:00:00',
    location: 'test',
    timeSuggestions: [
        {
            id: 1,
            time: '2020-02-02 08:00:00',
        },
        {
            id: 1,
            time: '2020-02-02 09:00:00',
        },
    ]
}

describe('Test: Event Card component screenshot', () => {
    it('should render the Event Card correctly', () => {
      const { container } = render(
          <EventContent {...dummyProps} status='NOT_CONFIRMED' />
      );
      expect(container).toMatchSnapshot();
    });
  });

describe('Test: Event Card props NOT_CONFIRMED', () => {
    it('should render location node', () => {
        render(<EventContent {...dummyProps} status='NOT_CONFIRMED' />);
        const eventLocation = screen.getByTestId('test-event-location');
        expect(eventLocation.classList).toContain('event-location');
        expect(eventLocation.textContent).toContain(dummyProps.location);
    });

    it('should render time node', () => {
        render(<EventContent {...dummyProps} status='NOT_CONFIRMED'/>);
        const eventLocation = screen.getByTestId('test-event-time');
        expect(eventLocation.classList).toContain('event-time');
        expect(eventLocation.textContent).toContain('Time suggestions');
        // expect(eventLocation.textContent).toContain('08:00 / 09:00');
    });
});


describe('Test: Event Card props CONFIRMED', () => {
    it('should render location node', () => {
        render(<EventContent {...dummyProps} status='CONFIRMED' />);
        const eventLocation = screen.getByTestId('test-event-location');
        expect(eventLocation.classList).toContain('event-location');
        expect(eventLocation.textContent).toContain(dummyProps.location);
    });

    it('should render time node', () => {
        render(<EventContent {...dummyProps} status='CONFIRMED'/>);
        const eventLocation = screen.getByTestId('test-event-time');
        expect(eventLocation.classList).toContain('event-time');
        expect(eventLocation.textContent).toContain('Time:');
        // expect(eventLocation.textContent).toContain('08:00 / 09:00');
    });
});

