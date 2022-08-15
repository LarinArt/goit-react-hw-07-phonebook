import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.mainTextColor};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 300px;
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
