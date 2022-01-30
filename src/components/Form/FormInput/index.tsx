import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Container } from './styles';

import { IFieldSchema } from 'schemas/IFormSchema';

import { Input } from './../../Input';

interface IProps {
  control: Control;
  field: IFieldSchema;
  shownInputIcons: boolean;
}

export function FormInput({ control, field, shownInputIcons }: IProps){
  return (
    <Container>
      <Controller 
        name={field.name}
        control={control}
        render={({ field: { onChange, value }}) => (
          <Input
            field={field}
            value={value}
            onChangeText={onChange}
            shownInputIcons={shownInputIcons}
          />
        )}
      />
    </Container>
  );
}