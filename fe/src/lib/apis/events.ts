import axios from 'axios';

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
    const events = res.data;
    return events;
  }

  return [];
};
