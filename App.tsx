import React from 'react';
import { ScrollView, View } from 'react-native';

import { Form } from './src/components/Form';
import { IFormSchema } from 'schemas/IFormSchema';

export default function App() {

  const formSchema: IFormSchema = {
    name: 'login-form',
    title: '1 - Formulário de Login',
    shownTitle: false,
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
        validations: {
          required: true,
          minLength: 3,
          maxLength: 10,
          pattern: {
            regex: /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
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
        validations: {
          required: true,
          confirmed: 'password',
          minLength: 3,
          maxLength: 10
        }
      },
      {
        name: 'terms',
        type: 'checkbox',
        checkBoxGroup: false,
        label: 'Concorda com os termos de uso',
        validations: {
          required: true
        }
      },
      {
        name: 'rememberMe',
        type: 'checkbox',
        checkBoxGroup: false,
        label: 'Lembrar-me',
        validations: {
          required: true
        }
      },
      {
        name: 'escolha',
        type: 'radio',
        label: 'Escolha uma opção',
        selectItems: [
          { value: '1', label: 'Sim' },
          { value: '2', label: 'Não' },
          { value: '3', label: 'Não Informado' }
        ],
        validations: {
          required: true
        }
      },
      {
        name: 'escolha',
        type: 'select',
        label: 'Escolha uma opção',
        placeholder: 'Escolha uma opção',
        icon: 'tag',
        selectItems: [
          { value: '1', label: 'Sim' },
          { value: '2', label: 'Não' },
          { value: '3', label: 'Não Informado' }
        ],
        validations: {
          required: true
        }
      }
    ]
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          paddingVertical: 40
        }}
      >
        <Form
          schema={formSchema}
        />
      </View>
    </ScrollView>
  );
}
