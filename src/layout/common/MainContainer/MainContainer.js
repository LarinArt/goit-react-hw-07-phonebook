import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 700px;
  width: 500px;

  margin: 50px auto;
  padding: 50px;
  box-shadow: ${({ theme }) => theme.colors.mainShadow};
`;
