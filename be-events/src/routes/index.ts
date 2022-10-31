import { Router } from 'express';

import { eventRouter } from '@/routes/eventRoutes';
import requireAuth from '@/middlewares/auth';

const router = Router();

router.use('/events', requireAuth, eventRouter);

export default router;
