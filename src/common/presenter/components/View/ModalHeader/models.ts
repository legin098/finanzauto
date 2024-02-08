import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  testID?: string;
  containerStyles?: StyleProp<ViewStyle>;
  title?: string;
  children?: React.ReactNode;
  onBack: () => void;
};
