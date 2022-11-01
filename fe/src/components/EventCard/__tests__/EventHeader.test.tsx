import {render, screen} from '@testing-library/react'
import React from 'react'
import EventCardHeader from '../EventCardHeader'

const dummyProps = {
    name: 'test',
    organizer: 'test-organizer',
    office: 'test-office',
}

describe('Test: Event Card Header component screenshot', () => {
    it('should render the Event Card correctly', () => {
      const { container } = render(
          <EventCardHeader {...dummyProps} />
      );
      expect(container).toMatchSnapshot();
    });
  });

describe('Test: Event Card Header props', () => {
    it('should render name node ', () => {
        render(<EventCardHeader {...dummyProps} />);
        const nameNode = screen.getByTestId('test-event-name');
        expect(nameNode.textContent).toBe(dummyProps.name);
    });
    it('should render organizer node ', () => {
        render(<EventCardHeader {...dummyProps} />);
        const organizerNode = screen.getByTestId('test-event-organizer');
        expect(organizerNode.textContent).toBe(`Organizer: ${dummyProps.organizer}`);
    });
    it('should render office node ', () => {
        render(<EventCardHeader {...dummyProps} />);
        const officeNode = screen.getByTestId('test-event-office');
        expect(officeNode.textContent).toBe(dummyProps.office);
    });
});
