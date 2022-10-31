import {render, screen} from '@testing-library/react'
import React from 'react'
import EventCardFooter from '../EventCardFooter'

describe('Test: Event Card Footer component screenshot', () => {
    it('should render the Event Card correctly', () => {
      const { container } = render(
          <EventCardFooter status='NOT_CONFIRMED' />
      );
      expect(container).toMatchSnapshot();
    });
  });

describe('Test: Event Card Footer props NOT_CONFIRMED', () => {
    it('should not render green check icon ', () => {
        render(<EventCardFooter status='NOT_CONFIRMED' />);
        const checkIcon = screen.getByTestId('check-icon');
        expect(checkIcon.style.color).not.toBe('green');
    });
});


describe('Test: Event Card props CONFIRMED', () => {
    it('should render location node', () => {
        render(<EventCardFooter status='CONFIRMED' />);
        const checkIcon = screen.getByTestId('check-icon');
        expect(checkIcon.style.color).toBe('green');
    });
});

