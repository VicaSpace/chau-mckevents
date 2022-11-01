import { prisma } from "@/db";
import { User } from "@prisma/client";
import { getUserById, login, register, verifyToken } from "../auth";

describe('test auth service', () => {
  it('should login successfully', async () => {
    const user = {
      username: 'test',
      password: 'pw',
      email: 'email@email.com'
    }
    const registeredUser = await register(user.username, user.password, user.email);
    expect(registeredUser).not.toBeNull();
    expect(registeredUser.username).toBe(user.username);
    expect(registeredUser.email).toBe(user.email);

    const returnData = await login(user.username, user.password);
    expect(returnData).not.toBeNull();

    const verifyTokenResult = await verifyToken(returnData.token);
    expect(verifyTokenResult.username).toBe(user.username);
    expect(verifyTokenResult.id).toBe(registeredUser.id);

    // tear down
    await prisma.user.delete({ where: { id: registeredUser.id } });
  });

  it('should return user info by id', async () => {
    const user = {
      id: 1,
      username: 'test',
      password: 'pw',
      email: 'email@email.com'
    }

    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(user as User);
    const resultUser = await getUserById(1);
    expect(resultUser).toBe(user);
  });

  it('should verify token', async () => {
    const user = {
      id: 1,
      username: 'test',
      password: 'pw',
      email: 'email@email.com'
    }

    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(user as User);

    const returnData = await login(user.username, user.password);
    expect(returnData).not.toBeNull();

    const verifyTokenResult = await verifyToken(returnData.token);
    expect(verifyTokenResult.username).toBe(user.username);
    expect(verifyTokenResult.id).toBe(user.id);
  });
});