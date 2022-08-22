import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 45%;
  height: 30px;

  border: none;
  background-color: #2b2b2b;
  color: ${p => p.theme.colors.secondTextColor};

  cursor: pointer;
  transition: background-color ${p => p.theme.colors.mainAnimationHover};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentBgColor};
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 45%;
  height: 30px;

  border: none;
  background-color: #2b2b2b;
  color: ${p => p.theme.colors.secondTextColor};

  cursor: pointer;
  transition: background-color ${p => p.theme.colors.mainAnimationHover};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentBgColor};
  }
`;
