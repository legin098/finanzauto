import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Props} from './models';
import {styles} from './styles';
import {INITIAL_STATE_ERROR} from '@common/presenter/constants';
import {ErrorMessage} from '../..';

const InputText = ({
  containerStyles,
  inputStyles,
  value = '',
  label = '',
  placeholder = '',
  error = INITIAL_STATE_ERROR,
  ...props
}: Props) => {
  return (
    <View testID="container" style={[styles.container, containerStyles]}>
      {label !== '' && (
        <Text testID="labelInput" style={styles.label}>
          {label}
        </Text>
      )}
      <TextInput
        {...props}
        testID="input"
        value={value}
        {...(placeholder !== '' && {
          placeholder: placeholder || '',
        })}
        style={[
          styles.input,
          inputStyles,
          error.isVisible && styles.inputError,
        ]}
      />
      <ErrorMessage
        testID="errorMessage"
        containerStyles={styles.ctnError}
        isVisible={error.isVisible}
        label={error?.label}
      />
    </View>
  );
};
export default InputText;
