// import { prisma } from '@/db';
import {
  login,
  register,
  verifyToken,
} from '@/services/auth';


const registerHandler = async (req, res) => {
  const user = await register(req.body.username, req.body.password, req.body.email);
  res.status(201).json({
    id: user.id,
    username: user.username,
  });
}

const loginHandler = async (req, res) => {
  const accessToken = await login(req.body.username, req.body.password);
  res.status(201).json(accessToken);
}

const getUserInfoHandler = async (req, res) => {
  res.status(200).json(req.user);
}

const verifyTokenHandler = async (req, res) => {
  const verifiedUser = await verifyToken(req.body.token);
  res.status(200).json(verifiedUser);
}

export {
  registerHandler,
  loginHandler,
  getUserInfoHandler,
  verifyTokenHandler,
};
