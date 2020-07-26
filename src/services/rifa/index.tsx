import api from '../api';
import { apiEnv } from '../../config/environment/api.env';



export function getRifas(page: number) {
  console.log(apiEnv.API_URL_RIFA_GET + page);
  
  return api.get(apiEnv.API_URL_RIFA_GET + page);
}