import Icons from 'components/atoms/Icons';
import Label from 'components/atoms/Label';
import Loader from 'components/atoms/Loader';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DogType } from '_server/mirage';
import Colors from '_theme/colors';
import { boxShadow, scaleSize } from '_theme/mixins';
import { SCALE_12, SCALE_16, SCALE_18, SCALE_8 } from '_theme/spacing';
import { FONT_SIZE_12 } from '_theme/typography';

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: SCALE_12,
    paddingVertical: SCALE_18,
    borderRadius: scaleSize(10),
    backgroundColor: Colors.WHITE,
    margin: SCALE_8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...boxShadow(Colors.SECONDARY),
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_12,
    textTransform: 'capitalize',
    color: Colors.PRIMARY,
    marginLeft: SCALE_16,
  },
  leftView: {
    flexDirection: 'row',
  },
  editIcon: {
    marginRight: SCALE_12,
  },
});

type ItemType = {
  item: DogType;
  onDeleteIconPress: () => void;
  loading?: boolean;
};

function DogsItem({ item, loading, onDeleteIconPress }: ItemType) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftView}>
        <Label testID={'dogName'} title={item.name} style={styles.titleText} />
      </View>
      <View style={styles.leftView}>
        {loading ? (
          <Loader size={'small'} />
        ) : (
          <Icons
            name="trash-2-outline"
            size={20}
            onPress={onDeleteIconPress}
            color={Colors.WARNING}
          />
        )}
      </View>
    </View>
  );
}

export default DogsItem;
