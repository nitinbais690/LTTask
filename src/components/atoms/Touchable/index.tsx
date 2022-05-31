import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { ReactNode } from 'react';

type TouchableProps = {
  children: ReactNode;
} & TouchableOpacityProps;

const Touchable = ({ children, ...props }: TouchableProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
