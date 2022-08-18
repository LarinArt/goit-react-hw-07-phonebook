import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 250px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.mainTextColor};
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.accentTextColor};
  font-size: ${p => p.theme.fontSize.s};
  margin-right: 5px;
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSize.l};
  text-align: center;

  background-color: ${p => p.theme.colors.accentBgColor};
  color: ${p => p.theme.colors.secondTextColor};

  padding: 10px;
  margin-bottom: 15px;
`;

export const Number = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 48%;
  height: 30px;
  padding: 10px;

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

export const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 48%;
  height: 30px;
  padding: 10px;

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
