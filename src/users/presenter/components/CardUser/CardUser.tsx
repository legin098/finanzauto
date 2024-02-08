import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Props} from './models';
import {styles} from './styles';

const CardUser = ({user, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: user.picture}} style={styles.image} />
      <View>
        <Text>{`${user.title}. ${user.firstName} ${user.lastName}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardUser;
