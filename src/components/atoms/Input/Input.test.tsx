import { render, fireEvent } from '@testing-library/react-native';
import Input from './index';
import React from 'react';

it('input value change', async () => {
  const mock = jest.fn();
  const component = render(<Input testID="InputTestID" onChangeText={mock} />);
  fireEvent.changeText(await component.findByTestId('InputTestID'), 'test');
  expect(mock).toHaveBeenCalledWith('test');
});
