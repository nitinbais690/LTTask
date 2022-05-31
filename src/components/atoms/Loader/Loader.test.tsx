import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from './index';

describe('Hello', () => {
  it('displays the passed-in name', () => {
    const { queryByAccessibilityHint } = render(<Loader accessibilityHint={'loading'} />);
    expect(queryByAccessibilityHint('loading')).not.toBeNull();
  });
});
