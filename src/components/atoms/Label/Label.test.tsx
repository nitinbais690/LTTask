import React from 'react';
import { render } from '@testing-library/react-native';
import Label from './index';

describe('Hello', () => {
  it('displays the passed-in name', () => {
    const { queryByText } = render(<Label title="test" />);
    expect(queryByText('test')).not.toBeNull();
  });
});
