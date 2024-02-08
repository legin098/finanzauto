import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Props} from './models';
import {styles} from './styles';

const Header = ({containerStyles, title = '', onBack, children}: Props) => (
  <View style={[styles.container, containerStyles && containerStyles]}>
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.ctnButtonBack}
      onPress={onBack}>
      <Text style={styles.close}>Close</Text>
    </TouchableOpacity>
    <Text style={styles.title} numberOfLines={2}>
      {title}
    </Text>
    <View style={styles.ctnChildren}>{children}</View>
  </View>
);

export default Header;
