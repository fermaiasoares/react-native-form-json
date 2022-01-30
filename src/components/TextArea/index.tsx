import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextAreaInput } from './styles';

import { IFieldSchema } from 'schemas/IFormSchema';

interface IProps extends TextInputProps {
  field: IFieldSchema;
}

export function TextArea({ field, ...rest }: IProps) {
  return (
    <Container>
      <TextAreaInput
        multiline
        numberOfLines={4}
        textAlignVertical='top'
        placeholder={field.placeholder}
        {...rest}
      />
    </Container>
  );
}