import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Container } from './styles';

import { ISelectProps, Select } from '../../Select/index';
import { IFieldSchema } from 'schemas/IFormSchema';

interface IProps extends ISelectProps {
  control: Control;
  error: string;
  field: IFieldSchema;
}

export function FormSelect({
  control,
  error,
  field,
  ...rest
}: IProps) {
  return (
    <Container>
      <Controller
        name={field.name} 
        control={control}
        render={({ field: { onChange, value }}) => (
          <Select
            field={field}
            selectedValue={value}
            onValueChange={onChange}
            error={error}
            {...rest}
          />
        )}
      />
    </Container>
  );
}