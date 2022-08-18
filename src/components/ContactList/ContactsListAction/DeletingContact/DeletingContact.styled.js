import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSize.l};
  margin-bottom: 30px;
`;

export const Name = styled.span`
  color: red;
`;

export const List = styled.ul`
  display: flex;
  justify-content: right;
`;

export const Item = styled.li`
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;

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

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;

  background-color: red;
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
