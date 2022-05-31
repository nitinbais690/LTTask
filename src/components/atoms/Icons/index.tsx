import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Color } from 'react-native-svg';
import Colors from '_theme/colors';
import { ICON_SIZE_20 } from '_theme/typography';

type IconsProps = {
  style?: ViewStyle;
  name: string;
  color?: Color;
  onPress: () => void;
  size?: number;
  iconTestID?: string;
};

const Icons = ({
  name,
  style,
  color = Colors.SECONDARY,
  size = ICON_SIZE_20,
  onPress,
  iconTestID,
}: IconsProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon testID={iconTestID} name={name} width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};

export default Icons;
