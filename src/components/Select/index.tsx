import React from 'react';
import { PickerProps, PickerItemProps } from 'react-native';

import { Container, SelectIcon, SelectInput } from './styles';

import { IFieldSchema } from 'schemas/IFormSchema';

interface IProps extends PickerProps {
  field: IFieldSchema;
}

export function Select({ field, ...rest }: IProps) {
  return (
    <Container>

      {field.icon && 
        <SelectIcon name={field.icon} />
      }

      <SelectInput
        mode="dialog"
        {...rest}
      >
        <SelectInput.Item 
          label={field.placeholder || 'Selecione'} 
          value='' 
          color='' 
        />

        { field.selectItems && field.selectItems.map((item, index) => 
          <SelectInput.Item 
            key={index + 1} 
            label={item.label} 
            value={item.value} 
            color={item.color} 
          />
        )}

      </SelectInput>

      <SelectIcon name="chevron-down" />
    </Container>
  );
}