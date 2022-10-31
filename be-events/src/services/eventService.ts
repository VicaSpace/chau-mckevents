import { EventStatus } from '@prisma/client';

import { prisma } from '@/db';

const getAllEvents = async (startDate: string) => {
  if (startDate) {
    return await prisma.event.findMany({
      where: {
        startDate: new Date(startDate),
      },
      include: {
        eventParticipants: true,
        timeSuggestions: true,
        office: true,
      },
    });
  } else {
    return await prisma.event.findMany({
      include: {
        eventParticipants: true,
        timeSuggestions: true,
        office: true,
      },
    });
  }

};

const getEventDetails = async (eventId: number) => {
  return await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      eventParticipants: true,
      timeSuggestions: {
        include: {
          votes: true,
        },
      },
    },
  });
};

const createEvent = async (ownerId, eventInfo) => {
  const newEvent = await prisma.$transaction(async (prisma) => {
    const event = await prisma.event.create({
      data: {
        ...eventInfo,
        startTime: new Date(eventInfo.startTime),
        startDate: new Date(eventInfo.startDate),
        status: EventStatus.NOT_CONFIRMED,
        ownerId: ownerId,
      },
    });

    // add time suggestion
    await prisma.eventTimeSuggestion.create({
      data: {
        eventId: event.id,
        time: event.startTime,
      },
    });

    return await prisma.event.findUniqueOrThrow({
      where: {
        id: event.id,
      },
      include: {
        timeSuggestions: true,
      },
    });
  });
  return newEvent;
};

const registerUserIntoEvent = async (
  userId: number,
  eventId: number,
  timeslotIds: number[]
) => {
  // TODO: handle add new time-slots
  const newRegistration = await prisma.$transaction(async (prisma) => {
    const registration = await prisma.eventParticipant.create({
      data: {
        eventId,
        userId,
      },
    });

    // add time suggestion
    await Promise.all(
      timeslotIds.map((timeslotId) => {
        return prisma.eventTimeVoting.create({
          data: {
            timeSuggestionId: timeslotId,
            userId,
          },
        });
      })
    );

    return registration;
  });
  return newRegistration;
};

export { getAllEvents, getEventDetails, createEvent, registerUserIntoEvent };
