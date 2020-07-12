import api from '../api';
import { apiEnv } from '../../config/environment/api.env';



export function getRifas() {
  api.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjb3MucmliLnNvdXNhQGdtYWlsLmNvbSIsImV4cCI6MTU5NDYyMzUzM30.t1SZDi0RDzp7LPxGYlBNHpxzTLtSCUG8BimQpbbHPj0jMhWAtGzCoGy9fA9O-Ij7iW-H5FKRtCT0AMA-Q0yLIQ';
  return api.get(apiEnv.API_URL_RIFA_GET);
}