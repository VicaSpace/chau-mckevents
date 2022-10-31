import { Router } from 'express';
import {
  getUserInfoHandler,
  loginHandler,
  registerHandler,
  verifyTokenHandler
} from '@/controllers/auth';
import asyncHandler from 'express-async-handler';

const router = Router();

router.post('/register', asyncHandler(registerHandler));
router.post('/login', asyncHandler(loginHandler));
router.get('/info', asyncHandler(getUserInfoHandler));
router.get('/verify', asyncHandler(verifyTokenHandler));

export { router as authRouter };
