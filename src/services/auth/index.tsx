import api from '../api';
import { apiEnv } from '../../config/environment/api.env';


export function signInApi(email: String, senha: String) {
  return api.post(apiEnv.API_URL_SIGNIN, { email, senha });
}