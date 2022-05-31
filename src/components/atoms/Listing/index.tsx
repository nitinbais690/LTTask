import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

function Listing<T>(props: Omit<FlatListProps<T>, 'keyExtractor'>) {
  const keyExtractor = (item: T, index: number) => index.toString();

  return <FlatList keyExtractor={keyExtractor} {...props} />;
}

export default Listing;
