import styled from 'styled-components/native';

interface IFieldContainerProps {
  length?: number;
}

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-flow: wrap;
`;

export const Section = styled.View`
  width: 100%;
  border-bottom-color: #D35;
  border-bottom-width: 1px;
  padding-bottom: 12px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #D35;
`;

export const FieldContainer = styled.View<IFieldContainerProps>`
  width: ${props => props.length ? `${98 / props.length}%` : '100%'};
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  text-align: left;
  font-size: 14px;
  width: 100%;
  margin-left: 8px;
  margin-bottom: 6px;
`;

export const TextInput = styled.TextInput`
  background-color: #fff;
  width: 100%;
  height: 50px;
  font-size: 16px;
`;
