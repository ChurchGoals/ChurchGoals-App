import { StyleSheet } from 'react-native';
import Color from '@alchemyalcove/color-calculator';
import colors from './colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
  },

  imageContainer: {
    marginBottom: 50,
  },

  image: {
    aspectRatio: 1,
    height: 400,
    width: '100%',
  },

  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingBottom: 20,
  },

  title: {
    color: new Color(colors.black).darken(10).toHex(),
    fontSize: 100,
    fontFamily: 'KulimPark-Light',
    height: 100,
    textAlign: 'center',
  },

  or: {
    marginVertical: 18,
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
    marginBottom: 50,
    textAlign: 'center',
  },
});
