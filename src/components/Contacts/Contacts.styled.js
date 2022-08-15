import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const List = styled.ul`
  @media (${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  :last-child {
    margin-bottom: 0;
  }

  @media (${breakpoints.tablet}) {
    width: calc((100% - 4 * 10px) / 2);
    margin: 10px;
  }

  @media (${breakpoints.laptop}) {
    width: calc((100% - 6 * 10px) / 3);
  }
`;
