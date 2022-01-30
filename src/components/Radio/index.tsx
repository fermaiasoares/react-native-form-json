import React, { useState } from 'react';
import { IFieldSchema } from 'schemas/IFormSchema';

import { Container, RadioGroup, RadioItem } from './styles';

interface IProps {
  field: IFieldSchema;
}

export function Radio({ field }: IProps) {
  const [current, setCurrent] = useState('');

  return (
    <Container>
      <RadioGroup
        selected={current}
        onSelected={setCurrent}
      >
        { field.selectItems && field.selectItems.map((item, index) => 
          <RadioItem key={index + 1} label={item.label} value={item.value} />
        )}
      </RadioGroup>
    </Container>
  );
}