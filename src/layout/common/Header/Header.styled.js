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
