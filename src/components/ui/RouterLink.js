import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RouterLink = styled(Link)`
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

export const LinkText = styled.span`
  margin-right: 10px;
`;
