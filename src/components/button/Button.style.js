import { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 24,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 40,
  },

  secondary: {
    backgroundColor: colors.black,
  },

  text: {
    color: colors.white,
    fontFamily: 'KulimPark-Bold',
  },
});
