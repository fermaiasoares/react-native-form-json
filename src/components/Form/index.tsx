import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import { Container, FieldContainer, Label, Section, Title } from './styles';

import { IFormSchema } from '../../schemas/IFormSchema';

import { Input } from './../Input';

interface IProps {
  formData?: Object;
  schema: IFormSchema;
}

export function Form({ schema, formData }: IProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        { schema.shownTitle && schema.title && (
          <Section>
            <Title>{schema.title}</Title>
          </Section>
        )}

        { schema && schema.fields && schema.fields.map(field => 
          <FieldContainer key={field.name} length={field.colLenght}>
            { field.label && schema.shownLabels && <Label>{field.label} {field.required ? '*' : ''}</Label> }
            { ['email', 'password', 'text', 'number'].includes(field.type) && 
              <Input
                shownInputIcons={schema.shownInputIcons}
                field={field}
                value={formData && formData[field.name]}
              />
            }
          </FieldContainer>
        )}
      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}