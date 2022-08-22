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
