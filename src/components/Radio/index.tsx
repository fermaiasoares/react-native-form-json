import React, { useState } from 'react';
import { IFieldSchema } from 'schemas/IFormSchema';

import { Container, RadioGroup, RadioItem } from './styles';

interface IProps {
  field: IFieldSchema;
  selected?: string;
  onSelected?: (value: string) => void;
}

export function Radio({ field, selected, onSelected }: IProps) {
  return (
    <Container>
      <RadioGroup
        selected={selected}
        onSelected={onSelected}
      >
        { field.selectItems && field.selectItems.map((item, index) => 
          <RadioItem key={index + 1} label={item.label} value={item.value} />
        )}
      </RadioGroup>
    </Container>
  );
}