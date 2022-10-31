import { prisma } from '@/db';
import { EventStatus } from '@prisma/client';

const getAllEvents = async () => {
  return await prisma.event.findMany();
};

const getEventDetails = async (eventId: number) => {
  return await prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });
};

const createEvent = async (ownerId, eventInfo) => {
  return await prisma.event.create({
    data: {
      ...eventInfo,
      startTime: new Date(eventInfo.startTime),
      startDate: new Date(eventInfo.startDate),
      status: EventStatus.NOT_CONFIRMED,
      ownerId: ownerId,
    },
  });
};

export { getAllEvents, getEventDetails, createEvent };
