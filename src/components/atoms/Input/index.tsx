import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import React from 'react';
import Colors from '_theme/colors';
import { scaleSize } from '_theme/mixins';
import { SCALE_8 } from '_theme/spacing';

const styles = StyleSheet.create({
  inputStyle: {
    height: scaleSize(50),
    padding: SCALE_8,
    margin: 0,
    borderColor: Colors.PRIMARY,
    borderWidth: scaleSize(1.5),
    borderRadius: scaleSize(10),
    color: Colors.PRIMARY,
  },
});

type InputProps = Omit<
  TextInputProps,
  'placeholderTextColor' | 'autoFocus' | 'autoCapitalize' | 'autoComplete'
>;

const Input = ({ style, ...props }: InputProps) => {
  return (
    <TextInput
      placeholderTextColor={Colors.PRIMARY}
      autoCapitalize={'none'}
      autoComplete={'off'}
      style={[styles.inputStyle, style]}
      {...props}
    />
  );
};

export default Input;
