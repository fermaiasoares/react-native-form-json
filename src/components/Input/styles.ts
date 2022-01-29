import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface IContainerProps {
  nopadding: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  flex-direction: row;
  border-radius: 8px;
  background-color: #f3f3f3;
  padding: 12px ${props => props.nopadding ? 8 : 12}px;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #d35;
  margin: 0 8px;
`

export const Icon = styled(Feather)`
  color: #d35;
  font-size: 18px;
`;
