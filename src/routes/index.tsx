import React, { useContext } from 'react';
import AuthRoutes from './auth.routes';
import RifaRoutes from './rifa.routes';
import Tabs from './tabBottom.routes';
import AuthContext from '../contexts/AuthContext';

const Routes: React.FC = () => {

  const { loged } = useContext(AuthContext);
  
  return loged ? <Tabs /> : <AuthRoutes />;
}

export default Routes;