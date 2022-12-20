import React from 'react';
import { Pressable } from 'react-native';

const Button = (props) => {
  const { children, ...restProps } = props;
  return <Pressable {...restProps}>{children}</Pressable>;
};

export default Button;
