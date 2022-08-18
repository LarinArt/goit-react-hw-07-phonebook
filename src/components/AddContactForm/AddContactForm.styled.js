import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  height: 40px;
  padding: 0 10px 0 10px;

  border: 1px solid ${p => p.theme.colors.secondBgColor};
  outline: none;

  color: ${p => p.theme.colors.mainTextColor};
  font-size: ${p => p.theme.fontSize.s};

  :focus {
    border-color: ${p => p.theme.colors.accentBgColor};
  }

  ::placeholder {
    font-size: ${p => p.theme.fontSize.xs};
    color: ${p => p.theme.colors.mainTextColor};
  }
`;
