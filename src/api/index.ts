import axios from 'axios';

const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
const ID_URL = `${API_BASE_URL}newstories.json`;

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export async function getList() {
  try {
    return await axiosInstance.get(ID_URL);
  } catch (error) {
    throw error;
  }
}

export async function getStoryInfo(itemId: string) {
  try {
    const url = `${API_BASE_URL}item/${itemId}.json`;
    return await axiosInstance.get(url);
  } catch (error) {
    throw error;
  }
}
