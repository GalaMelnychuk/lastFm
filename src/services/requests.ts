import axios from 'axios';
import {ResponseTopAlbums} from '../types';
import {store} from '../redux/store';

const API_KEY = '3bdc3a7eee15f9ad433e72d91198877e';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0';

export const getTopAlbums = async (page: number) => {
  const user = store.getState().userName || 'rj';
  try {
    const data: ResponseTopAlbums = await axios({
      url: `${BASE_URL}/?method=user.gettopalbums&user=${user}&api_key=${API_KEY}&format=json`,
      method: 'get',
      params: {
        page,
        limit: 10, // items per page
      },
    });
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
