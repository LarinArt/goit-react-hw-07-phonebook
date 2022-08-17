import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: ${p => p.theme.fontSize.xxl};
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 2px;

  color: ${p => p.theme.colors.mainTextColor};

  padding: 40px 0;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 270px;
  height: 40px;
  margin: 50px auto;

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
`;

export const ButtonText = styled.span`
  margin-right: 10px;
`;
