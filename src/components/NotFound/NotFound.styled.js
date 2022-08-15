import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div``;

export const Title = styled.p`
  font-size: ${p => p.theme.fontSize.xxxl};
  font-weight: ${p => p.theme.fontWeights.semibold};
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: underline;
  color: ${p => p.theme.colors.accentTextColor};
`;
