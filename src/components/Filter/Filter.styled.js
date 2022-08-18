import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.mainTextColor};
  margin-bottom: 5px;
`;
