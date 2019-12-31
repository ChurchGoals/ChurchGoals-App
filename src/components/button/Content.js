import React from 'react';
import { Text } from 'react-native';
import Styles from './Button.style';

function ButtonContent({ children }) {
  if (typeof children !== 'string') return children;

  return (
    <Text style={Styles.text}>
      {children}
    </Text>
  );
}

export default ButtonContent;
