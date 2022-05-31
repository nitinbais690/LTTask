import { NavigationProp } from '@react-navigation/native';

export enum RootAppScreens {
  ADD_NEW_DOG = 'ADD_NEW_DOG',
  LIST_DOGS = 'LIST_DOGS',
}

export type RootParamList = {
  [RootAppScreens.ADD_NEW_DOG]: undefined;
  [RootAppScreens.LIST_DOGS]: undefined;
};

export type RootRoutesProps = NavigationProp<RootParamList>;
