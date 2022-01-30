import styled from 'styled-components/native';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';

export const Container = styled.View`
  width: 100%;
  flex-wrap: wrap;
`;

export const RadioGroup = styled(RadioButtonGroup).attrs({
  radioBackground: '#d35',
  size: 32,
  radioStyle: {
    borderWidth: 1
  },
  containerOptionStyle: {
    marginRight: 16,
    marginBottom: 8
  },
  labelStyle: {
    fontSize: 16,
  },
  containerStyle: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})``;

export const RadioItem = styled(RadioButtonItem)`
`;
