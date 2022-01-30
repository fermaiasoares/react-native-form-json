import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Container } from './styles';

import { CheckBoxSingle } from '../../CheckBoxSingle';
import { IFieldSchema } from 'schemas/IFormSchema';

interface IProps {
  control: Control;
  field: IFieldSchema;
}

export function FormCheckBoxSingle({ field, control }: IProps) {
  return (
    <Container>
      <Controller 
        name={field.name}
        control={control}
        render={({field: {value, onChange}}) => (
          <CheckBoxSingle
            value={value}
            onValueChange={onChange}
          />
        )}
      />
    </Container>
  );
}