import { Event, EventStatus } from '@prisma/client';

import { prisma } from '@/db';

import { createEvent, getAllEvents } from '../eventService';

describe('test event service', () => {
  it('should create event successfully', async () => {
    const user = {
      userId: 1,
    };

    const eventInfo = {
      eventName: 'Sup on Saigon River',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam quam, aliquet et felis et, sagittis pulvinar quam. Vestibulum feugiat urna vel elit convallis, quis consequat orci laoreet. Ut lacinia purus nec convallis laoreet. Nullam eu velit eros. Aliquam lectus felis, ullamcorper quis ultricies et, convallis eu enim. Proin pretium mattis commodo. Ut diam lectus, porta nec fringilla sed, euismod in neque. Phasellus dapibus quam eget malesuada volutpat. Ut aliquet viverra tortor, in egestas turpis dapibus eu. Pellentesque mollis, odio ut semper porttitor, tellus arcu tempor erat, a pharetra nisi nisl ut risus.Etiam lacinia nunc a eros eleifend ornare. Aenean scelerisque congue tortor. Nam suscipit aliquam pellentesque. Fusce sit amet volutpat nulla, vel vestibulum sapien. Donec ut nulla convallis diam condimentum laoreet non at nibh. Curabitur vulputate faucibus quam eu volutpat. Phasellus aliquet euismod nulla, eu malesuada leo mollis at. Donec varius cursus augue, vel iaculis nibh auctor id. Cras porttitor, ante egestas posuere viverra, ligula metus dignissim odio, ut ultrices risus ex eget lorem.',
      location: 'Saigon River',
      minParticipants: 10,
      startDate: '2022-10-10',
      startTime: '2022-10-10 09:00:00',
      duration: 2,
      requiresMinParticipants: true,
      officeId: 1,
    };

    const expected = {
      id: 1,
      ownerId: user.userId,
      ...eventInfo,
      startDate: new Date(eventInfo.startDate),
      startTime: new Date(eventInfo.startTime),
      status: EventStatus.NOT_CONFIRMED,
    };

    jest.spyOn(prisma.event, 'create').mockResolvedValue(expected as Event);

    const newEvent = await createEvent(user.userId, eventInfo);

    expect(newEvent.timeSuggestions).toBeInstanceOf(Array);
    Object.keys(eventInfo).forEach((key) => {
      expect(newEvent[key]).toStrictEqual(expected[key]);
    });
  });
  it('should get all events successfully', async () => {
    const user = {
      userId: 1,
    };

    const eventInfo = {
      eventName: 'Sup on Saigon River',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam quam, aliquet et felis et, sagittis pulvinar quam. Vestibulum feugiat urna vel elit convallis, quis consequat orci laoreet. Ut lacinia purus nec convallis laoreet. Nullam eu velit eros. Aliquam lectus felis, ullamcorper quis ultricies et, convallis eu enim. Proin pretium mattis commodo. Ut diam lectus, porta nec fringilla sed, euismod in neque. Phasellus dapibus quam eget malesuada volutpat. Ut aliquet viverra tortor, in egestas turpis dapibus eu. Pellentesque mollis, odio ut semper porttitor, tellus arcu tempor erat, a pharetra nisi nisl ut risus.Etiam lacinia nunc a eros eleifend ornare. Aenean scelerisque congue tortor. Nam suscipit aliquam pellentesque. Fusce sit amet volutpat nulla, vel vestibulum sapien. Donec ut nulla convallis diam condimentum laoreet non at nibh. Curabitur vulputate faucibus quam eu volutpat. Phasellus aliquet euismod nulla, eu malesuada leo mollis at. Donec varius cursus augue, vel iaculis nibh auctor id. Cras porttitor, ante egestas posuere viverra, ligula metus dignissim odio, ut ultrices risus ex eget lorem.',
      location: 'Saigon River',
      minParticipants: 10,
      startDate: '2022-10-10',
      startTime: '2022-10-10 09:00:00',
      duration: 2,
      requiresMinParticipants: true,
      officeId: 1,
    };

    const expected = [{
      id: 1,
      ownerId: user.userId,
      ...eventInfo,
      startDate: new Date(eventInfo.startDate),
      startTime: new Date(eventInfo.startTime),
      status: EventStatus.NOT_CONFIRMED,
    }, {
      id: 2,
      ownerId: user.userId,
      ...eventInfo,
      startDate: new Date(eventInfo.startDate),
      startTime: new Date(eventInfo.startTime),
      status: EventStatus.CONFIRMED,
    }];

    jest.spyOn(prisma.event, 'findMany').mockResolvedValue(expected as Event[]);

    const allEvents = await getAllEvents('');

    expect(allEvents).toBeInstanceOf(Array);
    expect(allEvents.length).toBe(2);
  });
});
