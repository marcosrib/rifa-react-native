import React, { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import { signInApi } from '../services/auth';
import { envStorage } from '../config/environment/storage.env'
import api from '../services/api';
import { Alert } from 'react-native';


interface AuthContextData {
  loged: boolean;
  user: object | null;
  token: string | undefined;
  signIn(user: String, password: String): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string>('');
  useEffect(() => {

    async function loadStorageData() {
      const token = await AsyncStorage.getItem(envStorage.TOKEN);
      console.log('kmkmkmkm');
      if (token !== null) {
        console.log(token);
        console.log('kmkmkmkm');
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        const user = jwtDecode<object>(token);
        setToken(token);
        setUser(user);
      }
    }
    loadStorageData();
  }, [])


  async function signIn(user: String, password: String) {

    try {
      const response = await signInApi(user, password);
      if (response.status === 200) {
        
        const { token } = response.data;
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        const user = jwtDecode<object>(token);
        setUser(user);
        AsyncStorage.setItem(envStorage.TOKEN, token);
      }
    } catch (error) {

      const codeErro = error.response.status;

      if (codeErro === 401) {
        Alert.alert('Ops', 'Usuario ou senha inválidos')
      }

    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
      setToken('');
    })
  }

  return (
    <AuthContext.Provider value={{ loged: !!user, user, signIn, token }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;