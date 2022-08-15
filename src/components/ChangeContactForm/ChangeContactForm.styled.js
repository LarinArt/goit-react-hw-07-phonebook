import styled from 'styled-components';
import { Field } from 'formik';

export const MainTitle = styled.h2`
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  height: 40px;
  padding: 0 10px 0 10px;

  border: none;
  border-bottom: 1px solid ${p => p.theme.colors.secondBgColor};
  outline: none;

  color: ${p => p.theme.colors.mainTextColor};
  font-size: 14px;

  :focus {
    border-color: ${p => p.theme.colors.accentBgColor};
  }

  ::placeholder {
    font-size: 12px;
    color: ${p => p.theme.colors.mainTextColor};
  }
`;
