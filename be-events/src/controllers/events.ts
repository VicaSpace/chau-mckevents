import {
  createEvent,
  getAllEvents,
  getEventDetails,
  registerUserIntoEvent,
} from '@/services/eventService';

export const getAllEventsHandler = async (req, res) => {
  const allEvents = await getAllEvents(req.query.startDate);
  res.status(200).json(allEvents);
};

export const getEventDetailsHandler = async (req, res) => {
  const eventDetails = await getEventDetails(Number(req.params.eventId));
  res.status(200).json(eventDetails);
};

export const createEventHandler = async (req, res) => {
  const event = await createEvent(req.user.id, req.body);
  res.status(201).json(event);
};

export const registerUserIntoEventHandler = async (req, res) => {
  const participation = await registerUserIntoEvent(
    req.user.id,
    Number(req.params.eventId),
    req.body.timeslotIds
  );
  res.status(201).json(participation);
};
