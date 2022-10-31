import { createEvent, getAllEvents, getEventDetails } from '@/services/eventService';

export const getAllEventsHandler = async (_req, res) => {
  const allEvents = await getAllEvents();
  res.status(200).json(allEvents);
};

export const getEventDetailsHandler = async (req, res) => {
  const eventDetails = await getEventDetails(Number(req.params.eventId));
  res.status(200).json(eventDetails);
};

export const createEventHandler =async (req, res) => {
  const event = await createEvent(req.user.id, req.body);
  res.status(201).json(event);
}
