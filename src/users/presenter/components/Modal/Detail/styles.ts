import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  ctnModal: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ctnBackground: {
    flex: 1,
    width: '100%',
  },
  container: {
    width,
    height: height * 0.92,
    paddingHorizontal: '6%',
    paddingVertical: width * 0.07,
    backgroundColor: COLORS.common.white_light,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  ctnDevicesWithoutNotch: {
    height: height * 0.96,
  },
  delete: {
    fontSize: 18,
    color: COLORS.common.red,
    fontWeight: '500',
    lineHeight: 21.5,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: width * 0.1,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.common.black,
    fontWeight: '600',
    lineHeight: 21.5,
    marginTop: width * 0.075,
    marginBottom: width * 0.04,
  },
  text: {
    fontSize: 16,
    color: COLORS.common.black,
    lineHeight: 21.5,
  },
  ctnButton: {
    marginTop: width * 0.1,
  },
});
