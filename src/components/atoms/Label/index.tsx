import React from 'react';
import { Text, TextProps } from 'react-native';

type LabelProps = {
  title: string;
} & TextProps;

const Label = ({ title, style = undefined, testID }: LabelProps) => {
  return (
    <Text style={style} testID={testID}>
      {title}
    </Text>
  );
};

export default Label;
