import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.tab.routes';
import { AuthProvider } from '../context/AuthContext';
import PushNotificationService from './PushNotificationService';

export function Routes(){
/*   useEffect(() => {
    PushNotificationService.configure();
  }, []); */

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </AuthProvider>
  );
}
