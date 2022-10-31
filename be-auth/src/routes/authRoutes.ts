import { Router } from 'express';
import {
  getUserInfoByIdHandler,
  getUserInfoHandler,
  loginHandler,
  registerHandler,
  verifyTokenHandler,
} from '@/controllers/auth';
import asyncHandler from 'express-async-handler';

const router = Router();

router.post('/register', asyncHandler(registerHandler));
router.post('/login', asyncHandler(loginHandler));
router.get('/info', asyncHandler(getUserInfoHandler));
router.get('/verify', asyncHandler(verifyTokenHandler));
router.get('/info/:id', asyncHandler(getUserInfoByIdHandler));

export { router as authRouter };
