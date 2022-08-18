import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSize.xl};
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.mainTextColor};
  margin-bottom: 30px;
`;
