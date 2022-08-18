import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContactsNavLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSize.l};
  font-weight: ${p => p.theme.fontWeights.semibold};
  text-decoration: none;
  color: black;
  border-bottom: 3px solid currentColor;

  &.active {
    color: ${p => p.theme.colors.accentTextColor};
  }

  &:last-child {
    margin-left: 35px;
  }
`;
