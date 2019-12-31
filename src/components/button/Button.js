import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Content from './Content';
import Styles from './Button.style';

function Button({ children, type }) {
  const containerStyle = [Styles.container];
  if (type === 'secondary') {
    containerStyle.push(Styles.secondary);
  }

  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={0.7}
    >
      <Content>{children}</Content>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
