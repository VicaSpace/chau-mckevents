import { Request } from 'express';

import { verifyUser } from '@/services/auth';

const requireAuth = async function (req: Request, res, next) {
  const accessToken = req.headers.authorization?.split(' ')[1] || '';
  const user = await verifyUser(accessToken);
  if (user === null)
    return res.status(401).json({
      error: 'Invalidate signature',
    });
  req.user = user;
  next();
};

export default requireAuth;
