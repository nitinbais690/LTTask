import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, View } from 'react-native';
import Colors from '_theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type LoaderType = Omit<ActivityIndicatorProps, 'style'>;

const Loader = ({ size = 'large', color, accessibilityHint }: LoaderType) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        accessibilityHint={accessibilityHint}
        size={size}
        color={color ?? Colors.PRIMARY}
      />
    </View>
  );
};

export default Loader;
