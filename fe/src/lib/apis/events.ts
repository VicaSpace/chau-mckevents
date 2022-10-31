import axios from 'axios';
import { getUserInfoById } from './auth';

const URL = process.env.REACT_APP_EVENTS_BACKEND_URL ?? '';

export const getAllEvents = async () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken !== null) {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const res = await axios.get(`${URL}/api/events`, config);
    const events = await Promise.all(
      res.data.map(async (event: any) => {
        const owner = await getUserInfoById(event.ownerId);
        return {
          ...event,
          owner: owner,
        };
      })
    );

    return events;
  }

  return [];
};
