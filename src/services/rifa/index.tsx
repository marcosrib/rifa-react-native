import api from '../api';
import { apiEnv } from '../../config/environment/api.env';



export function getRifas() {
  api.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjb3MucmliLnNvdXNhQGdtYWlsLmNvbSIsImV4cCI6MTU5NTA1OTY5N30.m3c3wUKRqI5euuquf-VVNhuQLjDttsZYTBkRvjgPSyXldAMlGhfg4z28yRZGdMtMZg2v-0dBs799lL5reHAnKA';
  return api.get(apiEnv.API_URL_RIFA_GET);
}