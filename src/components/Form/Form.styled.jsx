import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const FormGroup = styled.label`
  display: flex;
  gap: 10px;
`;
export const Field = styled(FormikField)`
  padding: 4px;
`;
export const ErrorMessage = styled(FormikError)`
  font-size: 16px;
  color: red;
`;
export const Form = styled(FormikForm)`
  display: flex;
  gap: 10px;
`;
