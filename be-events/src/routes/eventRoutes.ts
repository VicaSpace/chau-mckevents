import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import {
  createEventHandler,
  getAllEventsHandler,
  getEventDetailsHandler,
  registerUserIntoEventHandler,
} from '@/controllers/events';
import checkEventInfo from '@/middlewares/schemas/eventSchema';

const router = Router();

router.get('/', asyncHandler(getAllEventsHandler));
router.post('/', checkEventInfo, asyncHandler(createEventHandler));

router.get('/:eventId', asyncHandler(getEventDetailsHandler));
router.post('/:eventId/register', asyncHandler(registerUserIntoEventHandler));

export { router as eventRouter };
