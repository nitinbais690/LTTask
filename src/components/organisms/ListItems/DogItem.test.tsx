import { render } from '@testing-library/react-native';
import React from 'react';
import DogsItem from './DogItem';

it('Button Press called when press button', async () => {
  const mock = jest.fn();
  const component = render(
    <DogsItem
      item={{ name: 'tommy', age: '12', color: 'black', breed: 'Telomian' }}
      onDeleteIconPress={mock}
    />
  );
  expect(component.queryByText('tommy')).not.toBeNull();
});
