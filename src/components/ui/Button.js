import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;

  background-color: ${p => p.theme.colors.secondBgColor};
  color: ${p => p.theme.colors.secondTextColor};
  font-family: inherit;
  border: none;

  cursor: pointer;
  transition: background-color ${p => p.theme.colors.mainAnimationHover};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentBgColor};
  }

  @media (${breakpoints.tablet}) {
    width: 270px;
  }
`;
