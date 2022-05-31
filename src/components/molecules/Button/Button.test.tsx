import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Button from './index';

it('Button Press called when press button', async () => {
  const mock = jest.fn();
  const component = render(<Button testID="buttonPress" title="press" onPress={mock} />);
  fireEvent.press(await component.findByTestId('buttonPress'));
  expect(mock).toHaveBeenCalledTimes(1);
});
