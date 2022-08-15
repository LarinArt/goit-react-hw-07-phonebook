import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const ContainerWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 50px 10px 50px 10px;
  /* width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; */

  @media (${breakpoints.tablet}) {
    width: 768px;
  }
  @media (${breakpoints.laptop}) {
    width: 1440px;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSize.xl};
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.mainTextColor};

  margin-bottom: 30px;
`;
