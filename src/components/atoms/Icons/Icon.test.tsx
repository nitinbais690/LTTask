import { render } from '@testing-library/react-native';
import React from 'react';
import testIDS from 'utils/testIDS';
import Colors from '_theme/colors';
import Icons from './index';

it('icon must be render correctly', async () => {
  const mock = jest.fn();
  const component = render(
    <Icons
      name={'trash-2-outline'}
      iconTestID={testIDS.iconTest}
      onPress={mock}
      color={Colors.BLACK}
    />
  );
  const icon = component.getByTestId(testIDS.iconTest);
  expect(icon).toBeTruthy();
});
