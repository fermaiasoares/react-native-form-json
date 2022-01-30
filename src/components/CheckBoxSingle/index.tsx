import React, { useState, useEffect } from 'react';
import { CheckboxProps } from 'expo-checkbox';

import { Container, CheckBox, Title } from './styles';

interface IProps extends CheckboxProps {}

export function CheckBoxSingle({
  value,
  onChange,
  ...rest
}: IProps) {
  const [isChecked, setIsChecked] = useState(value);

  useEffect(() => {
    setIsChecked(value)
  }, [value]);

  return (
    <Container>
      <CheckBox
        color={isChecked ? '#d35' : '#d3d3d3'}
        value={value}
        {...rest}
      />

      <Title>{isChecked ? 'Sim' : 'Não'}</Title>
    </Container>
  );
}