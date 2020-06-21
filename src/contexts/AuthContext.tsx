import React, { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import { signInApi } from '../services/auth';
import { envStorage } from '../config/environment/storage.env'
import api from '../services/api';


interface AuthContextData {
  loged: boolean;
  user: object | null;
  signIn(user: String, password: String): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {

    async function loadStorageData() {
      const token = await AsyncStorage.getItem(envStorage.TOKEN);
      if (token !== null) {
        const user = jwtDecode<object>(token);
        setUser(user);
      }
    }
    loadStorageData();
  }, [])


  async function signIn(user: String, password: String) {
    const response = await signInApi(user, password);

    if (response.status === 201) {
      const { token } = response.data;
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      const user = jwtDecode<object>(token);
      setUser(user);
      AsyncStorage.setItem(envStorage.TOKEN, token);
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ loged: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;