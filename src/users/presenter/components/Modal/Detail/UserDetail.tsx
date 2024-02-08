import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Props} from './models';
import {styles} from './styles';
import {Button, ModalHeader} from '@src/common/presenter/components';
import {USER_INITAL_VALUE} from '@src/users/presenter/constants';

const ModalUserDetail = ({
  isVisible = false,
  user = USER_INITAL_VALUE,
  onDelete,
  onClose,
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <View style={styles.ctnModal}>
        <TouchableOpacity style={styles.ctnBackground} onPress={onClose} />
        <View
          style={[
            styles.container,
            insets.top < 30 && styles.ctnDevicesWithoutNotch,
          ]}>
          <ModalHeader onBack={onClose} title="User Detail">
            <TouchableOpacity activeOpacity={0.9} onPress={onDelete}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </ModalHeader>
          <Image source={{uri: user.picture ?? ''}} style={styles.image} />
          <Text style={styles.subtitle}>Information</Text>
          <Text style={styles.text}>{`Title: ${user?.title}`}</Text>
          <Text
            style={
              styles.text
            }>{`Full Name: ${user?.firstName} ${user?.lastName}`}</Text>
          <Text style={styles.text}>{`Gender: ${user?.gender}`}</Text>
          <Text style={styles.text}>{`Email: ${user?.email}`}</Text>
          <Text style={styles.text}>{`Phone: ${user?.phone}`}</Text>
          <Text style={styles.subtitle}>Location</Text>
          <Text style={styles.text}>{`City: ${user?.location?.city}`}</Text>
          <Text style={styles.text}>{`State: ${user?.location?.state}`}</Text>
          <Text
            style={styles.text}>{`Country: ${user?.location?.country}`}</Text>
          <Text
            style={styles.text}>{`Postcode: ${user?.location?.timezone}`}</Text>
          <Button
            text="Edit"
            onPress={() => console.log('Edit')}
            containerStyles={styles.ctnButton}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalUserDetail;
