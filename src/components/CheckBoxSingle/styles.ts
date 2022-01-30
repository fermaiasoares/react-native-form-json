import styled from 'styled-components/native';
import Checkbox from 'expo-checkbox';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const CheckBox = styled(Checkbox)`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`

export const Title = styled.Text`
  font-size: 16px;
`;
