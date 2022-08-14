import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  height: 40px;
  padding: 0 10px 0 10px;

  border: 1px solid var(--second-bg-color);
  outline: none;

  color: var(--main-text-color);
  font-size: 14px;

  :focus {
    border-color: var(--accent-bg-color);
  }

  ::placeholder {
    font-size: 12px;
    color: var(--main-text-color);
  }
`;
