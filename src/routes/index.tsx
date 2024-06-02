import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.tab.routes';
import PushNotificationService from './PushNotificationService';

export function Routes(){
/*   useEffect(() => {
    PushNotificationService.configure();
  }, []); */

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
