import axios from 'axios';

export async function refreshAccessToken() {
  try {
    const response = await axios.post('/auth/refresh');
    const newAccessToken = response.data.accessToken;
    return newAccessToken;
  } catch (error) {
    console.error('Failed to refresh access token:', error);
    throw error;
  }
}
