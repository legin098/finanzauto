import {COLORS} from '@src/common/presenter/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    borderColor: COLORS.common.gray,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 10,
  },
});
