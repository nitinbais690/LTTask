import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import AddDogInfo from 'components/organisms/Forms/AddDogInfo';
import { useMutation } from 'react-query';
import { addNewDogInfo } from 'services/dogs';
import { DogType } from 'server/mirage';
import { useNavigation } from '@react-navigation/native';
import { RootRoutesProps } from '_navigation/routes';
import { SCALE_12 } from '_theme/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCALE_12,
  },
});

function AddDogInfoScreen() {
  const navigation = useNavigation<RootRoutesProps>();

  const mutation = useMutation((addNewDog: DogType) => addNewDogInfo(addNewDog));
  const { isLoading, isSuccess } = mutation;

  const onSubmit = async (data: DogType) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.goBack();
    }
  }, [isSuccess]);

  return (
    <View style={styles.container}>
      <AddDogInfo loading={isLoading} onSubmit={onSubmit} />
    </View>
  );
}

export default AddDogInfoScreen;
