import {
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import Colors from '_theme/colors';
import Loader from 'components/atoms/Loader';
import { ColorValue } from 'react-native';
import { FONT_BOLD, FONT_SIZE_14 } from '_theme/typography';
import { scaleSize } from '_theme/mixins';
import { SCALE_16 } from '_theme/spacing';
import Label from 'components/atoms/Label';

const styles = StyleSheet.create({
  titleTextStyle: {
    fontSize: FONT_SIZE_14,
    color: Colors.WHITE,
    fontWeight: FONT_BOLD.fontWeight as TextStyle['fontWeight'],
    textTransform: 'uppercase',
  },
  buttonViewStyle: {
    height: scaleSize(50),
    backgroundColor: Colors.PRIMARY,
    borderRadius: scaleSize(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SCALE_16,
  },
});

type ButtonProps = {
  title: string;
  titleStyle?: TextStyle;
  loading?: boolean;
  loaderColor?: ColorValue;
  buttonStyle?: ViewStyle;
  titleTestID?: string;
} & TouchableOpacityProps;

const Button = ({
  title,
  titleStyle,
  buttonStyle,
  loaderColor,
  loading,
  disabled = false,
  titleTestID,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonViewStyle, buttonStyle]}
      activeOpacity={0.8}
      disabled={loading ?? disabled}
      {...props}
    >
      {loading ? (
        <Loader color={loaderColor ?? (Colors.WHITE as ColorValue)} />
      ) : (
        <Label title={title} testID={titleTestID} style={[styles.titleTextStyle, titleStyle]} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
