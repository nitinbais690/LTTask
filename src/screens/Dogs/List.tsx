import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icons from 'components/atoms/Icons';
import Listing from 'components/atoms/Listing';
import Loader from 'components/atoms/Loader';
import DogsItem from 'components/organisms/ListItems/DogItem';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation, useQuery } from 'react-query';
import { RootAppScreens, RootRoutesProps } from '_navigation/routes';
import { DogType } from '_server/mirage';
import { deleteDogInfo, fetchAllDogs } from '_services/dogs';
import Colors from '_theme/colors';
import { scaleSize } from '_theme/mixins';
import { SCALE_12, SCALE_18 } from '_theme/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    marginBottom: SCALE_18,
  },
  iconsStyle: {
    position: 'absolute',
    right: SCALE_12,
    bottom: scaleSize(50),
  },
});

function List() {
  const navigation = useNavigation<RootRoutesProps>();
  const [isDeleting, setDeleting] = useState('-1');
  const { status, data, refetch } = useQuery<{ dogs: DogType[] }, Error>('dogs', fetchAllDogs);

  const mutation = useMutation((id: string) => deleteDogInfo(id));
  const { isSuccess, isLoading } = mutation;

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      if (isActive) {
        refetch();
      }
      return () => {
        isActive = false;
      };
    }, [])
  );

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  const onIconPress = () => navigation.navigate(RootAppScreens.ADD_NEW_DOG);
  const onDeleteIconPress = (id: string) => {
    setDeleting(id);
    mutation.mutate(id);
  };

  useEffect(() => {
    if (isSuccess) {
      setDeleting('-1');
    }
  }, [isSuccess]);

  return (
    <View style={styles.container}>
      {status === 'loading' ? (
        <Loader />
      ) : (
        status === 'success' &&
        data?.dogs && (
          <Listing<DogType>
            data={data.dogs}
            renderItem={({ item }: { item: DogType }) => {
              return (
                <DogsItem
                  item={item}
                  loading={isLoading && isDeleting === item.id}
                  onDeleteIconPress={() => onDeleteIconPress(item.id as string)}
                />
              );
            }}
          />
        )
      )}

      <SafeAreaView style={styles.container}>
        <Icons
          style={styles.iconsStyle}
          name={'plus-circle-outline'}
          color={Colors.PRIMARY}
          size={48}
          onPress={onIconPress}
        />
      </SafeAreaView>
    </View>
  );
}

export default List;
