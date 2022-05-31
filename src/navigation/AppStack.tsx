import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootAppScreens, RootParamList } from './routes';
import AddDogInfo from '_screens/Dogs/AddDogInfo';
import List from '_screens/Dogs/List';

const Stack = createNativeStackNavigator<RootParamList>();

const AppStacks = () => {
  return (
    <Stack.Navigator initialRouteName={RootAppScreens.LIST_DOGS}>
      <Stack.Group>
        <Stack.Screen name={RootAppScreens.ADD_NEW_DOG} component={AddDogInfo} />
        <Stack.Screen name={RootAppScreens.LIST_DOGS} component={List} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStacks;
