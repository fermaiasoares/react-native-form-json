import React, { useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, TextInput, Icon } from './styles';

import { IFieldSchema } from '../../schemas/IFormSchema';

interface IProps  extends TextInputProps {
  shownInputIcons: boolean;
  field: IFieldSchema;
}

export function Input({
  field,
  shownInputIcons = true,
  ...rest
}: IProps) {
  const [showText, setShowText] = useState(field.secureTextEntry ? true : false);

  function handleShowText() {
    setShowText(!showText);
  }

  return (
    <Container nopadding={!shownInputIcons}>
      { field.icon && shownInputIcons && <Icon name={field.icon} /> }
      <TextInput
        keyboardType={field.keyboardType}
        placeholder={field.placeholder}
        secureTextEntry={showText}
        {...rest}
      />
      { field.secureTextEntry && (
        <View onTouchEnd={handleShowText}>
          <Icon name={showText ? 'eye' : 'eye-off'} />
        </View>
      ) }
    </Container>
  );
}