import React from 'react';
import { View } from 'react-native';

import { Form } from './src/components/Form';
import { IFormSchema } from 'schemas/IFormSchema';

export default function App() {

  const formSchema: IFormSchema = {
    name: 'login-form',
    title: '1 - Formulário de Login',
    shownTitle: true,
    shownLabels: true,
    shownInputIcons: true,
    fields: [
      {
        name: 'nome',
        type: 'text',
        keyboardType: 'default',
        label: 'Nome Completo',
        placeholder: 'Nome Completo',
        icon: 'user',
        validations: {
          required: true,
          minLength: 3,
          maxLength: 10
        }
      },
      {
        name: 'email',
        type: 'text',
        keyboardType: 'email-address',
        label: 'E-mail',
        placeholder: 'Digite seu email',
        icon: 'mail',
        validations: {
          required: true,
          minLength: 3,
          maxLength: 10
        }
      },
      {
        name: 'password',
        type: 'password',
        keyboardType: 'default',
        label: 'Senha',
        placeholder: 'Digite sua senha',
        icon: 'lock',
        secureTextEntry: true,
        colLenght: 2,
        validations: {
          required: true,
          minLength: 3,
          maxLength: 10,
          pattern: {
            regex: '/^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/',
            message: 'A senha deve conter pelo menos um caracter especial, um número e uma letra maiúscula.'
          }
        }
      },
      {
        name: 'confirmPassword',
        type: 'password',
        keyboardType: 'default',
        label: 'Confirmar Senha',
        placeholder: 'Confirme sua senha',
        icon: 'lock',
        secureTextEntry: true,
        colLenght: 2,
        validations: {
          required: true,
          confirmed: 'password',
          minLength: 3,
          maxLength: 10
        }
      }
    ]
  };

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30
    }}>
      <Form
        schema={formSchema}
      />
    </View>
  );
}
