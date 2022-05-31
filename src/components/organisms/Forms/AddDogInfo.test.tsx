import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import AddDogInfo from './AddDogInfo';
import testIDS from 'utils/testIDS';

it('does stuff', async () => {
  const mock = jest.fn();
  const component = render(<AddDogInfo onSubmit={mock} loading={false} />);
  fireEvent.changeText(component.getByTestId(testIDS.name), 'tom');
  fireEvent.changeText(component.getByTestId(testIDS.age), '9');
  fireEvent.changeText(component.getByTestId(testIDS.color), 'red');
  fireEvent.changeText(component.getByTestId(testIDS.breed), 'German Hound');
  fireEvent.press(component.getByTestId(testIDS.submitButtonPress));
  expect(mock).toHaveBeenCalledWith({ name: 'tom', age: '9', color: 'red', breed: 'German Hound' });
});
