import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background: #f3f3f3;
  border-radius: 8px;
  align-items: center;
  padding: 0 12px;
`;

export const SelectInput = styled(Picker).attrs({
  dropdownIconColor: '#f3f3f3',
  dropdownIconRippleColor: '#f3f3f3'
})`
  flex: 1;
`;

export const SelectIcon = styled(Feather)`
  color: #d35;
  font-size: 18px;
`;
