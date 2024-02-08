import React from 'react';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Props} from './models';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, InputText} from '@src/common/presenter/components';
import {Controller, useForm} from 'react-hook-form';
import {UserEntity} from '@src/users/domain/models';
import {yupResolver} from '@hookform/resolvers/yup';
import {USER_INITAL_VALUE} from '@src/users/presenter/constants';
import {addUserSchemeValidation} from '@src/users/presenter/validations';

const AddUser = ({isVisible, onClose, onSubmit}: Props) => {
  const insets = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    trigger,
    reset,
    formState: {isValid, errors},
  } = useForm<UserEntity>({
    resolver: yupResolver(addUserSchemeValidation) as any,
    mode: 'onChange',
    defaultValues: USER_INITAL_VALUE,
  });

  const handleOnSubmit = (data: UserEntity) => {
    onSubmit(data);
    onClose();
    reset();
  };

  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <View style={styles.containerModal}>
        <View
          style={[
            styles.backgroundModal,
            insets.top < 30 && styles.backgroundDevicesWithoutNotch,
          ]}
        />
        <View style={styles.container}>
          <View style={styles.ctnTitle}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.buttonClose}
              onPress={() => {
                onClose();
                reset();
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Add User</Text>
          </View>
          <ScrollView
            bounces={false}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}>
            <View style={styles.ctnList}>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <InputText
                    containerStyles={styles.ctnInput}
                    value={value}
                    label={'First Name'}
                    placeholder={'First Name'}
                    onBlur={() => {
                      trigger('firstName');
                      onBlur();
                    }}
                    onChangeText={onChange}
                    {...(!!errors.firstName?.message && {
                      error: {
                        isVisible: true,
                        label: errors.firstName?.message,
                      },
                    })}
                  />
                )}
                name="firstName"
                rules={{required: true}}
              />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <InputText
                    containerStyles={styles.ctnInput}
                    value={value}
                    label={'Last Name'}
                    placeholder={'Last Name'}
                    onBlur={() => {
                      trigger('lastName');
                      onBlur();
                    }}
                    onChangeText={onChange}
                    {...(!!errors.lastName?.message && {
                      error: {
                        isVisible: true,
                        label: errors.lastName?.message,
                      },
                    })}
                  />
                )}
                name="lastName"
                rules={{required: true}}
              />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <InputText
                    containerStyles={styles.ctnInput}
                    value={value}
                    label={'Email'}
                    placeholder={'Email'}
                    onBlur={() => {
                      trigger('email');
                      onBlur();
                    }}
                    onChangeText={onChange}
                    {...(!!errors.email?.message && {
                      error: {
                        isVisible: true,
                        label: errors.email?.message,
                      },
                    })}
                  />
                )}
                name="email"
                rules={{required: true}}
              />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <InputText
                    containerStyles={styles.ctnInput}
                    value={value}
                    label={'Phone'}
                    placeholder={'Phone'}
                    onBlur={() => {
                      trigger('phone');
                      onBlur();
                    }}
                    onChangeText={onChange}
                    {...(!!errors.phone?.message && {
                      error: {
                        isVisible: true,
                        label: errors.phone?.message,
                      },
                    })}
                  />
                )}
                name="phone"
                rules={{required: false}}
              />

              <Button
                disabled={!isValid}
                text={'Add user'}
                onPress={handleSubmit(handleOnSubmit)}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddUser;
