import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    width,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  backgroundModal: {
    height: height * 0.08,
    width: '100%',
  },
  backgroundDevicesWithoutNotch: {
    height: height * 0.04,
  },
  container: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: COLORS.common.white_light,
    paddingTop: width * 0.06,
  },
  ctnTitle: {
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.03,
    marginHorizontal: '6%',
  },
  buttonClose: {
    position: 'absolute',
    left: 0,
    zIndex: 10,
  },
  title: {
    fontWeight: '700',
    color: COLORS.common.black,
    fontSize: 18,
  },
  ctnList: {
    width: '100%',
    paddingHorizontal: '6%',
    paddingTop: width * 0.1,
    paddingBottom: width * 0.18,
  },
  ctnInput: {
    marginBottom: width * 0.07,
  },
  sectionTitleDueDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.07,
  },
  subtitle: {
    fontWeight: '700',
    color: COLORS.common.black,
    fontSize: 18,
  },
  ctnDueDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.07,
  },
  ctnButtonDate: {
    borderRadius: 15,
    width: width * 0.31,
    height: width * 0.12,
  },
  ctnButtonTime: {
    borderRadius: 15,
    width: width * 0.35,
    height: width * 0.15,
  },
  defaultColorButton: {
    backgroundColor: COLORS.common.yellow,
  },
  textButtonStartDate: {
    fontSize: 15,
    fontWeight: '500',
  },
  sectionTitleReminder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.07,
  },
  ctnReminderList: {
    marginTop: -width * 0.04,
    marginBottom: width * 0.03,
  },
  ctnSectionParticipants: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.03,
  },
  sectionTitle: {
    color: COLORS.common.black,
    fontWeight: '700',
    marginBottom: width * 0.03,
    fontSize: 18,
  },
  sectionParticipantsTitle: {
    flex: 1,
    marginRight: 8,
  },
  participantsTitle: {
    marginBottom: 0,
  },
  btnAdd: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.common.gray_medium,
  },
  btnPlus: {
    backgroundColor: COLORS.common.yellow,
  },
  ctnParticipantsList: {
    marginTop: width * 0.03,
  },
  ctnInputNotes: {
    marginTop: width * 0.07,
    marginBottom: width * 0.1,
  },
  ctnButtonReminder: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctnReminder: {
    width: '100%',
    marginBottom: width * 0.06,
  },
  ctnReminderError: {
    marginTop: 8,
  },
  textAddReminder: {
    marginLeft: width * 0.02,
    color: COLORS.common.black,
    fontWeight: '500',
  },
  messageParticipants: {
    fontWeight: '500',
    color: COLORS.common.gray_medium,
    fontSize: 12,
  },
});
