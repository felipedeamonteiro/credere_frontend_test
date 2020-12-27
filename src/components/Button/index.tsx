import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/**
 * A standard button component to be used many times in the application.
 * It has its style, but its possible to get it and change the original style,
 * if needed.
 */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
