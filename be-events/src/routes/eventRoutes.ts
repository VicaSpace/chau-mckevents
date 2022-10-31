import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import {
  createEventHandler,
  getAllEventsHandler,
  getEventDetailsHandler,
} from '@/controllers/events';
import checkEventInfo from '@/middlewares/schemas/eventSchema';

const router = Router();

router.get('/', asyncHandler(getAllEventsHandler));
router.get('/:eventId', asyncHandler(getEventDetailsHandler));
router.post('/', checkEventInfo, asyncHandler(createEventHandler));

export { router as eventRouter };
