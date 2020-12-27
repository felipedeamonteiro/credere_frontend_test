import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

/**
 * A standard Input component to be used many times in the application.
 * It has its style, but its possible to get it and change the original style,
 * if needed.
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  updateDefaultValue?: string;
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  label,
  name,
  placeholder,
  updateDefaultValue,
  ...rest
}) => {
  // State constants to control the state of the value of the input
  // useRef from React and useField from unform used to control forms data
  const [defaultValueState, setDefaultValueState] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  // unform configuration of input data
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    if (updateDefaultValue) {
      setDefaultValueState(updateDefaultValue);
    }
  }, [fieldName, registerField, updateDefaultValue]);

  return (
    <Container isErrored={!!error} isDisabled={disabled}>
      <input
        ref={inputRef}
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        value={defaultValueState}
        onChange={e => setDefaultValueState(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') e.preventDefault();
        }}
        {...rest}
      />

      {label ? <label htmlFor={name}>{label}</label> : ''}
      <span style={{ color: '#c53030' }}>{error}</span>
    </Container>
  );
};

export default Input;
