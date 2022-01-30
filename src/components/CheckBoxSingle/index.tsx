import React, { useState } from 'react';

import { Container, CheckBox, Title } from './styles';

export function CheckBoxSingle() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container onTouchStart={() => setIsChecked(!isChecked)}>
      <CheckBox
        value={isChecked}
        color={isChecked ? '#d35' : '#d3d3d3'}
      />

      <Title>{isChecked ? 'Sim' : 'Não'}</Title>
    </Container>
  );
}