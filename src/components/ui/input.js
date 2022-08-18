import styled from 'styled-components';

export const Input = styled.input`
  width: 270px;
  height: 40px;
  padding: 0 10px 0 10px;

  border: 1px solid ${p => p.theme.colors.secondBgColor};
  outline: none;

  color: ${p => p.theme.colors.mainTextColor};
  font-size: 14px;

  :focus {
    border-color: ${p => p.theme.colors.accentBgColor};
  }

  ::placeholder {
    font-size: ${p => p.theme.fontSize.xs};
    color: ${p => p.theme.colors.mainTextColor};
  }
`;
