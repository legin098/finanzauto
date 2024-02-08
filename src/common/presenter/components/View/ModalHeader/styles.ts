import {StyleSheet} from 'react-native';
import {COLORS} from '@common/presenter/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  ctnButtonBack: {
    position: 'absolute',
    zIndex: 10,
  },
  close: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.5,
    color: COLORS.common.black,
    textAlign: 'center',
  },
  ctnChildren: {
    position: 'absolute',
    right: 0,
    zIndex: 10,
  },
});
