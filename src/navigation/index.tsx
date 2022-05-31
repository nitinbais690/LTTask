import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppStacks from './AppStack';

export function RootNavigator() {
  return (
    <NavigationContainer>
      <AppStacks />
    </NavigationContainer>
  );
}
