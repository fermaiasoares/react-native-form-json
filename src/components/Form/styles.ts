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
  width: ${({ length }) => length ? `${(length === 1 ? 100 : 98) / length}%` : '100%'};
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  text-align: left;
  font-size: 14px;
  width: 100%;
  margin-bottom: 6px;
`;