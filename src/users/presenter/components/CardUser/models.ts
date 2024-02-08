import {UserEntity} from '@src/users/domain/models';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  user: UserEntity;
  onPress: () => void;
};
