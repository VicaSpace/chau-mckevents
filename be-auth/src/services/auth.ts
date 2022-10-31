import createError from 'http-errors';
import jwt from 'jsonwebtoken';

import { prisma } from '@/db';
import { validateRegistrationRequest } from '@/validators/authValidator';

const checkPassword = async (password: string, username: string) => {
  const user = await getUserByUsername(username);
  if (!user) return false;

  return user.password === password;
};

const getUserByUsername = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  return user;
};

const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      username: true,
      email: true,
    }
  });

  return user;
};

const register = async (username, password, email) => {
  await validateRegistrationRequest(username);
  return await prisma.user.create({
    data: {
      username: username,
      password: password,
      email: email,
    },
  });
};

const login = async (username, password) => {
  const passwordIsMatched = await checkPassword(password, username);

  if (!passwordIsMatched) {
    const error = createError(400, `invalid username or password`);
    throw error;
  }

  const user = await getUserByUsername(username);

  const token = jwt.sign(
    { id: user?.id, username: user?.username, email: user?.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
    }
  );

  return {
    username: user?.username,
    email: user?.email,
    token: token,
  };
};

const verifyToken = async (token) => {
  const verifyData = await jwt.verify(token, process.env.JWT_SECRET);
  return verifyData;
};

export { register, login, verifyToken, getUserById };
