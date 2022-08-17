import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: -10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${p => p.theme.colors.accentBgColor};

  :last-child {
    margin-bottom: 0;
  }
`;
