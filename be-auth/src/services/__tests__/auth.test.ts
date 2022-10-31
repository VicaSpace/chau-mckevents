import { prisma } from "@/db";
import { login, register, verifyToken } from "../auth";

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
});