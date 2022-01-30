import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';

import { Container, FieldContainer, Label, Section, Title } from './styles';

import { IFormSchema } from '../../schemas/IFormSchema';

import { Input } from './../Input';
import { TextArea } from './../TextArea';
import { FormSelect } from './FormSelect';
import { FormRadio } from './FormRadio';
import { FormCheckBoxSingle } from './FormCheckBoxSingle';
import { FormInput } from './FormInput';

interface IProps {
  formData?: Object;
  schema: IFormSchema;
}

export function Form({ schema, formData }: IProps) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  console.log(formData);

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

          { schema && schema.fields && schema.fields.map((field, index) => 
            <FieldContainer key={index + 1} length={field.colLenght}>
              { field.label && schema.shownLabels && <Label>{field.label} {field.required ? '*' : ''}</Label> }
              { ['email', 'password', 'text', 'number'].includes(field.type) && 
                <FormInput
                  control={control}
                  shownInputIcons={schema.shownInputIcons}
                  field={field}
                />
              }

              { ['checkbox'].includes(field.type) && 
                <FormCheckBoxSingle 
                  control={control}
                  field={field}
                />
              }

              { ['radio'].includes(field.type) && 
                <FormRadio 
                  control={control}
                  field={field}
                  error={errors[field.name] && errors[field.name].message}
                />
              }

              { ['select'].includes(field.type) && 
                <FormSelect
                  control={control}
                  field={field}
                  error={errors[field.name] && errors[field.name].message}
                />
              }

              { ['textarea'].includes(field.type) && 
                <TextArea 
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