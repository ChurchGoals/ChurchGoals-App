import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
  },

  title: {
    color: colors.black,
    fontSize: 100,
    fontFamily: 'KulimPark-Light',
    height: 100,
    textAlign: 'center',
  },

  notChurch: {
    fontFamily: 'InriaSerif-Regular',
    color: colors.black,
    paddingHorizontal: 40,
    paddingVertical: 20,
    textAlign: 'center',
  },

  churchLink: {
    fontFamily: 'InriaSerif-Regular',
    color: '#0000FF',
    paddingHorizontal: 40,
    textAlign: 'center',
  },
});
