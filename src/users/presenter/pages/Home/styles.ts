import {COLORS} from '@src/common/presenter/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: COLORS.common.white,
  },
  ctnFlatList: {
    marginTop: width * 0.05,
    paddingHorizontal: '6%',
    paddingBottom: height * 0.12,
  },
  ctnButton: {
    position: 'absolute',
    bottom: width * 0.05,
    right: width * 0.05,
    height: width * 0.125,
    width: 'auto',
    paddingHorizontal: width * 0.04,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    zIndex: 10,
  },
  separator: {
    margin: width * 0.0075,
  },
});
