import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Touchable from './index';
import { Text } from 'react-native';

it('does stuff', async () => {
  const mock = jest.fn();
  const component = render(
    <Touchable testID={'TouchableText'} onPress={mock}>
      <Text>Text...</Text>
    </Touchable>
  );
  fireEvent.press(await component.findByTestId('TouchableText'));
  expect(mock).toHaveBeenCalledTimes(1);
});
