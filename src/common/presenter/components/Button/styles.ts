import {COLORS} from '@src/common/presenter/theme';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const SIZE_HEIGHT = width * 0.12;

export const styles = StyleSheet.create({
  container: {
    height: SIZE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 30,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.common.black,
  },
  iconLeft: {
    marginLeft: width * 0.02,
  },
  iconRight: {
    marginRight: width * 0.02,
  },
});
