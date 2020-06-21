import axios from 'axios';
import {apiEnv}  from '../config/environment/api.env';

const api = axios.create({
  baseURL: apiEnv.API_BASE_URL_DEV,
});

export default api;