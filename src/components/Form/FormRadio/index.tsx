import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { IFieldSchema } from 'schemas/IFormSchema';

import { Container } from './styles';

import { Radio } from './../../Radio';

interface IProps {
  control: Control;
  field: IFieldSchema;
  error: string;
}

export function FormRadio({
  control,
  field,
  error
}: IProps) {

  return (
    <Container>
      <Controller
        name={field.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Radio 
            field={field}
            selected={value}
            onSelected={onChange}
          />
        )}
      />
    </Container>
  );
}