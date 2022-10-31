import axios from "axios"

const verifyUser = async(token: string) => {
  const auth_url = process.env.AUTH_API_URL || '';
  try {
    const response = await axios.get(
      auth_url, {
      data: {
        token
      }
    });
    const user = response.data;
    return user;
  } catch(err) {
    return null
  }
}

export {
  verifyUser
};
