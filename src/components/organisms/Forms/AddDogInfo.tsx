import { StyleSheet } from 'react-native';
import React, { Fragment, useReducer } from 'react';
import Input from 'components/atoms/Input';
import locales from 'utils/locals';
import testIDS from 'utils/testIDS';
import { DogType } from 'server/mirage';
import Button from 'components/molecules/Button';
import { SCALE_18 } from '_theme/spacing';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: SCALE_18,
  },
});

enum DogActionKind {
  NAME = 'NAME',
  AGE = 'AGE',
  BREED = 'BREED',
  COLOR = 'COLOR',
}

interface DogAction {
  type: DogActionKind;
  payload: string;
}

function dogsReducer(state: DogType, { type, payload }: DogAction): DogType {
  switch (type) {
    case DogActionKind.NAME:
      return {
        ...state,
        name: payload,
      };
    case DogActionKind.AGE:
      return {
        ...state,
        age: payload,
      };
    case DogActionKind.COLOR:
      return {
        ...state,
        color: payload,
      };
    case DogActionKind.BREED:
      return {
        ...state,
        breed: payload,
      };
    default:
      return state;
  }
}

const DogInitial: DogType = {
  name: '',
  age: '0',
  breed: '',
  color: '',
};

type AddDogInfoProps = {
  loading: boolean;
  onSubmit: (value: DogType) => void;
};

const AddDogInfo = ({ onSubmit, loading }: AddDogInfoProps) => {
  const [state, dispatch] = useReducer(dogsReducer, DogInitial);

  const inputChange = (field: DogAction) => dispatch(field);

  const onSubmitPress = () => {
    onSubmit(state);
  };

  return (
    <Fragment>
      <Input
        value={state.name}
        testID={testIDS.name}
        onChangeText={(name: string) => inputChange({ type: DogActionKind.NAME, payload: name })}
        placeholder={locales.name}
        style={styles.inputContainer}
      />
      <Input
        value={state.age as string}
        onChangeText={(age: string) => inputChange({ type: DogActionKind.AGE, payload: age })}
        placeholder={locales.age}
        testID={testIDS.age}
        keyboardType={'numeric'}
        maxLength={2}
        style={styles.inputContainer}
      />
      <Input
        value={state.color}
        onChangeText={(color: string) => inputChange({ type: DogActionKind.COLOR, payload: color })}
        placeholder={locales.color}
        testID={testIDS.color}
        style={styles.inputContainer}
      />
      <Input
        value={state.breed}
        onChangeText={(breed: string) => inputChange({ type: DogActionKind.BREED, payload: breed })}
        placeholder={locales.breed}
        testID={testIDS.breed}
        style={styles.inputContainer}
      />

      <Button
        testID={testIDS.submitButtonPress}
        loading={loading}
        title={locales.addNewDog}
        onPress={onSubmitPress}
      />
    </Fragment>
  );
};

export default AddDogInfo;
