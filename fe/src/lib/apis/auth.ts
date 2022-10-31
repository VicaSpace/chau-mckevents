import axios from 'axios';

const URL = process.env.REACT_APP_AUTH_BACKEND_URL ?? '';

export const signIn = async (username: string, password: string) => {
  const res = await axios.post(`${URL}/api/auth/login`, {
    username,
    password,
  });
  return res.data;
};

export const signUp = async (
  username: string,
  password: string,
  email: string
) => {
  const res = await axios.post(`${URL}/api/auth/resgister`, {
    username,
    password,
    email,
  });
  return res.data;
};

export const getSelfInfo = async (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const res = await axios.get(`${URL}/api/auth/info`, config);
  return res;
};

export const getUserInfoById = async (userId: number) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken !== null) {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const res = await axios.get(`${URL}/api/auth/info/${userId}`, config);
    const user = res.data;
    return user;
  }
};
